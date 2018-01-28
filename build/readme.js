#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const META = path.join(__dirname, '..', 'meta.json');
const README = path.join(__dirname, '..', 'README.md');

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
  let json = fs.readFileSync(META);
  json = JSON.parse(json);

  let md = fs.readFileSync(README, 'utf-8');
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

  fs.writeFileSync(README, newDoc);
};


let date = new Date();
let dateStr = `${date.getFullYear()}-${(date.getMonth() + 1)}-${date.getDate()}`;

console.log(`BUILD README AT ${dateStr}`);
buildReadMe();

console.log(`DONE.`);
