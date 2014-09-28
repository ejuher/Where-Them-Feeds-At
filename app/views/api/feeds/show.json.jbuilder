json.(@feed, :title, :url, :description)

json.entries @feed.entries do |entry|
	json.feed entry.feed.title
	json.(entry, :title, :published, :image, :summary)
end
