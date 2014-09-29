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
    var router = new Bsstrss.Routers.BsstrssRouter({
    	$sidebar: $('#sidebar-wrapper'),
    	$content: $('#page-content-wrapper'),
    })
    Backbone.history.start();
    router.sidebarIndex();
  }
};

$(document).ready(function(){
  Bsstrss.initialize();
});
