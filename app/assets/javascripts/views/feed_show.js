Bsstrss.Views.FeedShow = Backbone.CompositeView.extend({
	template: JST['entries/index'],

	initialize: function() {
		this.listenTo(this.model, 'sync add', this.render);
		this.listenTo(this.model.entries(), 'add', this.addEntry);
		this.model.entries().each(this.addEntry.bind(this));
	},

	addEntry: function(entry) {
		console.log('adding entry');
		var newEntry = new Bsstrss.Views.EntryIndexItem({ model: entry });
		this.addSubview("div#entries", newEntry);
	},

	render: function() {
		console.log('rendering');
		var renderContent = this.template({ feed: this.model });
		this.$el.html(renderContent);
		this.attachSubviews();
		return this;
	}
})