$(document).ready(function(){
	$("#menu-toggle").click(function(e) {
	  e.preventDefault();
	  iconSpan = e.currentTarget.getElementsByTagName('span')[0];
	  if (iconSpan.className === "glyphicon glyphicon-chevron-left") {
	  	iconSpan.className = "glyphicon glyphicon-chevron-right";
	  } else {
	  	iconSpan.className = "glyphicon glyphicon-chevron-left";
	  }
	  $("#wrapper").toggleClass("toggled");
	});

	$("#add-feed").on('submit', function(event) {
	  event.preventDefault();
	  var $form = $(event.currentTarget);
	  var url = $form.find('input').val();
	  $form.find('input').val('');
	  var feed = new Bsstrss.Models.Feed({ feed_url: url });
	  // animation to show that its processing
	  feed.save({}, {
	    success: function () {
	    	// turn off processing animation
	    	Bsstrss.feeds.add(feed) // then render feed show page in content pane
		    var feedShow = new Bsstrss.Views.FeedShow({ model: feed })
		    $('#main-content').html(feedShow.render().$el);
	    },
	    error: function() {
	    	var $input = $form.find('input');
	    	var $div = $form.find('div');
	    	var $span = $("<span class='glyphicon glyphicon-remove form-control-feedback'></span>");

	    	// turn off processing animation
	    	// $form.find('input').attr('placeholder', 'invalid url');
	    	$input.attr('placeholder', 'Invalid URL');
	    	$div.addClass('has-error');
	    	$div.append($span);
	    }
	  });
	});

	$("#add-feed").on('keydown', function(event) {
		$(event.currentTarget).find('div').removeClass('has-error');
		$(event.currentTarget).find('span').remove();
		$(event.currentTarget).find('input').attr('placeholder', 'add feed url');
	})
})
