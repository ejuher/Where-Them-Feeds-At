Bsstrss.Views.EntryShow = Backbone.View.extend({
	template: JST['entries/show'],

	initialize: function() {
		$(window).off("scroll");
		this.listenTo(this.model, 'sync', this.render);
	},

	render: function() {
		var renderContent = this.template({ entry: this.model });
		this.$el.html(renderContent);
		return this;
	}
})