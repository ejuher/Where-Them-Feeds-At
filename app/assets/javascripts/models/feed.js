Bsstrss.Models.Feed = Backbone.Model.extend({
	urlRoot: '/api/feeds',

	parse: function(jsonResp) {
		if (jsonResp.entries) {
			this.addNewEntries(jsonResp.entries);
			// this.entries().set(jsonResp.entries, { parse: true });
			delete jsonResp.lists;
		}
		return jsonResp;
	},

	entries: function() {
		this._entries = this._entries || 
			new Bsstrss.Collections.Entries([], { feed: this });
		return this._entries;
	},

	addNewEntries: function(respEntries) {
		var feed = this;
		var ids = this.entries().pluck('id');
		respEntries.forEach(function(respEntry) {

			if ((_.contains(ids, respEntry.id)) != true) {
				var newEntry = new Bsstrss.Models.Entry(respEntry);
				feed.entries().add(newEntry);
			}
		})
	}

})