Bsstrss.Views.FaveCount = Backbone.View.extend({
	template: JST['faves/count'],
	tagName: 'li',

	events: {
		'fave .badge' : 'incrementFave'
	},

	render: function() {
		var that = this;
		$.getJSON('api/fave_count', function(resp) { 
			faves = resp;
			var renderContent = that.template({ faveCount: faves });
			that.$el.html(renderContent); 
		})
		return this;
	},

	incrementFave: function(event, addFave) {
		var $favesEl = this.$el.find('.badge');
		var faves = $favesEl.text();
		addFave ? faves++ : faves--;
		$favesEl.html(faves);
	}
})