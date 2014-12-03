Bsstrss.Views.FeedShow = Backbone.CompositeView.extend({
	template: JST['entries/index'],
	loadingAnimation: JST['loading_animation'],
	customLoadingAnimation: JST['custom_loading_animation'],

	initialize: function() {
		$(window).off("scroll");
		this.paginate = true;
		if (this.model.entry) { 
			this.addEntryShow(this.model.entry); 
			this.paginate = false;
		}
		this.listenTo(this.model, 'sync', this.render);
		this.listenTo(this.model.entries(), 'add', this.addEntry);
		this.model.entries().each(this.addEntry.bind(this));
		this.listenTo(this.model.entries(), 'refreshAdd', this.unShiftEntry);
	},

	events: {
		'click button#sign-out'    : 'signOut',
		'keydown #add-feed'        : 'clearErrors',
		'submit #add-feed'         : 'addFeed',
		'click #menu-toggle'       : 'toggleMenu',
		'click button#unsubscribe' : 'unsubscribe',
		'click button#refresh'     : 'refresh',
	},

	unShiftEntry: function (entry) {
		var included = false;
    this.subviews()["div#entries"].forEach(function(subview) {
    	if(subview.model.id === entry.id) {
        included = true;
    	}
    });
    if(!included) {
      var newEntry = new Bsstrss.Views.EntryIndexItem({ model: entry });
		  this.unshiftSubview("div#entries", newEntry);
    }
	},

	addEntry: function(entry) {
		var newEntry = new Bsstrss.Views.EntryIndexItem({ model: entry });
		this.addSubview("div#entries", newEntry);	
	},

	addEntryShow: function(entry) {
		var entryShow = new Bsstrss.Views.EntryShow({ model: entry });
		this.addSubview("div#entries", entryShow);
	},

	render: function() {
		var renderContent = this.template({ feed: this.model });
		this.$el.html(renderContent);
		this.attachSubviews();
		this.listenForScroll();
		return this;
	},

	listenForScroll: function() {
		if (this.paginate) {
			$(window).off("scroll");
			var throttledCallback = _.throttle(this.nextPage.bind(this), 200);
			$(window).on("scroll", throttledCallback);
		}
	},

	nextPage: function() {
		var self = this;
    if ($(window).scrollTop() > $(document).height() - $(window).height() - 50) {
      self.model.entries().getNextPage();
    }
	},

	toggleMenu: function(event) {
		event.preventDefault();
	  iconSpan = event.currentTarget.getElementsByTagName('span')[0];
	  if (iconSpan.className === "glyphicon glyphicon-chevron-left") {
	  	iconSpan.className = "glyphicon glyphicon-chevron-right";
	  } else {
	  	iconSpan.className = "glyphicon glyphicon-chevron-left";
	  }
	  $("#wrapper").toggleClass("toggled");
	},

	addFeed: function(event) {
		event.preventDefault();
		var $refresh = this.$el.find('#refresh')
		
		$refresh
			.html("<img src='/images/ajax-loader.gif'>").attr('disabled','true');

			
	  var $form = $(event.currentTarget);
	  var url = $form.find('input').val();
	  $form.find('input').val('');
	  var feed = new Bsstrss.Models.Feed({ feed_url: url });
	  feed.save({}, {
	    success: function () {
	    	Bsstrss.feeds.add(feed) 
		    var feedShow = new Bsstrss.Views.FeedShow({ model: feed })
		    Backbone.history.navigate("/feed/" + feed.id, { trigger: true })
	    },
	    error: function() {
	    	var $input = $form.find('input');
	    	var $div = $form.find('div');
	    	var $span = $("<span class='glyphicon glyphicon-remove form-control-feedback'></span>");

	    	$input.attr('placeholder', 'Invalid URL');
	    	$div.addClass('has-error');
	    	$div.append($span);
	    	$refresh
					.html("Refresh")
					.attr('disabled','false');
	    }
	  });
	},

	clearErrors: function(event) {
		$(event.currentTarget).find('div').removeClass('has-error');
		$(event.currentTarget).find('span').remove();
		$(event.currentTarget).find('input').attr('placeholder', 'add feed url');
	},

	signOut: function(event) {
		event.preventDefault();
		$.ajax({
			type: 'DELETE',
			url: '/session',
			dataType: 'json',
			success: function() {
				location.href = "/welcome"
			}
		})
	},

	unsubscribe: function(event) {
		event.preventDefault();
		var subscription_id = $(event.currentTarget).data('subscription-id');
		$.ajax({
			type: 'DELETE',
			url: '/api/subscriptions/' + subscription_id,
			dataType: 'json',
			success: function() {
				location.href = "/"
			}
		})
	},

	refresh: function(event) {
		this.$el.find('#refresh')
			.html("<img src='/images/ajax-loader.gif'>")
			.attr('disabled','true');
		if (this.model.isNew()) {
			this.model.entries().fetch({
				data: {refresh: true},
				silent: true,
				success: function() {
					Backbone.history.loadUrl();
				}
			});
		} else {
			this.model.fetch({ 
				data: { refresh: true }, 
				silent: true
			});
		}
	},
})