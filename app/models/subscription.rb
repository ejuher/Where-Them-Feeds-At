class Subscription < ActiveRecord::Base
	validates_uniqueness_of :user_id, :scope => [:feed_id]

	belongs_to :feed
	belongs_to :user

	def self.create_subscription(user_id, feed_id)
		# if subscription does not already exist
		unless Subscription.exists?(user_id: user_id, feed_id: feed_id)
			Subscription.create!({
				user_id: user_id,
				feed_id: feed_id
			})
		end
	end
end
