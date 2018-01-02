var gulp = require('gulp');
var less = require('gulp-less');
var cleancss = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');

var jsSrc = './dev/main.js';
var jsDst = './resources';
var cssSrc = './dev/main.css';
var cssDst  = './resources';

// 编译less文件
gulp.task('compileCss', function() {

	gulp
		.src(cssSrc)
		.pipe(cleancss())
		.pipe(gulp.dest(cssDst));
});
// 监测less文件变化
gulp.task('watchless', function() {

	gulp.watch(cssSrc, ['compileCss']);
});

// 压缩js文件
gulp.task('uglifyJs', function() {

	gulp
		.src(jsSrc)
		.pipe(uglify()) 
		.pipe(gulp.dest(jsDst));
});
// 监测js文件变化
gulp.task('watchjs', function() {

	gulp.watch(jsSrc, ['uglifyJs']);
});

gulp.task('default', ['uglifyJs', 'compileCss']);