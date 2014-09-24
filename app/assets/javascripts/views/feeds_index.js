Bsstrss.Views.FeedsIndex = Backbone.View.extend({
	template: JST["feeds/index"],
	tagName: "ul",
	className: "sidebar-nav",

	initialize: function() {
		this.listenTo(this.collection, 'sync', this.render);
	},

	render: function() {
		var renderContent = this.template({ feeds: this.collection });
		this.$el.html(renderContent);
		return this
	}
})
		
