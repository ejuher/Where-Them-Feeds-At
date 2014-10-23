Bsstrss.Views.FeedIndexItem = Backbone.View.extend({
	template: JST['feeds/index_item'],
	tagName: 'li',

	initialize: function() {
		this.listenTo(this.model, 'read', this.updateReadCount);
		this.listenTo(this.model, 'sync', this.render);
	},

	render: function() {
		var renderContent = this.template({ feed: this.model });
		this.$el.html(renderContent);
		return this;
	},

	updateReadCount: function(markedRead) {
		var readEntries = this.model.get('read_entries');
		markedRead ? readEntries++ : readEntries--;
		this.model.set('read_entries', readEntries);
		this.render();
	}
})