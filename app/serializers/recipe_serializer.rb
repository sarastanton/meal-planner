class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :directions

  has_many :ingredients
  has_many :ingredients, through: :ingredient_recipes

end
