Bsstrss.Routers.BsstrssRouter = Backbone.Router.extend({

	initialize: function(options) {
		this.$sidebar = options.$sidebar;
		this.$content = options.$content;
	},

	routes: {
		'': 'index',
		'feed/:id': 'showFeed',
		'entry/:id': 'showEntry'
	},

	sidebarIndex: function() {
		Bsstrss.feeds.fetch();
		
		var FeedsIndexView = new Bsstrss.Views.FeedsIndex({ 
			collection: Bsstrss.feeds
		});
		this._swapViews(this.$sidebar, FeedsIndexView);
	},

	index: function() {
		Bsstrss.entries.fetch();
		
		var EntriesIndexView = new Bsstrss.Views.EntriesIndex({
			collection: Bsstrss.entries
		});
		this._swapViews(this.$content, EntriesIndexView);
	},

	showFeed: function(id) {
		var feed = Bsstrss.feeds.getOrFetch(id);
		var feedShowView = new Bsstrss.Views.FeedShow({ model: feed });
		this._swapViews(this.$content, feedShowView);
	},

	showEntry: function(id) {
		var entry = Bsstrss.entries.getOrFetch(id);
		var entryShowView = new Bsstrss.Views.EntryShow({ model: entry });
		this._swapViews(this.$content, entryShowView);
	},

	_swapViews: function($target, view) {
		var id = $target.attr('id')
		this.currentViews = this.currentViews || {}
		if (id in this.currentViews) { this.currentViews[id].remove(); }
		this.currentViews[id] = view;
		$target.html(this.currentViews[id].render().$el);
	}
})
