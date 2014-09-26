class Feed < ActiveRecord::Base
	validates :url, :title, presence: true

	has_many :entries

	has_many :subscriptions
	has_many :users, through: :subscriptions

	has_many :feed_categories
	has_many :categories, through: :feed_categories

	def self.find_or_create_by_url(url)
		feed = Feed.find_by_feed_url(url)


		if feed
			feed.get_entries
			return feed
		end 

		feed = Feedjira::Feed.fetch_and_parse(url)

		if feed.class == Fixnum 
			return nil
		else
			new_feed = Feed.create!({
				feed_url: url,
				url: feed.url, 
				title: feed.title, 
				description: feed.description
			})
			feed.get_entries
			return new_feed
		end
	end

	def get_entries
		fj_feed = Feedjira::Feed.fetch_and_parse(self.feed_url)
		existing_entry_urls = self.entries.pluck(:url)

		fj_feed.entries.each do |entry|
			unless existing_entry_urls.include?(fj_feed.url)			
				Entry.create!({
					title: entry.title,
					url: entry.url,
					summary: entry.summary,
					published: entry.published,
					feed_id: self.id
				})
			end
		end
	end
end
