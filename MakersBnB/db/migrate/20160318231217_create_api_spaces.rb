class CreateApiSpaces < ActiveRecord::Migration
  def change
    create_table :api_spaces do |t|
      t.string :name
      t.integer :price
      t.string :location
      t.float :size
      t.string :property_type

      t.timestamps null: false
    end
  end
end
