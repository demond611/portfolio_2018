var gulp = require('gulp'),
imagemin = require('gulp-imagemin'),
del = require('del'),
usemin = require('gulp-usemin'),
rev = require('gulp-rev'),
cssnano = require('gulp-cssnano'),
uglify = require('gulp-uglify'),
browserSync = require('browser-sync').create();


gulp.task('dist', function(){
	browserSync.init({
		notify: false,
		server:{
			baseDir: "dist"
		}
	});
});


// RUN FIRST TO ALWAYS DELETE DIST FOLDER THEN RUN NEXT TASKS
gulp.task('deleteDistFolder', function(){
	return del("./dist");
});


gulp.task('copyGeneralFiles', ['deleteDistFolder'], function(){
	var pathsToCopy = [
		'./app/**/*',
		'!./app/*.html',
		// '!./app/project/*.html',
		'!./app/assets/images/**',
		'!./app/assets/styles/**',
		'!./app/assets/scripts/**',
		'!./app/temp/',
		'!./app/temp/**',
		// '!./app/project/',
		// '!./app/project/**'
	];

	return gulp.src(pathsToCopy)
	.pipe(gulp.dest("./dist"));
});


gulp.task('optimizeImages', ['deleteDistFolder'], function(){
	return gulp.src(['./app/assets/images/**/*'])
	.pipe(imagemin({
		progressive: true,
		interlaced: true,
		multipass: true
	}))
	.pipe(gulp.dest("./dist/assets/images"));
});


// styles/scripts PRODUCE FRESH REBUILDS OF THOSE FILES
gulp.task('usemin1', ['deleteDistFolder', 'styles', 'scripts'], function(){

	return gulp.src(['./app/**/*.html'])
	.pipe(usemin({
		// reduceIdents: false...NEEDED FOR CSSNANO REMOVING ANIMATION STYLE NAME
		css: [function(){ return rev() }, function(){ return cssnano( {reduceIdents: false} ) }],
		js: [function(){ return rev() }, function(){ return uglify() }]
	}))
	.pipe(gulp.dest("./dist"));
});


gulp.task('build', ['deleteDistFolder', 'copyGeneralFiles', 'optimizeImages', 'usemin1']);