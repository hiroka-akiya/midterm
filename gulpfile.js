const gulp = require("gulp");

const preamble = "spec/preamble.js";


const files = ["01", "02", "03", "04", "05",
               "06", "07", "08", "09", "10"];

//const files = ["01", "02", "03", "04", "05"];

gulp.task("test", ["concat", "mocha"]);

gulp.task("mocha", () => {
  const mocha = require('gulp-mocha');
  return gulp.src("./test/*_test.js", {read: false})
    .pipe(mocha());
});

gulp.task("concat", () => {
  const concat = require('gulp-concat');
  return files.map(id => {
    const js = `./${id}/${id}.js`;
    const spec = `./spec/${id}_spec.js`;
    const test = `${id}_test.js`;
    console.log(`concat ${js} and ${spec}`);

    return gulp.src([preamble, js, spec])
      .pipe(concat(test))
      .pipe(gulp.dest("./test/"));
  });
});
