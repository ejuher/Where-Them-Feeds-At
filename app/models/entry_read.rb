class EntryRead < ActiveRecord::Base
	validates :user_id, :entry_id, presence: true
	validates_uniqueness_of :user_id, :scope => [:entry_id]

	belongs_to :user
	belongs_to :entry
end
