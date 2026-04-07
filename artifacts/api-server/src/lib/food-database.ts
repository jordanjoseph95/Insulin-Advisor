export interface BuiltinFood {
  name: string;
  category: string;
  carbsPer100g: number;
  servingSizeG: number | null;
  servingSizeLabel: string | null;
}

export const BUILTIN_FOODS: BuiltinFood[] = [
  // Fruits
  { name: "Apple", category: "fruit", carbsPer100g: 14, servingSizeG: 182, servingSizeLabel: "1 medium (182g)" },
  { name: "Banana", category: "fruit", carbsPer100g: 23, servingSizeG: 118, servingSizeLabel: "1 medium (118g)" },
  { name: "Orange", category: "fruit", carbsPer100g: 12, servingSizeG: 131, servingSizeLabel: "1 medium (131g)" },
  { name: "Grapes", category: "fruit", carbsPer100g: 18, servingSizeG: 150, servingSizeLabel: "1 cup (150g)" },
  { name: "Strawberries", category: "fruit", carbsPer100g: 8, servingSizeG: 152, servingSizeLabel: "1 cup (152g)" },
  { name: "Blueberries", category: "fruit", carbsPer100g: 14, servingSizeG: 148, servingSizeLabel: "1 cup (148g)" },
  { name: "Mango", category: "fruit", carbsPer100g: 15, servingSizeG: 165, servingSizeLabel: "1 cup (165g)" },
  { name: "Watermelon", category: "fruit", carbsPer100g: 8, servingSizeG: 280, servingSizeLabel: "2 cups (280g)" },
  { name: "Pear", category: "fruit", carbsPer100g: 15, servingSizeG: 178, servingSizeLabel: "1 medium (178g)" },
  { name: "Peach", category: "fruit", carbsPer100g: 10, servingSizeG: 150, servingSizeLabel: "1 medium (150g)" },
  { name: "Cherries", category: "fruit", carbsPer100g: 16, servingSizeG: 138, servingSizeLabel: "1 cup (138g)" },
  { name: "Kiwi", category: "fruit", carbsPer100g: 15, servingSizeG: 76, servingSizeLabel: "1 medium (76g)" },
  { name: "Pineapple", category: "fruit", carbsPer100g: 13, servingSizeG: 165, servingSizeLabel: "1 cup (165g)" },

  // Grains & Bread
  { name: "White bread", category: "grain", carbsPer100g: 49, servingSizeG: 30, servingSizeLabel: "1 slice (30g)" },
  { name: "Whole wheat bread", category: "grain", carbsPer100g: 43, servingSizeG: 30, servingSizeLabel: "1 slice (30g)" },
  { name: "Sourdough bread", category: "grain", carbsPer100g: 47, servingSizeG: 30, servingSizeLabel: "1 slice (30g)" },
  { name: "White rice (cooked)", category: "grain", carbsPer100g: 28, servingSizeG: 186, servingSizeLabel: "1 cup cooked (186g)" },
  { name: "Brown rice (cooked)", category: "grain", carbsPer100g: 23, servingSizeG: 202, servingSizeLabel: "1 cup cooked (202g)" },
  { name: "Pasta (cooked)", category: "grain", carbsPer100g: 25, servingSizeG: 140, servingSizeLabel: "1 cup cooked (140g)" },
  { name: "Spaghetti (cooked)", category: "grain", carbsPer100g: 25, servingSizeG: 140, servingSizeLabel: "1 cup cooked (140g)" },
  { name: "Oatmeal (cooked)", category: "grain", carbsPer100g: 12, servingSizeG: 234, servingSizeLabel: "1 cup cooked (234g)" },
  { name: "Cornflakes cereal", category: "grain", carbsPer100g: 84, servingSizeG: 28, servingSizeLabel: "1 cup (28g)" },
  { name: "Muesli", category: "grain", carbsPer100g: 66, servingSizeG: 55, servingSizeLabel: "½ cup (55g)" },
  { name: "Bagel", category: "grain", carbsPer100g: 53, servingSizeG: 105, servingSizeLabel: "1 medium (105g)" },
  { name: "English muffin", category: "grain", carbsPer100g: 47, servingSizeG: 57, servingSizeLabel: "1 muffin (57g)" },
  { name: "Tortilla (flour)", category: "grain", carbsPer100g: 52, servingSizeG: 45, servingSizeLabel: "1 medium (45g)" },
  { name: "Tortilla (corn)", category: "grain", carbsPer100g: 44, servingSizeG: 26, servingSizeLabel: "1 small (26g)" },
  { name: "Crackers (salted)", category: "grain", carbsPer100g: 72, servingSizeG: 28, servingSizeLabel: "1 serving (28g)" },

  // Vegetables (starchy)
  { name: "Potato (baked)", category: "vegetable", carbsPer100g: 21, servingSizeG: 173, servingSizeLabel: "1 medium (173g)" },
  { name: "Sweet potato (baked)", category: "vegetable", carbsPer100g: 20, servingSizeG: 130, servingSizeLabel: "1 medium (130g)" },
  { name: "Corn (cooked)", category: "vegetable", carbsPer100g: 19, servingSizeG: 154, servingSizeLabel: "1 cup (154g)" },
  { name: "Peas (cooked)", category: "vegetable", carbsPer100g: 14, servingSizeG: 160, servingSizeLabel: "1 cup (160g)" },
  { name: "Lentils (cooked)", category: "vegetable", carbsPer100g: 20, servingSizeG: 198, servingSizeLabel: "1 cup (198g)" },
  { name: "Chickpeas (cooked)", category: "vegetable", carbsPer100g: 27, servingSizeG: 164, servingSizeLabel: "1 cup (164g)" },
  { name: "Black beans (cooked)", category: "vegetable", carbsPer100g: 24, servingSizeG: 172, servingSizeLabel: "1 cup (172g)" },
  { name: "Kidney beans (cooked)", category: "vegetable", carbsPer100g: 22, servingSizeG: 177, servingSizeLabel: "1 cup (177g)" },
  { name: "Carrot (raw)", category: "vegetable", carbsPer100g: 10, servingSizeG: 61, servingSizeLabel: "1 medium (61g)" },

  // Dairy & Dairy Alternatives
  { name: "Milk (whole)", category: "dairy", carbsPer100g: 5, servingSizeG: 244, servingSizeLabel: "1 cup (244g)" },
  { name: "Milk (skim)", category: "dairy", carbsPer100g: 5, servingSizeG: 244, servingSizeLabel: "1 cup (244g)" },
  { name: "Yogurt (plain)", category: "dairy", carbsPer100g: 4, servingSizeG: 245, servingSizeLabel: "1 cup (245g)" },
  { name: "Yogurt (fruit-flavoured)", category: "dairy", carbsPer100g: 19, servingSizeG: 170, servingSizeLabel: "¾ cup (170g)" },
  { name: "Ice cream (vanilla)", category: "dairy", carbsPer100g: 24, servingSizeG: 66, servingSizeLabel: "½ cup (66g)" },
  { name: "Oat milk", category: "dairy", carbsPer100g: 7, servingSizeG: 240, servingSizeLabel: "1 cup (240g)" },

  // Drinks
  { name: "Apple juice", category: "drink", carbsPer100g: 11, servingSizeG: 240, servingSizeLabel: "1 cup (240ml)" },
  { name: "Orange juice", category: "drink", carbsPer100g: 10, servingSizeG: 240, servingSizeLabel: "1 cup (240ml)" },
  { name: "Coca-Cola / cola", category: "drink", carbsPer100g: 11, servingSizeG: 355, servingSizeLabel: "1 can (355ml)" },
  { name: "Lemonade", category: "drink", carbsPer100g: 10, servingSizeG: 240, servingSizeLabel: "1 cup (240ml)" },
  { name: "Sports drink (Gatorade)", category: "drink", carbsPer100g: 6, servingSizeG: 591, servingSizeLabel: "1 bottle (591ml)" },

  // Snacks & Sweets
  { name: "Chocolate bar (milk)", category: "snack", carbsPer100g: 60, servingSizeG: 40, servingSizeLabel: "1 bar (40g)" },
  { name: "Chocolate chip cookie", category: "snack", carbsPer100g: 63, servingSizeG: 16, servingSizeLabel: "1 cookie (16g)" },
  { name: "Potato chips", category: "snack", carbsPer100g: 53, servingSizeG: 28, servingSizeLabel: "1 serving (28g)" },
  { name: "Granola bar", category: "snack", carbsPer100g: 64, servingSizeG: 28, servingSizeLabel: "1 bar (28g)" },
  { name: "Pretzels", category: "snack", carbsPer100g: 80, servingSizeG: 28, servingSizeLabel: "1 serving (28g)" },
  { name: "Rice cakes", category: "snack", carbsPer100g: 81, servingSizeG: 9, servingSizeLabel: "1 cake (9g)" },
  { name: "Honey", category: "snack", carbsPer100g: 82, servingSizeG: 21, servingSizeLabel: "1 tbsp (21g)" },
  { name: "Jam / fruit preserve", category: "snack", carbsPer100g: 69, servingSizeG: 20, servingSizeLabel: "1 tbsp (20g)" },

  // Meals & Fast Food
  { name: "Pizza (cheese, 1 slice)", category: "meal", carbsPer100g: 33, servingSizeG: 107, servingSizeLabel: "1 slice (107g)" },
  { name: "Hamburger bun", category: "meal", carbsPer100g: 51, servingSizeG: 47, servingSizeLabel: "1 bun (47g)" },
  { name: "French fries", category: "meal", carbsPer100g: 41, servingSizeG: 117, servingSizeLabel: "medium serving (117g)" },
  { name: "Burrito (bean & cheese)", category: "meal", carbsPer100g: 30, servingSizeG: 200, servingSizeLabel: "1 burrito (200g)" },
  { name: "Pancake", category: "meal", carbsPer100g: 38, servingSizeG: 77, servingSizeLabel: "1 medium (77g)" },
  { name: "Waffle", category: "meal", carbsPer100g: 33, servingSizeG: 75, servingSizeLabel: "1 waffle (75g)" },
  { name: "Muffin (blueberry)", category: "meal", carbsPer100g: 52, servingSizeG: 113, servingSizeLabel: "1 large (113g)" },
  { name: "Donut (glazed)", category: "meal", carbsPer100g: 50, servingSizeG: 60, servingSizeLabel: "1 donut (60g)" },

  // International / Asian
  { name: "Noodles (cooked)", category: "grain", carbsPer100g: 25, servingSizeG: 160, servingSizeLabel: "1 cup cooked (160g)" },
  { name: "Roti / chapati", category: "grain", carbsPer100g: 55, servingSizeG: 40, servingSizeLabel: "1 roti (40g)" },
  { name: "Naan bread", category: "grain", carbsPer100g: 49, servingSizeG: 90, servingSizeLabel: "1 piece (90g)" },
  { name: "Sushi rice", category: "grain", carbsPer100g: 32, servingSizeG: 150, servingSizeLabel: "1 cup (150g)" },
  { name: "Pad thai", category: "meal", carbsPer100g: 26, servingSizeG: 300, servingSizeLabel: "1 serving (300g)" },
];

export function searchBuiltinFoods(query: string): BuiltinFood[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];

  const words = q.split(/\s+/);

  return BUILTIN_FOODS
    .map((food) => {
      const nameLower = food.name.toLowerCase();
      const categoryLower = food.category.toLowerCase();

      let score = 0;
      for (const word of words) {
        if (nameLower.startsWith(word)) score += 3;
        else if (nameLower.includes(word)) score += 2;
        else if (categoryLower.includes(word)) score += 1;
      }
      return { food, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 15)
    .map((item) => item.food);
}
