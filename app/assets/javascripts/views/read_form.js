// NOT IN USE
Bsstrss.Views.ReadForm = Backbone.View.extend({
	template: JST['reads/read_form'],

	render: function() {
		this.$el.html(this.template());
		return this;
	}
})