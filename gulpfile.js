const fs          =          require('fs');
const path        =          require("path");
const gulp        =          require("gulp");
const zip         =          require("gulp-zip");
const gutil       =          require("gulp-util");

const getTemplates = () => {
  let dirData = fs.readdirSync('./templates');
  return dirData;
};

const updateTable = (md, flag, table) => {
  let newDoc = '';
  let start = md.indexOf(flag) + flag.length, l = md.length, endding = '';
  newDoc = md.substr(0, start) + '\n\n';
  let i = start - 1;
  // Get the reset part
  while (++i < l) {
    if (endding) {
      endding += md[i];
    } else if (!endding && md[i] === '#' && md[i + 1] === '#') {
      endding += md[i];
    }
    start++;
  }
  newDoc += table + '\n' + endding;
  return newDoc;
};

/**
 * Write readme based on templates.json
 */
const buildReadMe = () => {
   json = fs.readFileSync('./meta.json');
  json = JSON.parse(json);

  let md = fs.readFileSync('./README.md', 'utf-8');
  let table = '| Name | Description |\n| --- | --- |\n';

  json.official.forEach(item => {
    table += `| [${item.name}](https://github.com/wepyjs/wepy_templates/tree/master/templates/${item.name}) | ${item.description} |\n`;
  });

  let githubTable = '| Repository | Stars | Description | Last Updated |\n| --- | --- | --- | --- |\n';

  json.github.forEach(item => {
    githubTable += `| [${item.repo}](https://github.com/${item.repo}) | ${item.star || '-'} | ${item.description || '-'} | ${item.last_update || '-'} |\n`;
  });

  let newDoc = updateTable(md, '## Template List', table);
  newDoc = updateTable(newDoc, '## Github Project', githubTable);

  fs.writeFileSync('./README.md', newDoc);
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
  });
  buildReadMe();
});
