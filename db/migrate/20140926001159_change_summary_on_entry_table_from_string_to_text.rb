class ChangeSummaryOnEntryTableFromStringToText < ActiveRecord::Migration
  def change
  	remove_column :entries, :summary
  	add_column :entries, :summary, :text
  end
end
