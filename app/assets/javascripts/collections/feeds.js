Bsstrss.Collections.Feeds = Backbone.Collection.extend({
	url: '/api/feeds',
	model: Bsstrss.Models.Feed,

	parse: function(jsonResp, options) {
		if (typeof(jsonResp[0].faves) != 'undefined')  {
			this.faveCount = jsonResp[0].faves;
		}
		return jsonResp;
	},

	getOrFetch: function(id) {
		var feeds = this;
		var feed = this.get(id);
		if (feed) {
			feed.fetch();
		} else {
			feed = new Bsstrss.Models.Feed({ id: id });
			feed.fetch({
				success: function() { 
					feeds.add(feed); 
				}
			});
		}
		return feed;
	}
})