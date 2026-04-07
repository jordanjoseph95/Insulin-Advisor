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

  // More breakfast
  { name: "French toast (2 slices)", category: "meal", carbsPer100g: 35, servingSizeG: 130, servingSizeLabel: "2 slices (130g)" },
  { name: "Bagel with cream cheese", category: "meal", carbsPer100g: 43, servingSizeG: 135, servingSizeLabel: "1 bagel + 2 tbsp (135g)" },
  { name: "Granola with milk", category: "meal", carbsPer100g: 42, servingSizeG: 170, servingSizeLabel: "½ cup granola + milk (170g)" },
  { name: "Acai bowl", category: "meal", carbsPer100g: 29, servingSizeG: 280, servingSizeLabel: "1 bowl (280g)" },
  { name: "Smoothie (banana berry)", category: "meal", carbsPer100g: 16, servingSizeG: 350, servingSizeLabel: "1 large (350ml)" },
  { name: "Avocado toast", category: "meal", carbsPer100g: 27, servingSizeG: 130, servingSizeLabel: "2 slices (130g)" },
  { name: "Breakfast burrito", category: "meal", carbsPer100g: 28, servingSizeG: 230, servingSizeLabel: "1 burrito (230g)" },
  { name: "Porridge / oatmeal bowl", category: "meal", carbsPer100g: 12, servingSizeG: 350, servingSizeLabel: "1 bowl (350g)" },

  // Sandwiches & wraps
  { name: "Ham & cheese sandwich", category: "meal", carbsPer100g: 28, servingSizeG: 175, servingSizeLabel: "1 sandwich (175g)" },
  { name: "BLT sandwich", category: "meal", carbsPer100g: 25, servingSizeG: 200, servingSizeLabel: "1 sandwich (200g)" },
  { name: "Chicken wrap", category: "meal", carbsPer100g: 22, servingSizeG: 220, servingSizeLabel: "1 wrap (220g)" },
  { name: "Tuna melt sandwich", category: "meal", carbsPer100g: 26, servingSizeG: 190, servingSizeLabel: "1 sandwich (190g)" },
  { name: "Falafel wrap", category: "meal", carbsPer100g: 35, servingSizeG: 200, servingSizeLabel: "1 wrap (200g)" },
  { name: "Pita bread with hummus", category: "meal", carbsPer100g: 38, servingSizeG: 110, servingSizeLabel: "1 pita + 2 tbsp hummus (110g)" },
  { name: "Club sandwich", category: "meal", carbsPer100g: 30, servingSizeG: 250, servingSizeLabel: "1 sandwich (250g)" },
  { name: "Hotdog in bun", category: "meal", carbsPer100g: 28, servingSizeG: 130, servingSizeLabel: "1 hotdog + bun (130g)" },
  { name: "Sub / hoagie (6 inch)", category: "meal", carbsPer100g: 32, servingSizeG: 230, servingSizeLabel: "6 inch sub (230g)" },

  // Fast food & takeaway
  { name: "Cheeseburger (fast food)", category: "meal", carbsPer100g: 26, servingSizeG: 240, servingSizeLabel: "1 burger (240g)" },
  { name: "Chicken nuggets (6pc)", category: "meal", carbsPer100g: 22, servingSizeG: 100, servingSizeLabel: "6 pieces (100g)" },
  { name: "Fish and chips", category: "meal", carbsPer100g: 28, servingSizeG: 350, servingSizeLabel: "1 serving (350g)" },
  { name: "Nachos with cheese", category: "meal", carbsPer100g: 52, servingSizeG: 170, servingSizeLabel: "1 serving (170g)" },
  { name: "Tacos (2 corn, beef)", category: "meal", carbsPer100g: 24, servingSizeG: 170, servingSizeLabel: "2 tacos (170g)" },
  { name: "Quesadilla (cheese)", category: "meal", carbsPer100g: 34, servingSizeG: 170, servingSizeLabel: "1 quesadilla (170g)" },

  // Italian
  { name: "Lasagne", category: "meal", carbsPer100g: 14, servingSizeG: 375, servingSizeLabel: "1 serving (375g)" },
  { name: "Risotto", category: "meal", carbsPer100g: 23, servingSizeG: 300, servingSizeLabel: "1 serving (300g)" },
  { name: "Gnocchi (cooked)", category: "meal", carbsPer100g: 25, servingSizeG: 250, servingSizeLabel: "1 serving (250g)" },
  { name: "Minestrone soup", category: "meal", carbsPer100g: 8, servingSizeG: 400, servingSizeLabel: "1 bowl (400ml)" },
  { name: "Pasta with tomato sauce", category: "meal", carbsPer100g: 22, servingSizeG: 300, servingSizeLabel: "1 serving (300g)" },
  { name: "Pasta Bolognese", category: "meal", carbsPer100g: 19, servingSizeG: 350, servingSizeLabel: "1 serving (350g)" },
  { name: "Penne arrabbiata", category: "meal", carbsPer100g: 21, servingSizeG: 300, servingSizeLabel: "1 serving (300g)" },
  { name: "Garlic bread (slice)", category: "meal", carbsPer100g: 44, servingSizeG: 35, servingSizeLabel: "1 slice (35g)" },

  // Indian
  { name: "Chicken tikka masala", category: "meal", carbsPer100g: 9, servingSizeG: 300, servingSizeLabel: "1 serving (300g)" },
  { name: "Dal (lentil curry)", category: "meal", carbsPer100g: 14, servingSizeG: 300, servingSizeLabel: "1 bowl (300g)" },
  { name: "Biryani (chicken)", category: "meal", carbsPer100g: 23, servingSizeG: 350, servingSizeLabel: "1 serving (350g)" },
  { name: "Samosa (1 piece)", category: "meal", carbsPer100g: 30, servingSizeG: 60, servingSizeLabel: "1 samosa (60g)" },
  { name: "Idli (2 pieces)", category: "meal", carbsPer100g: 23, servingSizeG: 100, servingSizeLabel: "2 pieces (100g)" },
  { name: "Dosa", category: "meal", carbsPer100g: 38, servingSizeG: 120, servingSizeLabel: "1 dosa (120g)" },
  { name: "Palak paneer", category: "meal", carbsPer100g: 7, servingSizeG: 250, servingSizeLabel: "1 serving (250g)" },
  { name: "Chana masala", category: "meal", carbsPer100g: 18, servingSizeG: 250, servingSizeLabel: "1 serving (250g)" },

  // Chinese
  { name: "Fried rice", category: "meal", carbsPer100g: 25, servingSizeG: 250, servingSizeLabel: "1 serving (250g)" },
  { name: "Chow mein", category: "meal", carbsPer100g: 24, servingSizeG: 250, servingSizeLabel: "1 serving (250g)" },
  { name: "Spring rolls (2 pieces)", category: "meal", carbsPer100g: 27, servingSizeG: 100, servingSizeLabel: "2 rolls (100g)" },
  { name: "Dim sum (har gow, 3pc)", category: "meal", carbsPer100g: 22, servingSizeG: 90, servingSizeLabel: "3 pieces (90g)" },
  { name: "Sweet & sour pork", category: "meal", carbsPer100g: 17, servingSizeG: 250, servingSizeLabel: "1 serving (250g)" },
  { name: "Wonton soup", category: "meal", carbsPer100g: 9, servingSizeG: 400, servingSizeLabel: "1 bowl (400ml)" },
  { name: "Dumplings / potstickers (5pc)", category: "meal", carbsPer100g: 26, servingSizeG: 135, servingSizeLabel: "5 pieces (135g)" },

  // Japanese
  { name: "Sushi roll (6pc maki)", category: "meal", carbsPer100g: 28, servingSizeG: 130, servingSizeLabel: "6 pieces (130g)" },
  { name: "Ramen (noodle soup)", category: "meal", carbsPer100g: 14, servingSizeG: 500, servingSizeLabel: "1 bowl (500g)" },
  { name: "Udon noodle soup", category: "meal", carbsPer100g: 16, servingSizeG: 450, servingSizeLabel: "1 bowl (450g)" },
  { name: "Tonkatsu (fried pork cutlet)", category: "meal", carbsPer100g: 17, servingSizeG: 200, servingSizeLabel: "1 serving (200g)" },
  { name: "Onigiri / rice ball", category: "meal", carbsPer100g: 32, servingSizeG: 100, servingSizeLabel: "1 onigiri (100g)" },
  { name: "Gyoza (5 pieces)", category: "meal", carbsPer100g: 22, servingSizeG: 100, servingSizeLabel: "5 pieces (100g)" },

  // Mexican
  { name: "Enchiladas (2 pieces)", category: "meal", carbsPer100g: 22, servingSizeG: 270, servingSizeLabel: "2 enchiladas (270g)" },
  { name: "Tamale (1 piece)", category: "meal", carbsPer100g: 26, servingSizeG: 120, servingSizeLabel: "1 tamale (120g)" },
  { name: "Chips & guacamole", category: "meal", carbsPer100g: 38, servingSizeG: 90, servingSizeLabel: "1 serving (90g)" },
  { name: "Refried beans", category: "meal", carbsPer100g: 17, servingSizeG: 130, servingSizeLabel: "½ cup (130g)" },

  // Middle Eastern
  { name: "Falafel (3 pieces)", category: "meal", carbsPer100g: 31, servingSizeG: 90, servingSizeLabel: "3 pieces (90g)" },
  { name: "Hummus", category: "meal", carbsPer100g: 14, servingSizeG: 60, servingSizeLabel: "¼ cup (60g)" },
  { name: "Tabbouleh", category: "meal", carbsPer100g: 11, servingSizeG: 150, servingSizeLabel: "1 serving (150g)" },
  { name: "Shawarma wrap", category: "meal", carbsPer100g: 26, servingSizeG: 260, servingSizeLabel: "1 wrap (260g)" },
  { name: "Pita bread", category: "grain", carbsPer100g: 55, servingSizeG: 60, servingSizeLabel: "1 pita (60g)" },

  // Soups & stews
  { name: "Tomato soup", category: "meal", carbsPer100g: 7, servingSizeG: 400, servingSizeLabel: "1 bowl (400ml)" },
  { name: "Chicken noodle soup", category: "meal", carbsPer100g: 6, servingSizeG: 400, servingSizeLabel: "1 bowl (400ml)" },
  { name: "Beef stew", category: "meal", carbsPer100g: 10, servingSizeG: 350, servingSizeLabel: "1 bowl (350g)" },
  { name: "Lentil soup", category: "meal", carbsPer100g: 11, servingSizeG: 400, servingSizeLabel: "1 bowl (400ml)" },
  { name: "Pumpkin soup", category: "meal", carbsPer100g: 8, servingSizeG: 400, servingSizeLabel: "1 bowl (400ml)" },
  { name: "Clam chowder", category: "meal", carbsPer100g: 9, servingSizeG: 400, servingSizeLabel: "1 bowl (400ml)" },

  // More dinner dishes
  { name: "Shepherd's pie", category: "meal", carbsPer100g: 13, servingSizeG: 350, servingSizeLabel: "1 serving (350g)" },
  { name: "Beef stir-fry with rice", category: "meal", carbsPer100g: 19, servingSizeG: 350, servingSizeLabel: "1 serving (350g)" },
  { name: "Roast chicken with potatoes", category: "meal", carbsPer100g: 14, servingSizeG: 350, servingSizeLabel: "1 serving (350g)" },
  { name: "Macaroni & cheese", category: "meal", carbsPer100g: 22, servingSizeG: 250, servingSizeLabel: "1 serving (250g)" },
  { name: "Fish tacos (2 pieces)", category: "meal", carbsPer100g: 24, servingSizeG: 180, servingSizeLabel: "2 tacos (180g)" },
  { name: "Baked beans on toast", category: "meal", carbsPer100g: 26, servingSizeG: 280, servingSizeLabel: "1 serving (280g)" },
  { name: "Cottage pie", category: "meal", carbsPer100g: 11, servingSizeG: 350, servingSizeLabel: "1 serving (350g)" },
  { name: "Quiche (1 slice)", category: "meal", carbsPer100g: 18, servingSizeG: 120, servingSizeLabel: "1 slice (120g)" },

  // Desserts
  { name: "Chocolate cake (slice)", category: "dessert", carbsPer100g: 50, servingSizeG: 110, servingSizeLabel: "1 slice (110g)" },
  { name: "Apple pie (slice)", category: "dessert", carbsPer100g: 38, servingSizeG: 125, servingSizeLabel: "1 slice (125g)" },
  { name: "Cheesecake (slice)", category: "dessert", carbsPer100g: 32, servingSizeG: 120, servingSizeLabel: "1 slice (120g)" },
  { name: "Brownie", category: "dessert", carbsPer100g: 55, servingSizeG: 60, servingSizeLabel: "1 piece (60g)" },
  { name: "Banana bread (slice)", category: "dessert", carbsPer100g: 48, servingSizeG: 60, servingSizeLabel: "1 slice (60g)" },
  { name: "Scone", category: "dessert", carbsPer100g: 56, servingSizeG: 60, servingSizeLabel: "1 scone (60g)" },
  { name: "Sorbet", category: "dessert", carbsPer100g: 28, servingSizeG: 120, servingSizeLabel: "½ cup (120g)" },
  { name: "Jelly / Jell-O", category: "dessert", carbsPer100g: 16, servingSizeG: 140, servingSizeLabel: "½ cup (140g)" },
  { name: "Custard", category: "dessert", carbsPer100g: 16, servingSizeG: 120, servingSizeLabel: "½ cup (120g)" },
  { name: "Tiramisu", category: "dessert", carbsPer100g: 28, servingSizeG: 130, servingSizeLabel: "1 slice (130g)" },
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
