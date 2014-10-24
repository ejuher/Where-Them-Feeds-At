json.(entry, :id, :title, :published, :image, :summary, :url)

entry_read = entry_reads.find_by_entry_id(entry.id)
json.entry_read_id (!!entry_read ? entry_read.id : nil)

favorite = favorites.find_by_entry_id(entry.id)
json.favorite_id (!!favorite ? favorite.id : nil)
