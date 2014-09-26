Bsstrss.Views.EntriesIndex = Backbone.CompositeView.extend({
	template: JST["entries/index"],
	className: "entries-index",

	initialize: function() {
		this.listenTo(this.collection, 'sync add', this.render);
		this.listenTo(this.collection, 'add', this.addEntry);
		// add subviews
		this.collection.each(this.addEntry.bind(this));
	},

	addEntry: function(entry) {
		var newEntry = new Bsstrss.Views.EntryIndexItem({ model: entry });
		this.addSubview('div#entries', newEntry);
	},

	render: function() {
		var renderContent = this.template({ entries: this.collection });
		this.$el.html(renderContent);
		this.attachSubviews();
		return this;
	}
})