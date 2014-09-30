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
		return this;
	},

	toggleRead: function(event) {
		if (event.currentTarget.checked) {
			// create read
			// create read model
			// add read model to reads collection
			// go to create route for read_entry, pass it entry_id
			var read = new Bsstrss.Models.Read({ entry_id: this.model.id });
			read.save({
				success: function() {
					Bsstrss.reads.add(read);
				}
			})
		} else {
			// destroy read
			// go to destroy route for read_entry, pass it entry_id
		}
	}
})