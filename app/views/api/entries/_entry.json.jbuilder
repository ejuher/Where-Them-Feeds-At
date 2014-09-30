json.(entry, :id, :title, :published, :image, :summary, :url)
entry_read = current_user.entry_reads.find_by_entry_id(entry.id)
json.entry_read_id (!!entry_read ? entry_read.id : nil)
