Bsstrss.Views.EntryIndexItem = Backbone.View.extend({
	template: JST['entries/index_item'],
	className: 'row',

	initialize: function () {
		this.listenTo(this.model, 'sync', this.render)
	},

	events: {
		'click input.read': 'toggleRead'
	},

	render: function() {
		var renderContent = this.template({ entry: this.model });
		this.$el.html(renderContent);
		// if this.model.entry_read_id != nil, mark as checked
		if (!!this.model.get('entry_read_id')) {
			this.$el.find('input.read').prop('checked', true);
		}
		return this;
	},

	toggleRead: function(event) {
		if (event.currentTarget.checked) {
			var read = new Bsstrss.Models.Read({ entry_id: this.model.id });
			read.save([], {
				success: function() {
					this.model.set('entry_read_id', read.id)
					// Bsstrss.reads.add(read);
				}.bind(this)
			})
		} else {
			var read = new Bsstrss.Models.Read({ id: this.model.get('entry_read_id') });
			read.destroy({
				success: function() {
					// Bsstrss.reads.remove(read);
				}.bind(this)
			})
		}
	}
})