Bsstrss.Views.EntryShow = Backbone.View.extend({
	template: JST['entries/show'],

	initialize: function() {
		$(window).off("scroll");
		this.listenTo(this.model, 'sync', this.render);
	},

	events: {
		'click .entry-show-star'  : 'toggleFave'
	},

	render: function() {
		var renderContent = this.template({ entry: this.model });
		this.$el.html(renderContent);
		if (!!this.model.get('favorite_id')) {
			this.$el.find('.entry-show-star')
			.removeClass('glyphicon-star-empty')
			.addClass('glyphicon-star')
			.addClass('faved');
		}
		return this;
	},

	toggleFave: function(event) {
		if ($(event.currentTarget).hasClass('faved')) {
			// un-fave
			var fave = new Bsstrss.Models.Favorite({ id: this.model.get('favorite_id') });
			fave.destroy({
				success: function() {
					this.$el.find('.entry-show-star')
						.removeClass('faved')
						.removeClass('glyphicon-star')
						.addClass('glyphicon-star-empty');
					$('#fave-badge').trigger('fave', false);
				}.bind(this)
			})
		} else {
			// fave
			var fave = new Bsstrss.Models.Favorite({ entry_id: this.model.id });
			fave.save([], {
				success: function() {
					this.$el.find('.entry-show-star')
						.addClass('faved')
						.removeClass('glyphicon-star-empty')
						.addClass('glyphicon-star');
					this.model.set('favorite_id', fave.id);
					$('#fave-badge').trigger('fave', true);
				}.bind(this)
			})
		}
	},
})