Bsstrss.Views.FeedsIndex = Backbone.View.extend({
	template: JST["feeds/index"],
	tagName: "ul",
	className: "sidebar-nav",

	initialize: function() {
		this.listenTo(this.collection, 'sync add remove', this.render);
	},

	render: function() {
		var renderContent = this.template({ feeds: this.collection });
		this.$el.html(renderContent);
		return this
	},

	// the number of unread articles is a subview
	// there is a model of num_unread_articles
	// there is a collection of nums_unread_articles (one for each feed)
	// a num_unread_articles view listens for sync/add/remove events on the model, re-renders
	// checking/unchecking adds or subtracts from the num_unread_articles model
})
		
