var pathRegex = new RegExp(/\/[^\/]+$/);
var locationPath = location.pathname.replace(pathRegex, '');

require({
	packages: [{
			name: 'app',
			location: locationPath + 'js/app'
		}, {
			name: 'backbone',
			location: '',
			main: ''
		}
	]
},

['app/Controller', 'dojo/domReady!'],

function(App) {
	App.startup();
});