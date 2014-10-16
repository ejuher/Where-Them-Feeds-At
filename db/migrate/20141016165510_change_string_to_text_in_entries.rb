class ChangeStringToTextInEntries < ActiveRecord::Migration
  def up
  	change_column :entries, :url, :text
  	change_column :entries, :image, :text
  end

  def down
  	change_column :entries, :url, :string
  	change_column :entries, :image, :string
  end
end
