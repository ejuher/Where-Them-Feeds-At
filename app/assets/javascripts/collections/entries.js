Bsstrss.Collections.Entries = Backbone.Collection.extend({
	url: '/api/entries',
	model: Bsstrss.Models.Entry,

	initialize: function() {
		this.page = 1;
	},

	getNextPage: function() {
		this.page += 1;
		this.fetch({ 
			remove: false, data: { page: this.page }
		});
	},

	getOrFetch: function(id) {
		var entries = this;
		var entry = this.get(id);
		if (entry) {
			entry.fetch();
		} else {
			entry = new Bsstrss.Models.Entry({ id: id });
			entry.fetch({
				success: function() { entries.add(entry) }
			});
		}
		return entry;
	}
})
