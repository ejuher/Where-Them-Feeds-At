window.Bsstrss = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    
    var router = new Bsstrss.Routers.BsstrssRouter({
    	$sidebar: $('#sidebar-wrapper'),
    	$content: $('#page-content-wrapper'),
    })
    Backbone.history.start();
    router.sidebarIndex();
  }
};


