Bsstrss.Views.FeedIndexItem = Backbone.View.extend({
	template: JST['feed/index_item'],
	tagName: 'li',

	render: function() {
		var renderContent = this.template({ feed: this.model });
		this.$el.html(renderContent);
		return this;
	}
})