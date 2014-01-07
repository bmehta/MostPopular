
define(['appHost', 'utilities/serviceTools'], function(appHost, serviceTools) {
		var mostPopular = { server : appHost };
		
		mostPopular.server.get("/mostPopular/domain/:domain/section/:ssts", function(req, res){

		var processStory = function(item, callback){
			var asset = item.path.match(/\d+\/$/);
			if(asset)
			{
				console.log(asset);
				console.log(serviceTools.util.format(serviceTools.config.GetMobileAssetById, asset[0].slice(0, -1)));
				serviceTools.request(serviceTools.util.format(serviceTools.config.GetMobileAssetById, asset[0].slice(0, -1)), function(error, response, body){
					if(error){
						console.log("error retrieving asset.");
					}
					else{
						callback(null, body);						
					}

				});

			}
			else{
				callback(null,  null);
			}

		}

			serviceTools.request(serviceTools.util.format(serviceTools.config.GetMostPopular, req.params.domain, req.params.ssts, req.query.sortBy), function(error, response, body){
				var chartbeatResponse = JSON.parse(body);
				serviceTools.async.mapSeries(chartbeatResponse.pages, processStory, function(err, results){
					if(err){
						console.log("error");
					}
					else{
						var finalFeed = new Array();
						for(var i=0; i<results.length; i++){
							if(results[i]){
								finalFeed.push(JSON.parse(results[i]));
							}
						}
						res.send(finalFeed);
					}

				});
			});

		});
	return mostPopular;

});

