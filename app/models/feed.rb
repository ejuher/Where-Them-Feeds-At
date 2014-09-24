class Feed < ActiveRecord::Base
	validates :url, :title, presence: true

	def self.create_by_url(url)
		feed = Feedjira::Feed.fetch_and_parse(url)
		Feed.create!({
			url: feed.url, 
			title: feed.title, 
			description: feed.description
		})
		# extract entries
		# deal with errors
	end
end
