Bsstrss.Routers.BsstrssRouter = Backbone.Router.extend({

	initialize: function(options) {
		this.$sidebar = options.$sidebar;
		this.$content = options.$content;

		// create sidebar view and render and put on dom
	},

	routes: {
		'': 'index'
	},

	index: function() {
		// is it ok to render 2 seperate views here?
		// one for this.$sidebar and one for this.$content
		Bsstrss.feeds.fetch();
		var FeedsIndexView = new Bsstrss.Views.FeedsIndex({ 
			collection: Bsstrss.feeds
		});
		this._swapViews(this.$sidebar, FeedsIndexView);


	},

	// may need to create seperate swap functions for this.$sidebar 
	// and this.%content
	_swapViews: function($target, view) {
		this.currentView && this.currentView.remove()
		this.currentView = view;
		$target.html(this.currentView.render().$el);
	}
})
