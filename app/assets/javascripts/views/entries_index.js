Bsstrss.Views.EntriesIndex = Backbone.View.extend({
	template: JST["entries/index"],
	// template: JST["feeds/index"],
	className: "entries-index",

	initialize: function() {
		this.listenTo(this.collection, 'sync', this.render);
	},

	render: function() {
		var renderContent = this.template({ entries: this.collection });
		this.$el.html(renderContent);
		return this;
	}
})