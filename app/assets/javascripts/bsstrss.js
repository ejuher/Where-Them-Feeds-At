window.Bsstrss = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    Bsstrss.feeds = new Bsstrss.Collections.Feeds();
    Bsstrss.feeds.fetch();
    Bsstrss.entries = new Bsstrss.Collections.Entries();
    Bsstrss.entries.fetch();
    new Bsstrss.Routers.BsstrssRouter({
    	$sidebar: $('#sidebar-wrapper'),
    	$content: $('#main-content')
    })
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Bsstrss.initialize();
});
