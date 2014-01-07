define(['xml2js', 'request', 'config'], function(xml2js, request, config) {
	var serviceTools = {
		xml2js:xml2js,
		request:request,
		config:config.Settings
	};

	return serviceTools;
})