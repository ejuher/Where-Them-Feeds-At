window.Bsstrss = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    Bsstrss.feeds = new Bsstrss.Collections.Feeds()
    Bsstrss.feeds.fetch();
    new Bsstrss.Routers.BsstrssRouter({
    	$sidebar: $('#sidebar-wrapper'),
    	$content: $('page-content-wrapper')
    })
    Backbone.history.start();
  }
};

$(document).ready(function(){
	console.log('READY')
  Bsstrss.initialize();
});
