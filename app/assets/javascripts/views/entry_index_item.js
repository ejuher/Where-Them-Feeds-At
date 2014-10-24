Bsstrss.Views.EntryIndexItem = Backbone.View.extend({
	template: JST['entries/index_item'],
	className: 'row',

	initialize: function () {
		this.listenTo(this.model, 'sync', this.render)
	},

	events: {
		'click input.read'   : 'toggleRead',
		'click .entry-title' : 'read',
		'click .entry-star'  : 'toggleFave'
	},

	render: function() {
		var renderContent = this.template({ entry: this.model });
		this.$el.html(renderContent);
		// if this.model.entry_read_id != nil, mark as checked
		if (!!this.model.get('entry_read_id')) {
			this.$el.find('input.read').prop('checked', true);
			this.$el.find('.panel-body').addClass('hidden');
		}
		if (!!this.model.get('favorite_id')) {
			this.$el.find('.entry-star')
				.removeClass('glyphicon-star-empty')
				.addClass('glyphicon-star')
				.addClass('faved');
		}
		return this;
	},

	toggleRead: function(event) {
		if (event.currentTarget.checked) {
			// checking
			var read = new Bsstrss.Models.Read({ entry_id: this.model.id });
			read.save([], {
				success: function() {
					this.$el.find('.panel-body').fadeOut();
					this.model.set('entry_read_id', read.id);
					var feed = Bsstrss.feeds.getOrFetch(this.model.get('feed_id'));
				}.bind(this)
			})
		} else {
			// unchecking
			var read = new Bsstrss.Models.Read({ id: this.model.get('entry_read_id') });
			read.destroy({
				success: function() {
					this.$el.find('.panel-body').hide();
					this.$el.find('.panel-body').removeClass('hidden');
					this.$el.find('.panel-body').fadeIn();
					var feed = Bsstrss.feeds.getOrFetch(this.model.get('feed_id'));
				}.bind(this)
			})
		}
	},

	read: function (event) {
		if (!this.$el.find('input.read')[0].checked) {
			var read = new Bsstrss.Models.Read({ entry_id: this.model.id });
			read.save([], {
				success: function() {
					this.model.set('entry_read_id', read.id);
					var feed = Bsstrss.feeds.getOrFetch(this.model.get('feed_id'));
				}.bind(this)
			})
		}
	},

	toggleFave: function(event) {
		if ($(event.currentTarget).hasClass('faved')) {
			// un-fave
			var fave = new Bsstrss.Models.Favorite({ id: this.model.get('favorite_id') });
			fave.destroy({
				success: function() {
					this.$el.find('.entry-star')
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
					this.$el.find('.entry-star')
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