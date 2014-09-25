Bsstrss.Collections.Entries = Backbone.Collection.extend({
	url: '/entries',
	model: Bsstrss.Models.Entry,

	getOrFetch: function(id) {
		var entries = this;
		var entry = this.get(id);
		if (entry) {
			entry.fetch();
		} else {
			entry = new Bsstrss.Models.entry({ id: id });
			entry.fetch({
				success: function() { entries.save(entry) }
			});
		}
		return entry;
	}
})