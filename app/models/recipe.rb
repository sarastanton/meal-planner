class Recipe < ApplicationRecord

  has_many :mealdays

  has_many :ingredient_recipes
  has_many :ingredients, through: :ingredient_recipes

  accepts_nested_attributes_for :ingredients, allow_destroy: true

end
