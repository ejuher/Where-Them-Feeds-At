Bsstrss.Views.EntriesIndex = Backbone.CompositeView.extend({
	template: JST['entries/index'],
	className: "container-fluid",

	initialize: function() {
		this.listenTo(this.collection, 'sync add', this.render);
		this.listenTo(this.collection, 'sync add', this.addEntry);
		// add subviews
		this.collection.each(this.addEntry.bind(this));
	},

	events: {
		// sign out
		// add feed
		// menu toggle
		'#menu-toggle click': 'toggleMenu'
	},

	addEntry: function(entry) {
		var newEntry = new Bsstrss.Views.EntryIndexItem({ model: entry });
		this.addSubview('div#entries', newEntry);
	},

	render: function() {
		var renderContent = this.template();
		this.$el.html(renderContent);
		this.attachSubviews();
		return this;
	},

	toggleMenu: function(event) {
		event.preventDefault();
	  iconSpan = e.currentTarget.getElementsByTagName('span')[0];
	  if (iconSpan.className === "glyphicon glyphicon-chevron-left") {
	  	iconSpan.className = "glyphicon glyphicon-chevron-right";
	  } else {
	  	iconSpan.className = "glyphicon glyphicon-chevron-left";
	  }
	  $("#wrapper").toggleClass("toggled");
	}
})