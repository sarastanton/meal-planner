class Ingredient < ApplicationRecord

  has_many :ingredient_recipes
  has_many :recipes, through: :ingredient_recipes

  def self.shopping_list
    list = []
    all_ingredients = Ingredient.all
    all_ingredients.each do |i|
      subset = all_ingredients.select{|selection| selection.description == i.description && selection.unit == i.unit}
      # byebug
      subset_total = 0
      subset.each do |ingredient|
        subset_total += ingredient.quantity
      end
      subset.each do |ingredient|
        if !list.include?(ingredient)
          list << "#{subset_total} #{ingredient.unit.pluralize(subset_total)} #{ingredient.description}"
        end
      end
    end
    return list.uniq
  end


end

# list = []
# all_ingredients = Ingredient.all
# all_ingredients.each do |i|
#   subset = all_ingredients.select{|selection| selection.description == i.description && selection.unit == i.unit}
#   subset_total = 0
#   subset.each do |ingredient|
#     subset_total += ingredient.quantity
#   end
#   subset.each do |ingredient|
#     list << "#{subset_total} #{ingredient.unit} #{ingredient.description}"
#   end
# end
# return list
