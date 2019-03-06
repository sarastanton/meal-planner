class MealdaySerializer < ActiveModel::Serializer
  attributes :id, :week_day, :meal_name, :recipe

  belongs_to :recipe

  def recipe
    !self.object.recipe ? {name: "", directions: "", ingredients: []} : self.object.recipe
  end

end
