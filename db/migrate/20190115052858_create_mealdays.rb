class CreateMealdays < ActiveRecord::Migration[5.2]
  def change
    create_table :mealdays do |t|
      t.string :week_day
      t.string :meal_name
      t.belongs_to :recipe

      t.timestamps
    end
  end
end
