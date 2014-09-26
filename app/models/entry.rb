class Entry < ActiveRecord::Base
	belongs_to :feed

	def self.create_by_fj(fj, id)
		Entry.create!({
			title: fj.title,
			url: fj.url,
			summary: fj.summary,
			published: fj.published,
			feed_id: id
		})
	end
end
