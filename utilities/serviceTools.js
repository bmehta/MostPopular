define(['xml2js', 'request', 'config', 'util', 'async'], function(xml2js, request, config, util, async) {
	var serviceTools = {
		xml2js:xml2js,
		request:request,
		config:config.Settings,
		util:util,
		async:async
	};

	return serviceTools;
})