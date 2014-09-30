json.(@feed, :title, :url, :description)
json.subscription_id @feed.subscriptions.where(user_id: current_user.id)[0].id

json.entries @feed.entries.order(published: :desc) do |entry|
	json.feed entry.feed.title
	json.(entry, :id, :title, :published, :image, :summary)
	entry_read = current_user.entry_reads.find_by_entry_id(entry.id)
	json.entry_read_id (!!entry_read ? entry_read.id : nil)
end
