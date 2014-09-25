Bsstrss.Routers.BsstrssRouter = Backbone.Router.extend({

	initialize: function(options) {
		this.$sidebar = options.$sidebar;
		this.$content = options.$content;
	},

	routes: {
		'': 'index'
	},

	index: function() {
		Bsstrss.feeds.fetch();
		Bsstrss.entries.fetch();

		var FeedsIndexView = new Bsstrss.Views.FeedsIndex({ 
			collection: Bsstrss.feeds
		});
		this._swapViews(this.$sidebar, FeedsIndexView);

		var EntriesIndexView = new Bsstrss.Views.EntriesIndex({
			collection: Bsstrss.entries
		});
		this._swapViews(this.$content, EntriesIndexView);
	},


	_swapViews: function($target, view) {
		var id = $target.attr('id')
		this.currentViews = this.currentViews || {}
		if (id in this.currentViews) { this.currentViews[id].remove(); }
		this.currentViews[id] = view;
		$target.html(this.currentViews[id].render().$el);
	}
})
