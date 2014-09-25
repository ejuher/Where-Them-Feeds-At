class CreateEntries < ActiveRecord::Migration
  def change
    create_table :entries do |t|
      t.string :title
      t.string :url
      t.string :summary
      t.time :published

      t.timestamps
    end
  end
end
