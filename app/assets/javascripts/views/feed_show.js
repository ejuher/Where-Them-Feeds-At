Bsstrss.Views.FeedShow = Backbone.View.extend({
	template: JST['feeds/show'],

	render: function() {
		var renderContent = this.template({ feed: this.model });
		this.$el.html(renderContent);
		return this;
	}
})