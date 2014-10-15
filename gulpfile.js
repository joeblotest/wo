// Test comment

var gulp = require('gulp');
var spritesmith = require('gulp.spritesmith');

var gulpif = require('gulp-if');
var sprite = require('css-sprite').stream;

gulp.task('sprites', function () {
  return gulp
  .src('./source_images/*.png')
  .pipe(sprite({
    retina: true,
    margin: 20,
    opacity: 0,
    name: 'sprite',
    style: '_sprite.scss',
    cssPath: '../images',
    processor: 'scss'
  }))
  .pipe(gulpif('*.png', gulp.dest('./built/images/'), gulp.dest('./built/styles/')))
});
