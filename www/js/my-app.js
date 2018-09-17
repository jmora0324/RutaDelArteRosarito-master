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

$$(document).on('pageInit', '.page[data-page="googlemap"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "googlemap"
    myApp.alert('GoogleMaps page!');
	
	/* dos lineas agregadas por mi*/
    //var map = new GoogleMap(1);
    //map.initialize();	
	
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