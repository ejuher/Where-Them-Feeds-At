class ChangeFeedsDescriptionToText < ActiveRecord::Migration
  def change
  	remove_column :feeds, :description
  	add_column :feeds, :description, :text
  end
end
