var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();


// WATCH TASK FOR STYLES,HTML,JS UPDATES
gulp.task('watch', function(){

	browserSync.init({
		notify: false,
		server:{
			baseDir: "app"
		}
	});

	watch('./app/*.html', function(){
		browserSync.reload();
	});

	watch('./app/assets/styles/**/*.css', function(){
		gulp.start('cssInject');
	});

	watch('./app/assets/scripts/**/*.js', function(){
		gulp.start('scriptsRefresh');
	});

});


// CSS INJECT FOR STYLES UPDATES
gulp.task('cssInject', ['styles'], function(){
	return gulp.src('./app/temp/styles/main.css')
	.pipe(browserSync.stream());
});

// WEBPACK UPDATE FOR JS UPDATES
gulp.task('scriptsRefresh', ['scripts'], function(){
	browserSync.reload();
});