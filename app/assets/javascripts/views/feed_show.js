Bsstrss.Views.FeedShow = Backbone.CompositeView.extend({
	template: JST['entries/index'],

	initialize: function() {
		$(window).off("scroll");
		this.listenTo(this.model, 'sync add', this.render);
		this.listenTo(this.model.entries(), 'add', this.addEntry);
		this.model.entries().each(this.addEntry.bind(this));
	},

	addEntry: function(entry) {
		var newEntry = new Bsstrss.Views.EntryIndexItem({ model: entry });
		this.addSubview("div#entries", newEntry);
	},

	render: function() {
		var renderContent = this.template({ feed: this.model });
		this.$el.html(renderContent);
		this.attachSubviews();
		this.listenForScroll();
		return this;
	},

	listenForScroll: function() {
		$(window).off("scroll");
		var throttledCallback = _.throttle(this.nextPage.bind(this), 200);
		$(window).on("scroll", throttledCallback);
	},

	nextPage: function() {
		var self = this;
    if ($(window).scrollTop() > $(document).height() - $(window).height() - 50) {
      console.log("scrolled to bottom!");
      self.model.entries().getNextPage();
    }
	}
})