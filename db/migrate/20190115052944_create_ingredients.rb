class CreateIngredients < ActiveRecord::Migration[5.2]
  def change
    create_table :ingredients do |t|
      t.integer :quantity
      t.string :unit
      t.string :description
      
      t.timestamps
    end
  end
end
