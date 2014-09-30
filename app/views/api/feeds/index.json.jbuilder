json.array! @feeds do |feed|
	json.(feed, :id, :title, :url, :description)
	# number of unread entries
	read_entries = current_user.read_entries.where(feed_id: feed.id).count
	total_entries = feed.entries.count
	json.num_unread_entries (total_entries - read_entries)
end