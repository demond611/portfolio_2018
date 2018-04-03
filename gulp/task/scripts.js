var gulp = require('gulp'),
webpack = require('webpack');

gulp.task('scripts', function(callback){
	webpack( require('../../webpack.config.js'), function(err, stats){
		if (err){
			console.log("\nScripts Error: "+err.toString()+"\n");
		}
		console.log("STATS: "+stats.toString());
		callback();
	});
});