
define(['appHost', 'utilities/serviceTools'], function(appHost, serviceTools) {
		var mostPopular = { server : appHost };



		mostPopular.server.get("/mostPopular/domain/:domain/section/:ssts", function(req, res){
			serviceTools.request(util.format(serviceTools.cofig.GetMostPopular, req.params.domain, req.params.ssts, req.query.sortBy), function(error, response, body){
				var chartbeatResponse = JSON.parse(body);
				charbeatResponse.pages.forEach(function(item, index)){
					console.log(item.path);
				});
			});
			
		mostPopular.server.get("/mostPopular/:sstsString", function(req, res){

			serviceTools.request("http://usatoday.accu-weather.com/widget/usatoday/weather-data.asp?location=" + req.params.sstsString, function(error, response, body){
				var parser = new serviceTools.xml2js.Parser({explicitArray: false, ignoreAttrs: true});
				parser.parseString(body, function(err, result){
					res.send(JSON.stringify(result));
					console.log("CONFIG VALUE:" + JSON.stringify(serviceTools.config));
				});
			});
		});

	return mostPopular;

});