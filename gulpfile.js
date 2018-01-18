const fs          =          require('fs');
const path        =          require("path");
const gulp        =          require("gulp");
const zip        =          require("gulp-zip");
const gutil   = require("gulp-util");

const getTemplates = () => {
  let dirData = fs.readdirSync('./templates');
  return dirData;
};

gulp.task("default", ["build"]);


gulp.task('build', function () {
  let templates = getTemplates();
  gutil.log(`${templates.length} templates found`);
  templates.forEach(template => {
    gutil.log(`compress template [${template}]`);
    gulp.src([`templates/${template}/**`, `!templates/${template}/{node_modules,node_modules/**,dist,dist/**}`], { dot: true })
      .pipe(zip(`${template}.zip`))
      .pipe(gulp.dest('zips'));
  })
});