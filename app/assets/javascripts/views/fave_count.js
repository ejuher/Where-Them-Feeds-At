Bsstrss.Views.FaveCount = Backbone.View.extend({
	template: [faves/count],
	tagName: 'li',

	render: function() {
		var renderContent = this.template({ faveCount: this.faveCount });
		this.$el.html(renderContent);
		return this;
	},
})