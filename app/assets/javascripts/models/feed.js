Bsstrss.Models.Feed = Backbone.Model.extend({
	urlRoot: '/api/feeds',

	parse: function(jsonResp) {
		if (jsonResp.entries) {
			console.log('has entries');
			// this is not triggering anything in the feed show page
			this.entries().set(jsonResp.entries);
			delete jsonResp.lists;
		}
		return jsonResp;
	},

	entries: function() {
		this._entries = this._entires || 
			new Bsstrss.Collections.Entries();
		return this._entries;
	}
})