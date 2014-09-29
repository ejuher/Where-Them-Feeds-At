Bsstrss.Models.Feed = Backbone.Model.extend({
	urlRoot: '/api/feeds',

	parse: function(jsonResp) {
		if (jsonResp.entries) {
			this.entries().set(jsonResp.entries, {parse: true});
			delete jsonResp.lists;
		}
		return jsonResp;
	},

	entries: function() {
		this._entries = this._entries || 
			new Bsstrss.Collections.Entries();
		return this._entries;
	}
})