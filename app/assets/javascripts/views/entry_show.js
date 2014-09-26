Bsstrss.Views.FeedShow = Backbone.View.extend({
	template: JST['entries/show'],

	render: function() {
		var renderContent = this.template({ entry: this.model });
		this.$el.html(renderContent);
		return this;
	}
})