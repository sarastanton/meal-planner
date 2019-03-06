class Mealday < ApplicationRecord

  belongs_to :recipe
  after_initialize :init

  def init
    self.recipe ||= Recipe.new(name: "", directions: "", ingredients: [])
  end

end
