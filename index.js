//index.js

var requirejs = require('requirejs');

requirejs.config(
{
	nodeRequire: require
});

requirejs(['appHost', 'modules/mostPopular'], function(appHost){
	appHost.listen(8888);
});