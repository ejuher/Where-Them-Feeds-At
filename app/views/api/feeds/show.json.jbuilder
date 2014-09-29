json.(@feed, :title, :url, :description)

json.entries @feed.entries do |entry|
	json.feed entry.feed.title
	json.(entry, :id, :title, :published, :image, :summary)
end
