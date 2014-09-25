window.Bsstrss = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    Bsstrss.feeds = new Bsstrss.Collections.Feeds();
    Bsstrss.feeds.fetch();
    // render the sidebar

    Bsstrss.entries = new Bsstrss.Collections.Entries();
    Bsstrss.entries.fetch();
    var router = new Bsstrss.Routers.BsstrssRouter({
    	$sidebar: $('#sidebar-wrapper'),
    	$content: $('#main-content')
    })
    Backbone.history.start();
    router.sidebarIndex();
  }
};

$(document).ready(function(){
  Bsstrss.initialize();
});
