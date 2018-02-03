#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const github3 = require('github3');
const { execSync } = require('child_process');

const args = process.argv.splice(2);

const isCron = args[0] === '--cron';
let add = null;

if (args[0] === 'add' && args[1].indexOf('/') > 0) {
  add = args[1];
}

const JSON_PATH = path.join(__dirname, '..', 'meta.json');

const updateRepo = (own, name) => {

  return new Promise((resolve, reject) => {
    github3.getRepository(name, own, (err, data) => {
      if (!err) {
        resolve(data);
      } else {
        reject(err);
      }
    });
  });
};

const Git = {
  diff () {
    const n = execSync('git diff --name-only | wc -l').toString().replace(/\n/g, '');
    return n > 0
  },
  add () {
    execSync(`git add --all`);
  },

  commit (msg) {
    execSync(`git commit -am "${msg}" >/dev/null 2>&1`);
  },
  push () {
    execSync('git pull --rebase && git push >/dev/null 2>&1');
  }
};

const addRepo = (name) => {
  let json, jsonStr;

  json = JSON.parse(fs.readFileSync(JSON_PATH));

  json.github.push({ repo: name  });

  fs.writeFileSync(JSON_PATH, JSON.stringify(json, null, 2));
};

const buildMeta = () => {

  let json, jsonStr;

  json = JSON.parse(fs.readFileSync(JSON_PATH));


  let tasks = [];
  json.github.forEach((item, i) => {
    let splitIndex = item.repo.indexOf('/');
    let own = item.repo.substring(0, splitIndex);
    let name = item.repo.substring(splitIndex + 1, item.repo.length);

    tasks.push(updateRepo(own, name));
  });

  Promise.all(tasks).then(data => {
    data.forEach((item, i) => {
      json.github[i].star = item.stargazers_count;
      json.github[i].description = item.description;
      json.github[i].last_update = item.pushed_at;
    });

    // Sort by star number
    json.github = json.github.sort((a, b) => b.star - a.star);

    console.log('WRITE META JSON DATA');
    fs.writeFileSync(JSON_PATH, JSON.stringify(json, null, 2));

    let readmeScript = path.join(__dirname, 'readme.js');

    require('./readme');
    // execSync(`node ${readmeScript}`, {stdio: [0, 1, 2]});

    if (isCron) {
      if (!Git.diff()) {
        console.log('META DATA NO CHANGES');
        return;
      } else {
        console.log('META DATA CHANGED, READY TO PUSH TO GIT.')
      }

      Git.add();
      Git.commit(`[${dateStr}] META DATA UPDATED - @Gcaufy`);
      Git.push();
    }
  }).catch(e => {
    console.error(e);
  });
};

let date = new Date();
let dateStr = `${date.getFullYear()}-${(date.getMonth() + 1)}-${date.getDate()}`;

console.log(`START TASK AT ${dateStr}`);

if (add) {
  addRepo(add);
}
buildMeta();
