json.array! @feeds do |feed|
	json.(feed, :id, :title, :url, :description)
	# number of unread entries
	json.read_entries @read_entries.where(feed_id: feed.id).count
	json.num_entries feed.entries.count
	json.faves @faves
end


