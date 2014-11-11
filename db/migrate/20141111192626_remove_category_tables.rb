class RemoveCategoryTables < ActiveRecord::Migration
  def change
  	drop_table :user_categories 
  	drop_table :feed_categories
  	drop_table :categories
  end
end
