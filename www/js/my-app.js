// Initialize app
var myApp = new Framework7({
	routes: [
	{
		name: 'about',
		path: '/about/',
		url: 'about.html'
	},
	{
		name: 'directory',
		path: '/directory/',
		url: 'directory.html'		
	},
	{
		name: 'googlemap',
		path: '/googlemap/',
		url: 'googlemap.html'		
	},
	{
		name: 'ruta',
		path: '/ruta/',
		url: 'ruta.html'		
	}
	]
});


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
	
	/* dos lineas agregadas por mi*/
    /* var map = new GoogleMap();
    map.initialize();	*/
	
	
});


// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('about', function (page) {
    // Do something here for "about" page	
})

// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;

    if (page.name === 'about') {
        // Following code will be executed for page with data-page attribute equal to "about"
        myApp.alert('Here comes About page 1');
    }
})

// Option 2. Using live 'pageInit' event handlers for each page
$$(document).on('pageInit', '.page[data-page="about"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
    myApp.alert('Here comes About page 2');
})

$$(document).on('pageInit', '.page[data-page="map"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "googlemap"
    //myApp.alert('GoogleMaps page!');
	
      var div = document.getElementById("map_canvas");

      // If your app runs this program on browser,
      // you need to set `API_KEY_FOR_BROWSER_RELEASE` and `API_KEY_FOR_BROWSER_DEBUG`
      // before `plugin.google.maps.Map.getMap()`
      //
      //   API_KEY_FOR_BROWSER_RELEASE for `https:` protocol
      //   API_KEY_FOR_BROWSER_DEBUG for `http:` protocol
      //
      // If your app does not use browser,
      // you can comment out this code.
      plugin.google.maps.environment.setEnv({
        'API_KEY_FOR_BROWSER_RELEASE': '(YOUR_API_KEY_IS_HERE)',
        'API_KEY_FOR_BROWSER_DEBUG': ''
      });

      // Create a Google Maps native view under the map_canvas div.
      var map = plugin.google.maps.Map.getMap(div);

      // If you click the button, do something...
      var button = document.getElementById("button");
      button.addEventListener("click", function() {
alert (map.length);
        // Move to the position with animation
        map.animateCamera({
          target: {lat: 37.422359, lng: -122.084344},
          zoom: 17,
          tilt: 60,
          bearing: 140,
          duration: 5000
        });

        // Add a maker
        var marker = map.addMarker({
          position: {lat: 37.422359, lng: -122.084344},
          title: "Welecome to \n" +
                 "Cordova GoogleMaps plugin for iOS,Android and Browser!",
          snippet: "This plugin ES INCREíBLE!",
          animation: plugin.google.maps.Animation.BOUNCE
        });

        // Show the info window
        marker.showInfoWindow();

      });
	
	
})



/*=== As Page ===*/
var myPhotoBrowser = myApp.photoBrowser({
    zoom: 400,
    photos: ['rutadelarte_oficial.jpg']
});  


$$('.abre_ruta').on('click', function () {
	//myApp.alert('Here comes Photo Browser');
    myPhotoBrowser.open();
});