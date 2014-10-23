window.Bsstrss = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    Bsstrss.feeds = new Bsstrss.Collections.Feeds();

    Bsstrss.entries = new Bsstrss.Collections.Entries([], {});

    Bsstrss.reads = new Bsstrss.Collections.Reads();
    Bsstrss.reads.fetch();
    
    var router = new Bsstrss.Routers.BsstrssRouter({
    	$sidebar: $('#sidebar-wrapper'),
    	$content: $('#page-content-wrapper'),
    })
    Backbone.history.start();
    router.sidebarIndex();
  }
};


