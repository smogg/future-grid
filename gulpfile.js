var gulp   = require('gulp');
var sass   = require('gulp-sass');
var rename = require('gulp-rename');

gulp.task('sass', function() {
	// grid
	gulp.src('./source/sass/grid.scss')
	.pipe(sass({
		outputStyle: 'nested',
		errLogToConsole: true
	}))
	.pipe(gulp.dest('./dist/css/'));

	// docs
	gulp.src('./source/sass/docs.scss')
	.pipe(sass({
		outputStyle: 'compressed',
		errLogToConsole: true
	}))
	.pipe(gulp.dest('./dist/css/'));
});


gulp.task('sass-dist', function() {
	gulp.src('./source/sass/grid.scss')
	.pipe(sass({
		outputStyle: 'compressed',
		errLogToConsole: true
	}))
	.pipe(rename('grid.min.css'))
	.pipe(gulp.dest('./dist/css/'));
});


gulp.task('watch', function() {
	gulp.watch(['./source/**/*.scss'], ['sass']);
});


gulp.task('default', ['sass', 'watch']);
gulp.task('dist', ['sass-dist'])