class ChangeTimeToDatetimeInEntries < ActiveRecord::Migration
  def change
  	remove_column :entries, :published
  	add_column :entries, :published, :datetime
  end
end
