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
		// var readEntries = this.model.get('read_entries');

		// var $count = this.$el.find('.badge');
		// var unreadEntries = $count.text();
		// markedRead ? unreadEntries++ : unreadEntries--;
		// $count.html(unreadEntries);

		// this.model.set('read_entries', readEntries);
		// this.render();
	}
})

// the sidebar is re-rendered on all sync events for the feeds collection
// sync events occur every time an entry is read because that calls feeds.getOrFetch

// how to stop this:
  // turn off the sync listener: if you do this then # of favorites doesn't render
		// make favorites a subview. just do it.
  // don't call feeds.getOrFetch: if you do this then feedIndexItem doesn't re-render
