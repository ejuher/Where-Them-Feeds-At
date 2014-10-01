json.partial!("entry", entry: @entry)
json.content @entry.content
json.feed @entry.feed.title
json.feed_id @entry.feed.id