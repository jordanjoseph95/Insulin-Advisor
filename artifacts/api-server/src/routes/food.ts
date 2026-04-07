import { Router, type IRouter } from "express";
import { SearchFoodQueryParams } from "@workspace/api-zod";
import { searchBuiltinFoods } from "../lib/food-database";

const router: IRouter = Router();

interface OpenFoodFactsProduct {
  product_name?: string;
  brands?: string;
  nutriments?: {
    carbohydrates_100g?: number;
  };
  serving_size?: string;
  serving_quantity?: string | number;
}

interface OpenFoodFactsResponse {
  products?: OpenFoodFactsProduct[];
}

function parseServingGrams(product: OpenFoodFactsProduct): number | null {
  if (product.serving_quantity != null) {
    const qty = parseFloat(String(product.serving_quantity));
    if (!isNaN(qty) && qty > 0) return qty;
  }
  if (product.serving_size) {
    const match = product.serving_size.match(/(\d+\.?\d*)\s*g/i);
    if (match) {
      const g = parseFloat(match[1]);
      if (!isNaN(g) && g > 0) return g;
    }
  }
  return null;
}

async function fetchOpenFoodFacts(query: string): Promise<{
  name: string;
  brand: string | null;
  carbsPer100g: number | null;
  servingSizeG: number | null;
  servingSizeLabel: string | null;
}[]> {
  try {
    const url = new URL("https://world.openfoodfacts.org/cgi/search.pl");
    url.searchParams.set("action", "process");
    url.searchParams.set("search_terms", query);
    url.searchParams.set("json", "1");
    url.searchParams.set("fields", "product_name,brands,nutriments,serving_size,serving_quantity");
    url.searchParams.set("page_size", "10");

    const response = await fetch(url.toString(), {
      signal: AbortSignal.timeout(5000),
      headers: { "User-Agent": "InsulinDoseCalculator/1.0" },
    });

    if (!response.ok) return [];

    const data = (await response.json()) as OpenFoodFactsResponse;
    const products = data.products ?? [];

    return products
      .filter((p) => p.product_name && p.nutriments?.carbohydrates_100g != null)
      .map((p) => ({
        name: p.product_name!.trim(),
        brand: p.brands ? p.brands.trim() : null,
        carbsPer100g: p.nutriments!.carbohydrates_100g!,
        servingSizeG: parseServingGrams(p),
        servingSizeLabel: p.serving_size ? p.serving_size.trim() : null,
      }))
      .filter((item) => item.carbsPer100g != null && item.carbsPer100g >= 0 && item.carbsPer100g <= 100);
  } catch {
    return [];
  }
}

router.get("/food/search", async (req, res): Promise<void> => {
  const parsed = SearchFoodQueryParams.safeParse(req.query);
  if (!parsed.success || !parsed.data.q.trim()) {
    res.status(400).json({ error: "Search query is required" });
    return;
  }

  const query = parsed.data.q.trim();

  const builtinResults = searchBuiltinFoods(query).map((food) => ({
    name: food.name,
    brand: null as string | null,
    carbsPer100g: food.carbsPer100g as number | null,
    servingSizeG: food.servingSizeG,
    servingSizeLabel: food.servingSizeLabel,
  }));

  let externalResults: typeof builtinResults = [];
  if (builtinResults.length < 5) {
    externalResults = await fetchOpenFoodFacts(query);
  }

  const builtinNames = new Set(builtinResults.map((f) => f.name.toLowerCase()));
  const merged = [
    ...builtinResults,
    ...externalResults.filter((f) => !builtinNames.has(f.name.toLowerCase())),
  ].slice(0, 15);

  res.json(merged);
});

export default router;
