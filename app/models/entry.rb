class Entry < ActiveRecord::Base
	belongs_to :feed

	def self.create_by_fj(fj, id)
		og_entry = OpenGraph.new(fj.url)
		Entry.create!({
			title: fj.title,
			url: fj.url,
			content: fj.summary,
			summary: og_entry.description,
			image: og_entry.images.first,
			published: fj.published,
			feed_id: id
		})
	end
end
