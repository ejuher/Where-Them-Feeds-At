$(document).ready(function(){
	$("#menu-toggle").click(function(e) {
	  e.preventDefault();
	  $("#wrapper").toggleClass("toggled");
	});

	$("#add-feed").on('submit', function(event) {
	  event.preventDefault();
	  var form = $(event.currentTarget);
	  var url = form.find('input').val();
	  var feed = new Bsstrss.Models.Feed({ feed_url: url });
	  feed.save({}, {
	    success: Bsstrss.feeds.add(feed)
	  });
	});
})

