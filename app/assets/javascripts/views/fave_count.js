Bsstrss.Views.FaveCount = Backbone.View.extend({
	template: JST['faves/count'],
	tagName: 'li',

	render: function() {
		var that = this;
		$.getJSON('api/fave_count', function(resp) { 
			faves = resp;
			var renderContent = that.template({ faveCount: faves });
			that.$el.html(renderContent); 
		})
		return this;
	},
})