class CreateEntryReads < ActiveRecord::Migration
  def change
    create_table :entry_reads do |t|
      t.integer :user_id
      t.integer :entry_id

      t.timestamps
    end
  end
end
