var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import');


gulp.task('styles', function(){
	return gulp.src('./app/assets/styles/main.css')
	.pipe( postcss([cssImport, cssvars, nested, autoprefixer]) )
	.on('error', function(errorInfo){
		console.log("\nError: "+errorInfo.toString()+"\n");
		// ENDS TASK CALL SUCCESSFULLY ALWAYS
		this.emit('end');
	})
	.pipe( gulp.dest('./app/temp/styles') );
});