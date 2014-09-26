class ChangeEntriesToUseOpenGraphData < ActiveRecord::Migration
  def change
  	remove_column :entries, :summary
  	add_column :entries, :content, :text
  	add_column :entries, :summary, :text
  	add_column :entries, :image, :string
  end
end
