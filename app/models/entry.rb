class Entry < ActiveRecord::Base
	belongs_to :feed

	has_many :entry_reads
	# has_many :entry_readers

	paginates_per 6

	def self.create_by_fj(fj, id)
		og_entry = OpenGraph.new(fj.url)
		if og_entry.images.length == 1
			image_url = og_entry.images.first
		else
			reg_ex = /img.*src\W+(.*png|.*jpg|.*jpeg|.*gif)/.match(fj.summary)
			(!!reg_ex && reg_ex.length == 2) ? image_url = reg_ex[1] : ''
		end

		Entry.create!({
			title: fj.title,
			url: fj.url,
			content: fj.summary,
			summary: og_entry.description,
			image: image_url,
			published: fj.published,
			feed_id: id
		})
	end
end
