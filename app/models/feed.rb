class Feed < ActiveRecord::Base
	validates :url, :title, presence: true

	has_many :subscriptions
	has_many :users, through: :subscriptions

	def self.find_or_create_by_url(url)
		feed = Feed.find_by_feed_url(url)
		return feed if feed 
		feed = Feedjira::Feed.fetch_and_parse(url)
		if feed == 0 
			return nil
		else
			new_feed = Feed.create!({
				feed_url: url,
				url: feed.url, 
				title: feed.title, 
				description: feed.description
			})
			# this should return new_feed
		end
		# extract entries
	end
end
