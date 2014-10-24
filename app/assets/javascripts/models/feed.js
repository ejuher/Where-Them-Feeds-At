Bsstrss.Models.Feed = Backbone.Model.extend({
	urlRoot: '/api/feeds',

	parse: function(jsonResp, options) {
		if (jsonResp.entries) {
			this.addNewEntries(jsonResp.entries, options);
			delete jsonResp.lists;
		}
		return jsonResp;
	},

	entries: function() {
		this._entries = this._entries || 
			new Bsstrss.Collections.Entries([], { feed: this });
		return this._entries;
	},

	addNewEntries: function(respEntries, options) {
		var feed = this;
		var ids = this.entries().pluck('id');
		respEntries.forEach(function(respEntry) {
			if ((_.contains(ids, respEntry.id)) != true) {
				var newEntry = new Bsstrss.Models.Entry(respEntry);
        if(options.silent) {
        	feed.entries().unshift(newEntry, { silent: true });
        	feed.entries().trigger("refreshAdd", newEntry);
        } else {
					feed.entries().add(newEntry);
				}
			}
		})
	}

})