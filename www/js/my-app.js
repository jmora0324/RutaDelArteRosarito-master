

/* work together */
/*
var isAndroid = Framework7.prototype.device.android === true;
var isIos = Framework7.prototype.device.ios === true;

Template7.global = {
    android: isAndroid,
    ios: isIos
};*/
/* work together */


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

/* work together */
/*
if (isAndroid) {
    $$('head').append(
        '<link rel="stylesheet" href="path/to/framework7.material.min.css">' +
        '<link rel="stylesheet" href="path/to/framework7.material.colors.min.css">' +
        '<link rel="stylesheet" href="path/to/my-app.material.css">'
    );
}
else {
    $$('head').append(
        '<link rel="stylesheet" href="path/to/framework7.ios.min.css">' +
        '<link rel="stylesheet" href="path/to/framework7.ios.colors.min.css">' +
        '<link rel="stylesheet" href="path/to/my-app.ios.css">'
    );
}  

if (isAndroid) {
    // Change class
    $$('.view.navbar-through').removeClass('navbar-through').addClass('navbar-fixed');
    // And move Navbar into Page
    $$('.view .navbar').prependTo('.view .page');
}
*/
/* work together */


    // Enable Material theme for Android device only
    //material: isAndroid ? true : false,
    // Enable Template7 pages
    //template7Pages: true,	


// Initialize app
var myApp = new Framework7({
    // Enable Material theme for Android device only
    material: true,
    // Enable Template7 pages
    template7Pages: true,	
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
	console.log(e.detail);
	console.log(e.detail.page.fromPage.name);
	console.log(e.detail.page.query.id);
	
	/*
	plugin.google.maps.LocationService.getMyLocation(function(result) {
	  alert(["Your current location:\n",
		  "latitude:" + location.latLng.lat.toFixed(3),
		  "longitude:" + location.latLng.lng.toFixed(3),
		  "speed:" + location.speed,
		  "time:" + location.time,
		  "bearing:" + location.bearing].join("\n"));
	});
*/
	
	myApp.closePanel();
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
        'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyBdRVHowh-nEDviOfqPlcyH4Ywqwoorv0w',
        'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyBdRVHowh-nEDviOfqPlcyH4Ywqwoorv0w'
      });

      // Create a Google Maps native view under the map_canvas div.
      var map = plugin.google.maps.Map.getMap(div);

      // If you click the button, do something...
      //var button = document.getElementById("button");
      //button.addEventListener("click", function() {
		  var defLat = 37.422359;
		  var defLong = -122.084344;
		  var defName = "Welecome to \nCordova GoogleMaps plugin for iOS,Android and Browser!";
          var defSnippet= "";
		  
		  switch (e.detail.page.query.id) {
				case '1':
				/*
					defLat = 32.360899;
					defLong = -117.058601;
					defName = 'Café Galería San Miguel';
					*/
					break;				
				case '2':
					defLat = 32.360899;
					defLong = -117.058601;
					defName = 'Café Galería San Miguel';
					break;
				case '3':
					defLat = 32.3547192;
					defLong =-117.0593652;
					defName = "Fausto Polanco Gallery";
					break;
				case '4':
					defLat = 32.350711;
					defLong =-117.0549779;
					defName = "Cabo Cape / Tire Art";
					break;
				
				case '5':
					defLat = 32.341353;
					defLong = -117.058695;		
					defName = 'IMAC';
					break;
				case '6':
					defLat = 32.339531;
					defLong = -117.055624;
					defName = 'Take and Fake Photo Art Gallery';
					break;
				case '7':
					defLat = 32.335531;
					defLong = -117.054691;
					defName = 'Amaya\'s Gallery';
					break;
				case '8':
					defLat = 32.335772;
					defLong = -117.054829;
					defName = 'Ugi\'s';
					break;
				case '9':
					defLat = 32.336078;
					defLong = -117.054436;
					defName = 'Paco\'s Gallery';
					break;
				case '10':
					defLat = 32.321771;
					defLong = -117.049465;
					defName = 'Miguel\'s';
					break;
				case '12':
					defLat = 32.308406;
					defLong = -117.044457;
					defName = 'ROHO';
					break;
				case '13':
					defLat = 32.306007;
					defLong = -117.043817;
					defName = 'Morales';
					break;
				case '14':
					defLat = 32.3043007;
					defLong = -117.0402503;
					defName = 'CEART';
					break;
				
				case '15':
					defLat = 32.303230;
					defLong = -117.042566;
					defName = 'Luca Art';
					break;
				case '16':
					defLat = 32.301687;
					defLong = -117.041769;
					defName = 'Art & Tango';
					break;
				case '18':
					defLat = 32.2877192;
					defLong = -117.0346367;
					defName = 'Arte Mass';
					break;
				
				case '19':
					defLat = 32.287719;
					defLong = -117.034637;
					defName = 'Moroga y Arte Mass';
					break;						
				case '20':
					defLat = 32.285577;
					defLong = -117.033073;
					defName = 'Klein';
					break;
				case '21':
					defLat = 32.285399;
					defLong = -117.032975;
					defName = "Polo's";
					break;					
				case '22':
					defLat = 32.285250;
					defLong = -117.032977;
					defName = 'Montecristo';
					break;
				case '23':
					defLat = 32.285018;
					defLong = -117.032822;
					defName = 'White Rabbit';
					break;				
				case '24':
					defLat = 32.284842;
					defLong = -117.032523;
					defName = 'Art Gallery Popotla';
					break;					
				case '25':
					defLat = 32.268320;
					defLong = -117.021020;
					defName = 'Baja Glass Studio';
					break;
				case '26':
					defLat = 32.258574;
					defLong = -116.972767;
					defName = 'Glass Gallery Jorge Luna';
					break;		
				case '27':
					defLat = 32.242607;
					defLong = -116.934731;
					defName = 'Galería Puerto Nuevo';
					break;		
		/*
				case 3:
					defLat = 32.350711;
					defLong = -117.0549779;
					defName = 'Wearable Art';
					break;
*/
				
		  }
        // Move to the position with animation
        map.animateCamera({
          target: {lat: defLat, lng: defLong},
          zoom: 17,
          tilt: 60,
          bearing: 140,
          duration: 3000
        });

        // Add a maker
        var marker = map.addMarker({
          position: {lat: defLat, lng: defLong},
          title: defName,
          snippet: defSnippet,
          animation: plugin.google.maps.Animation.BOUNCE
        });

        // Show the info window
        marker.showInfoWindow();

      //});
	
	
})



/*=== As Page ===*/
var myPhotoBrowser = myApp.photoBrowser({
  zoom: {
    enabled: true,
    maxRatio: 3,
    minRatio: 1,
  },
    photos: ['rutadelarte_oficial.jpg']
	
});  


$$('.abre_ruta').on('click', function () {
	//myApp.alert('Here comes Photo Browser');
    myPhotoBrowser.open();
});

$$('.goto_inicio').on('click', function () {
	window.location = "index.html";
});

$$('.goto_historia').on('click', function () {
	myApp.alert('Próximamente disponible', 'Ruta del Arte');
});

$$('.goto_contacto').on('click', function () {
	//window.location = "contactanos.html";
	//location.assign("contactanos.html");
	myApp.alert('Próximamente disponible', 'Ruta del Arte');
});

$$('.panel-close').on('click', function (e) {
	myApp.closePanel();
});