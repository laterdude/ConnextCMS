define([
  'jQuery-2.1.4.min',
	'underscore_1.3.3',
	'backbone_0.9.2',
  './PostModel',
], function ($, _, Backbone, PostModel) {

  
  //Create an empty Collection to hold all the posts.
  var PostsCollection = Backbone.Collection.extend({ //Collection Class
    model: PostModel,
    //url: 'http://'+global.serverIp+':'+global.serverPort+'/api/post/list',
    url: '',

    //parse is called when data is returned from the server after a fetch() call.
    //Parse allows me to massage non-standard data before it is returned to the collection.
    parse: function(response) {
      //debugger;
      return response.posts;
    },

    initialize: function() {
      //this.on('change', function(model) {
      //  debugger;
      //});

      this.url = 'http://'+global.serverIp+':'+global.serverPort+'/api/post/list';
      
      this.on('add', function() {
        debugger;
      });

      this.on('reset', function() {
        //debugger;

        //Assumption: this funciton is only called when opening the image gallery. Therefore we need to call it again and
        //finish populating the image library.
        log.push('Finished retrieving PostsCollection data from server.');

        //global.pagesView.populateTable();
      });
    }
  });
  
  return PostsCollection;

});
