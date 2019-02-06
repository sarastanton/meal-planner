class CreateIngredients < ActiveRecord::Migration[5.2]
  def change
    create_table :ingredients do |t|

      t.belongs_to :recipe

      t.integer :quantity
      t.string :unit
      t.string :description

    end
  end
end
