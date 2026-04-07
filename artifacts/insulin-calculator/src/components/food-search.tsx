import { useState, useEffect, useRef } from "react";
import { useSearchFood } from "@workspace/api-client-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, X, ChevronDown, ChevronUp, Loader2 } from "lucide-react";
import type { FoodItem } from "@workspace/api-client-react/src/generated/api.schemas";

interface SelectedFood {
  food: FoodItem;
  grams: number;
}

interface FoodSearchProps {
  onApply: (totalCarbs: number) => void;
}

function calcCarbs(food: FoodItem, grams: number): number {
  if (food.carbsPer100g == null) return 0;
  return Math.round((food.carbsPer100g * grams) / 100 * 10) / 10;
}

export function FoodSearch({ onApply }: FoodSearchProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [selectedFoods, setSelectedFoods] = useState<SelectedFood[]>([]);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedQuery(query), 400);
    return () => clearTimeout(timer);
  }, [query]);

  useEffect(() => {
    setShowResults(debouncedQuery.length >= 2);
  }, [debouncedQuery]);

  const { data: results, isFetching } = useSearchFood(
    { q: debouncedQuery },
    { query: { enabled: debouncedQuery.length >= 2 } }
  );

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setShowResults(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const totalCarbs = selectedFoods.reduce(
    (sum, sf) => sum + calcCarbs(sf.food, sf.grams),
    0
  );

  function addFood(food: FoodItem) {
    const defaultGrams = food.servingSizeG ?? 100;
    setSelectedFoods((prev) => [...prev, { food, grams: defaultGrams }]);
    setQuery("");
    setDebouncedQuery("");
    setShowResults(false);
  }

  function removeFood(index: number) {
    setSelectedFoods((prev) => prev.filter((_, i) => i !== index));
  }

  function updateGrams(index: number, grams: number) {
    setSelectedFoods((prev) =>
      prev.map((sf, i) => (i === index ? { ...sf, grams } : sf))
    );
  }

  function handleApply() {
    onApply(Math.round(totalCarbs * 10) / 10);
    setSelectedFoods([]);
    setQuery("");
    setIsOpen(false);
  }

  if (!isOpen) {
    return (
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="w-full text-sm text-primary hover:text-primary/80 flex items-center justify-center gap-1.5 py-2 transition-colors"
      >
        <Search className="h-3.5 w-3.5" />
        Search food database for carb info
        <ChevronDown className="h-3.5 w-3.5" />
      </button>
    );
  }

  return (
    <div className="space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
      <button
        type="button"
        onClick={() => setIsOpen(false)}
        className="w-full text-sm text-muted-foreground hover:text-foreground flex items-center justify-center gap-1.5 py-1 transition-colors"
      >
        <ChevronUp className="h-3.5 w-3.5" />
        Hide food search
      </button>

      <div ref={searchRef} className="relative">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search for a food (e.g. apple, white rice...)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => debouncedQuery.length >= 2 && setShowResults(true)}
            className="pl-9 pr-9 rounded-xl"
            autoComplete="off"
          />
          {isFetching && (
            <Loader2 className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground animate-spin" />
          )}
        </div>

        {showResults && results && (
          <div className="absolute z-50 w-full mt-1 bg-white rounded-xl shadow-lg border border-border overflow-hidden max-h-64 overflow-y-auto">
            {results.length === 0 ? (
              <p className="text-sm text-muted-foreground text-center py-4">
                No results found. Try a different search term.
              </p>
            ) : (
              <ul>
                {results.map((food, i) => (
                  <li key={i}>
                    <button
                      type="button"
                      onClick={() => addFood(food)}
                      className="w-full text-left px-4 py-3 hover:bg-secondary/50 transition-colors flex items-center justify-between gap-3 border-b border-border/50 last:border-0"
                    >
                      <div className="min-w-0">
                        <p className="text-sm font-medium truncate">{food.name}</p>
                        {food.brand && (
                          <p className="text-xs text-muted-foreground truncate">{food.brand}</p>
                        )}
                      </div>
                      <div className="shrink-0 text-right">
                        {food.carbsPer100g != null ? (
                          <Badge variant="secondary" className="text-xs">
                            {food.carbsPer100g}g carbs/100g
                          </Badge>
                        ) : (
                          <span className="text-xs text-muted-foreground">No carb data</span>
                        )}
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>

      {selectedFoods.length > 0 && (
        <div className="space-y-2">
          {selectedFoods.map((sf, i) => (
            <div
              key={i}
              className="flex items-center gap-2 p-3 bg-secondary/30 rounded-xl text-sm"
            >
              <div className="flex-1 min-w-0">
                <p className="font-medium truncate">{sf.food.name}</p>
                <p className="text-muted-foreground text-xs">
                  {calcCarbs(sf.food, sf.grams)} g carbs
                </p>
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                <Input
                  type="number"
                  min="1"
                  max="2000"
                  step="1"
                  value={sf.grams}
                  onChange={(e) => updateGrams(i, Math.max(1, parseFloat(e.target.value) || 1))}
                  className="w-16 h-8 text-sm text-center px-1"
                />
                <span className="text-muted-foreground text-xs">g</span>
                <button
                  type="button"
                  onClick={() => removeFood(i)}
                  className="text-muted-foreground hover:text-destructive transition-colors ml-1"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}

          <div className="flex items-center justify-between pt-1">
            <p className="text-sm font-medium">
              Total: <span className="text-primary">{totalCarbs} g carbs</span>
            </p>
            <Button
              type="button"
              size="sm"
              onClick={handleApply}
              className="rounded-lg h-8 px-4"
            >
              <Plus className="h-3.5 w-3.5 mr-1" />
              Use {totalCarbs} g
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
