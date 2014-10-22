Bsstrss.Collections.Entries = Backbone.Collection.extend({
	url: function() {
		return this.feed ? '/api/feeds/' + this.feed.id + '/entries' : 'api/entries';
	},

	model: Bsstrss.Models.Entry,

	comparator: function(entry) {
		return -entry.get("published");
	},

	initialize: function(models, options) {
		this.feed = options.feed;
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
