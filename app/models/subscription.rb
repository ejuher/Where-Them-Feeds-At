class Subscription < ActiveRecord::Base
	validates_uniqueness_of :user_id, :scope => [:feed_id]

	belongs_to :feed
	belongs_to :user
end
