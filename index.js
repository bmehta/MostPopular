//index.js

var requirejs = require('requirejs');

requirejs.config(
{
	nodeRequire: require
});

requirejs(['appHost', 'modules/mostPopular'], function(appHost){
	appHost.listen(process.env.PORT || 5000);
});