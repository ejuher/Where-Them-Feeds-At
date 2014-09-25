class Category < ActiveRecord::Base
	validates :name, presence: true, uniqueness: true

	has_many :feed_categories
	has_many :feeds, through: :feed_categories

	has_many :user_categories
	has_many :users, through: :user_categories
end
