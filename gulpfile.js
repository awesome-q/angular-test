const gulp  = require('gulp');
const merge = require('gulp-merge-json');


const translateEn = () => gulp
  .src('./src/app/**/*.en.json')
  .pipe(merge({ fileName: 'en.json' }))
  .pipe(gulp.dest('./src/assets/i18n/'));


const translateFr = () => gulp
  .src('./src/app/**/*.fr.json')
  .pipe(merge({ fileName: 'fr.json' }))
  .pipe(gulp.dest('./src/assets/i18n/'));


exports.translate = gulp.series(translateEn, translateFr);
