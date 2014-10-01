Bsstrss.Views.FeedsIndex = Backbone.CompositeView.extend({
	template: JST["feeds/index"],
	tagName: "ul",
	className: "sidebar-nav",

	initialize: function() {
		this.listenTo(this.collection, 'remove', this.render);
		this.listenTo(this.collection, 'add', this.addFeed);
		this.collection.each(this.addFeed.bind(this));
	},

	addFeed: function(feed) {
		var feedItem = new Bsstrss.Views.FeedIndexItem({ model: feed });
		this.addSubview("div#feeds", feedItem);
	},

	render: function() {
		var renderContent = this.template({ feeds: this.collection });
		this.$el.html(renderContent);
		return this
	},
})
		
