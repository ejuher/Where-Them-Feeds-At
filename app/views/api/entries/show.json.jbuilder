user_entry_reads = current_user.entry_reads
user_favorites = current_user.favorites
json.partial!(
	"entry", 
	entry: entry, 
	entry_reads: user_entry_reads, 
	favorites: user_favorites
)
json.content @entry.content
json.feed @entry.feed.title
json.feed_id @entry.feed.id