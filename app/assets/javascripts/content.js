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
	  var form = $(event.currentTarget);
	  var url = form.find('input').val();
	  form.find('input').val('');
	  var feed = new Bsstrss.Models.Feed({ feed_url: url });
	  feed.save({}, {
	    success: function () {
	    	Bsstrss.feeds.add(feed) // then render feed show page in content pane
		    var feedShow = new Bsstrss.Views.FeedShow({ model: feed })
		    $('#main-content').html(feedShow.render().$el);
	    }
	  });
	});
})

