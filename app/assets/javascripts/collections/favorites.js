Bsstrss.Collections.Favorites = Backbone.Collection.extend({
	url: '/api/favorites',
	model: Bsstrss.Models.Favorite,

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
})
