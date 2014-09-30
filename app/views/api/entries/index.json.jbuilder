json.array!(@entries) do |entry|
	json.partial!("entry", entry: entry)
	json.feed entry.feed.title
	json.feed_id entry.feed.id
end