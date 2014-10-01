Bsstrss.Views.FeedIndexItem = Backbone.View.extend({
	template: JST['feeds/index_item'],
	tagName: 'li',

	// the model is a feed
	// if i want this to update dynamically i should update the feed
	// each entry has a feed. every time it changes its status, 

	// next idea: feeds have reads. every time an article is marked, 
	// it creates a read model. 

	// within the feed jbuilder response, each feed should also return its reads
	// the feed model should parse this return data and create an associated collection.
	// the number of 

	initialize: function() {
		this.listenTo(this.model, 'read', this.updateReadCount);
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