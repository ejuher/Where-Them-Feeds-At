class AddFeedUrlCol < ActiveRecord::Migration
  def change
  	add_column :feeds, :feed_url, :string
  end
end
