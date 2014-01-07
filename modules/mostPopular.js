
define(['appHost', 'utilities/serviceTools'], function(appHost, serviceTools) {
		var mostPopular = { server : appHost };

		mostPopular.server.get("/mostPopular/:sstsString", function(req, res){

			serviceTools.request("http://usatoday.accu-weather.com/widget/usatoday/weather-data.asp?location=" + req.params.sstsString, function(error, response, body){
				var parser = new serviceTools.xml2js.Parser({explicitArray: false, ignoreAttrs: true});
				parser.parseString(body, function(err, result){
					res.send(JSON.stringify(result));
					console.log(JSON.stringify(serviceTools.config));
				});
			});
		});

	return mostPopular;

});