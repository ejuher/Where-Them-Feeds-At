Bsstrss.Views.EntryIndexItem = Backbone.View.extend({
	template: JST['entries/index_item'],
	className: 'row',

	render: function() {
		var renderContent = this.template({ entry: this.model });
		this.$el.html(renderContent);
		return this;
	}
})