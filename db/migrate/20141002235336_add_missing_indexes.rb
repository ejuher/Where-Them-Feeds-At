class AddMissingIndexes < ActiveRecord::Migration
  def change
    add_index :entries, :feed_id
    add_index :entry_reads, :user_id
    add_index :entry_reads, :entry_id
    add_index :entry_reads, [:entry_id, :user_id]
    add_index :feed_categories, :feed_id
    add_index :feed_categories, :category_id
    add_index :subscriptions, :feed_id
    add_index :subscriptions, :user_id
    add_index :subscriptions, [:feed_id, :user_id]
    add_index :user_categories, :user_id
    add_index :user_categories, :category_id
  end
end
