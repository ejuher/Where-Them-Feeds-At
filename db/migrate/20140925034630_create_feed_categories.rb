class CreateFeedCategories < ActiveRecord::Migration
  def change
    create_table :feed_categories do |t|
    	t.integer :feed_id
    	t.integer :category_id

      t.timestamps
    end
  end
end
