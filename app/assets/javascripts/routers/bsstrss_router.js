'use strict';
Bsstrss.Routers.BsstrssRouter = Backbone.Router.extend({

	initialize: function(options) {
		Bsstrss.feeds     = new Bsstrss.Collections.Feeds();
    Bsstrss.entries   = new Bsstrss.Collections.Entries([], {});
    Bsstrss.favorites = new Bsstrss.Collections.Favorites([], {});
    Bsstrss.reads     = new Bsstrss.Collections.Reads();
    Bsstrss.reads.fetch();

		this.$sidebar = options.$sidebar;
		this.$content = options.$content;
	},

	routes: {
		''          : 'index',
		'feed/:id'  : 'showFeed',
		'entry/:id' : 'showEntry',
		'faves'     : 'showFaves'
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
		var feed = new Bsstrss.Models.Feed();
		feed.set('title', 'All'); 
		feed._entries = Bsstrss.entries;
		var EntriesIndexView = new Bsstrss.Views.FeedShow({ model: feed });
		this._swapViews(this.$content, EntriesIndexView);
	},

	showFeed: function(id) {
		var feed = Bsstrss.feeds.getOrFetch(id);
		var feedShowView = new Bsstrss.Views.FeedShow({ model: feed });
		this._swapViews(this.$content, feedShowView);
	},

	showEntry: function(id) {
		var entry = Bsstrss.entries.getOrFetch(id);
		var feed = new Bsstrss.Models.Feed();
		feed.set('title', entry.get('feed')); 
		feed.entry = entry;
		var feedShowView = new Bsstrss.Views.FeedShow({ model: feed	});
		this._swapViews(this.$content, feedShowView);
	},

	showFaves: function() {
		Bsstrss.favorites.fetch();
		var feed = new Bsstrss.Models.Feed();
		feed.set('title', 'Favorites');
		feed._entries = Bsstrss.favorites;
		var favoriteEntriesView = new Bsstrss.Views.FeedShow({ model: feed });
		this._swapViews(this.$content, favoriteEntriesView);
	},

	_swapViews: function($target, view) {
		var id = $target.attr('id');
		this.currentViews = this.currentViews || {}
		if (id in this.currentViews) { this.currentViews[id].remove(); }
		this.currentViews[id] = view;
		$target.html(this.currentViews[id].render().$el);
	}
})
