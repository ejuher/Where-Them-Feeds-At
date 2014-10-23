Bsstrss.Views.FeedsIndex = Backbone.CompositeView.extend({
	template: JST["feeds/index"],
	tagName: "ul",
	className: "sidebar-nav",

	initialize: function() {
		this.listenTo(this.collection, 'remove', this.render);
		this.listenTo(this.collection, 'add', this.addFeed);
		// this.listenTo();
	},

	addFeed: function(feed) {
		var feedItem = new Bsstrss.Views.FeedIndexItem({ model: feed });
		this.addSubview("div#feeds", feedItem);
	},

	render: function() {
		this.collection.each(this.addFeed.bind(this));
		var renderContent = this.template({ feeds: this.collection });
		this.$el.html(renderContent);
		this.attachSubviews();
		return this
	},



	// increment fave
	// how do we pass the number to the feed index? include it in the feed index jbuilder
	  // this is kindof awkward, would have to reset how this.collection gives feeds to the view
	// could also make the fave a view.
	// ok. could be a fave index item. could be passed the faves index? or the faves show? 
	// or a new route? fave_count?
	// well, a view needs a model. a backbone model is fetched at the show route
	// 

	// the sidebar could also be a user show page
	// 

})
		
