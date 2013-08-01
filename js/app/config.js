/*global define*/
define([
		'esri/InfoTemplate'
], function(InfoTemplate) {
	return {
		// Url to your proxy page, must be on same machine hosting you app
		proxy: {
			url: '../proxy.php',
			alwaysUseProxy: false
		},
		// Url to your geometry server
		geometryService: {
			url: 'http://tasks.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer'
		}
	};
});