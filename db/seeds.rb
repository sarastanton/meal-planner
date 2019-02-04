# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Ingredient.create(description: "bananas", quantity: "1", unit: "whole")
Ingredient.create(description: "blueberries", quantity: "1", unit: "cup")
Ingredient.create(description: "pancake mix", quantity: "1", unit: "serving")
Ingredient.create(description: "eggs", quantity: "2", unit: "whole")
Ingredient.create(description: "butter", quantity: "1", unit: "pat")
Ingredient.create(description: "shredded cheese", quantity: "1", unit: "handful")
Ingredient.create(description: "steel cut oats", quantity: "0.5", unit: "cup")
Ingredient.create(description: "milk", quantity: "1", unit: "cup")
Ingredient.create(description: "tuna", quantity: "1", unit: "can")
Ingredient.create(description: "mayo", quantity: "1", unit: "tablespoon")
Ingredient.create(description: "celery", quantity: "1", unit: "stick")
Ingredient.create(description: "soup", quantity: "1", unit: "can")
Ingredient.create(description: "lettuce", quantity: "1", unit: "head")
Ingredient.create(description: "black olives", quantity: "1", unit: "cup")
Ingredient.create(description: "feta cheese", quantity: "1", unit: "cup")
Ingredient.create(description: "tomatoes", quantity: "2", unit: "whole")
Ingredient.create(description: "sliced turkey breast", quantity: "3", unit: "slices")
Ingredient.create(description: "provolone cheese", quantity: "2", unit: "slices")
Ingredient.create(description: "lettuce", quantity: "0.25", unit: "head")
Ingredient.create(description: "whole wheat pita", quantity: "1", unit: "whole")
Ingredient.create(description: "zucchini", quantity: "3", unit: "whole")
Ingredient.create(description: "ground beef", quantity: "0.5", unit: "pound")
Ingredient.create(description: "onion", quantity: "0.5", unit: "whole")
Ingredient.create(description: "shredded cheese", quantity: "3", unit: "handful")
Ingredient.create(description: "chicken thighs", quantity: "1", unit: "pound")
Ingredient.create(description: "kale", quantity: "1", unit: "bunch")
Ingredient.create(description: "potatoes", quantity: "2", unit: "whole")
Ingredient.create(description: "spaghetti", quantity: "2", unit: "servings")
Ingredient.create(description: "spaghetti sauce", quantity: "1", unit: "jar")
Ingredient.create(description: "spaghetti cheese", quantity: "2", unit: "tablespoons")
Ingredient.create(description: "meatballs", quantity: "0.5", unit: "pound")
Ingredient.create(description: "asparagus", quantity: "1", unit: "bunch")
Ingredient.create(description: "sweet potatoes", quantity: "2", unit: "whole")
Ingredient.create(description: "red bell pepper", quantity: "2", unit: "whole")
Ingredient.create(description: "salmon", quantity: "2", unit: "fillets")
Ingredient.create(description: "BBQ sauce", quantity: "0.5", unit: "bottle")


Recipe.create(name: "Blueberry pancakes", directions: "Prepare pancake mix as directed on package. Serve with blueberries and banana slices.")
Recipe.create(name: "Scrambled eggs", directions: "Combine ingredients and serve.")
Recipe.create(name: "Oatmeal with blueberries and bananas", directions: "Prepare oatmeal as directed on package. Serve with blueberries and banana slices.")
Recipe.create(name: "Tuna salad", directions: "Combine all ingredients and serve.")
Recipe.create(name: "Canned soup", directions: "Prepare according to package directions and serve.")
Recipe.create(name: "Greek salad", directions: "Combine all ingredients and serve.")
Recipe.create(name: "Turkey wrap", directions: "Combine all ingredients and serve.")
Recipe.create(name: "Zucchini boats", directions: "Cook all ingredients and serve.")
Recipe.create(name: "Chicken with kale and potatoes", directions: "Cook all ingredients and serve.")
Recipe.create(name: "Spaghetti and meatballs", directions: "Cook all ingredients and serve.")
Recipe.create(name: "Salmon sheet pan", directions: "Cook all ingredients and serve.")
Recipe.create(name: "Slow cooker bbq chicken", directions: "Cook all ingredients and serve.")
Recipe.create(name: "Chicken sheet pan", directions: "Cook all ingredients and serve.")


Mealday.create(week_day: "Monday", meal_name: "breakfast", recipe_id: 1)
Mealday.create(week_day: "Monday", meal_name: "lunch", recipe_id: 4)
Mealday.create(week_day: "Monday", meal_name: "dinner", recipe_id: 8)
Mealday.create(week_day: "Tuesday", meal_name: "breakfast", recipe_id: 2)
Mealday.create(week_day: "Tuesday", meal_name: "lunch", recipe_id: 6)
Mealday.create(week_day: "Tuesday", meal_name: "dinner", recipe_id: 9)
Mealday.create(week_day: "Wednesday", meal_name: "breakfast", recipe_id: 3)
Mealday.create(week_day: "Wednesday", meal_name: "lunch", recipe_id: 7)
Mealday.create(week_day: "Wednesday", meal_name: "dinner", recipe_id: 10)
Mealday.create(week_day: "Thursday", meal_name: "breakfast", recipe_id: 1)
Mealday.create(week_day: "Thursday", meal_name: "lunch", recipe_id: 4)
Mealday.create(week_day: "Thursday", meal_name: "dinner", recipe_id: 11)
Mealday.create(week_day: "Friday", meal_name: "breakfast", recipe_id: 2)
Mealday.create(week_day: "Friday", meal_name: "lunch", recipe_id: 6)
Mealday.create(week_day: "Friday", meal_name: "dinner", recipe_id: 12)
Mealday.create(week_day: "Saturday", meal_name: "breakfast", recipe_id: 3)
Mealday.create(week_day: "Saturday", meal_name: "lunch", recipe_id: 7)
Mealday.create(week_day: "Saturday", meal_name: "dinner", recipe_id: 13)
Mealday.create(week_day: "Sunday", meal_name: "breakfast", recipe_id: 1)
Mealday.create(week_day: "Sunday", meal_name: "lunch", recipe_id: 4)
Mealday.create(week_day: "Sunday", meal_name: "dinner", recipe_id: 10)


Recipe.find(1).ingredients << [
  Ingredient.find(1),
  Ingredient.find(2),
  Ingredient.find(3),
  Ingredient.find(4),
  Ingredient.find(8)
]

Recipe.find(2).ingredients << [
  Ingredient.find(4),
  Ingredient.find(5),
  Ingredient.find(6)
]

Recipe.find(3).ingredients << [
  Ingredient.find(1),
  Ingredient.find(7),
  Ingredient.find(8),
  Ingredient.find(2)
]

Recipe.find(4).ingredients << [
  Ingredient.find(9),
  Ingredient.find(10),
  Ingredient.find(11),
  Ingredient.find(20),
  Ingredient.find(23)
]

Recipe.find(5).ingredients << [
  Ingredient.find(12)
]

Recipe.find(6).ingredients << [
  Ingredient.find(13),
  Ingredient.find(14),
  Ingredient.find(15),
  Ingredient.find(16)
]

Recipe.find(7).ingredients << [
  Ingredient.find(17),
  Ingredient.find(18),
  Ingredient.find(19),
  Ingredient.find(20)
]

Recipe.find(8).ingredients << [
  Ingredient.find(21),
  Ingredient.find(22),
  Ingredient.find(23),
  Ingredient.find(24)
]

Recipe.find(9).ingredients << [
  Ingredient.find(25),
  Ingredient.find(26),
  Ingredient.find(27)
]

Recipe.find(10).ingredients << [
  Ingredient.find(28),
  Ingredient.find(29),
  Ingredient.find(30),
  Ingredient.find(31)
]

Recipe.find(11).ingredients << [
  Ingredient.find(35),
  Ingredient.find(32),
  Ingredient.find(33)
]

Recipe.find(12).ingredients << [
  Ingredient.find(25),
  Ingredient.find(36),
  Ingredient.find(27)
]

Recipe.find(13).ingredients << [
  Ingredient.find(25),
  Ingredient.find(34),
  Ingredient.find(33)
]
