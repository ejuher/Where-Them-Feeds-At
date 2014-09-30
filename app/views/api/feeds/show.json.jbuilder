json.(@feed, :title, :url, :description)
json.subscription_id @feed.subscriptions.where(user_id: current_user.id)[0].id

json.entries @feed.entries.page(1) do |entry|
	json.feed entry.feed.title
	json.(entry, :id, :title, :published, :image, :summary)
end
