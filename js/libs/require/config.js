// Main RequireJS call;
// To get timely, correct error triggers in IE, force a define/shim exports check;
// The 'config' property of the require global object is used to let Require handle underscore and jQuery as modules even though they are not, thanks to the shim system.
requirejs.config({
    urlArgs: "bust=" + (new Date()).getTime(),
	baseUrl: "./labs/requirejs/js",
    waitSeconds: 7, // default is 7s
	packages: [
		{
			// Homepage
			name: 'main',
			location: 'libs/require/main',
			main: 'main'
		},
		{
			// Contact page
			name: 'main-contact',
			location: 'libs/require/main',
			main: 'main-contact'
		},
		{
			name: 'jquery',
			location: 'libs/jquery',
			main: 'jquery'
		},
		{
			name: 'underscore',
			location: 'libs/underscore',
			main: 'underscore'
		},
		{
			name: 'backbone',
			location: 'libs/backbone',
			main: 'backbone'
		},
		{
			name: 'handlebars',
			location: 'libs/handlebars',
			main: 'handlebars'
		},
		{
			name: 'tinycon.min',
			location: 'libs/tinycon',
			main: 'tinycon.min'
		},
		{
			name: 'utils',
			location: 'utils',
			main: 'utils'
		}
	]
}); // End config