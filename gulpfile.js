const gulp = require("gulp");
const browserSync = require("browser-sync");

const staticPaths = [
  "index.html",
  "css/**/*",
  "js/**/*",
  "images/**/*",
  "fonts/**/*"
];

function copy() {
  return gulp
    .src(staticPaths, { base: ".", allowEmpty: true })
    .pipe(gulp.dest("dist"));
}

function serve(done) {
  browserSync.init({
    server: {
      baseDir: "dist"
    }
  });
  gulp.watch(staticPaths, gulp.series(copy, function reload(done) {
    browserSync.reload();
    done();
  }));
  done();
}

gulp.task("copy", copy);
gulp.task("build", copy);
gulp.task("server", gulp.series("copy", serve));
gulp.task("default", gulp.series("copy", serve));
