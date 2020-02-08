#!/usr/bin/env node
const fs = require('fs');
const COS = require('cos-nodejs-sdk-v5');

const getTemplates = () => {
  let dirData = fs.readdirSync('./templates');
  return dirData;
};

const promisify = function(fn) {
  return function(params) {
    return new Promise((resolve, reject) => {
      fn(params, function(err, data) {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  };
};

class Cos {
  constructor(conf) {
    this.bucket = conf.bucket;
    this.region = conf.region;
    this.conf = conf;

    const opt = {
      SecretId: conf.secretId,
      SecretKey: conf.secretKey,
    };

    this.cos = new COS(opt);
  }
  getAuthUrl(filepath, expires) {
    return promisify(this.cos.getObjectUrl.bind(this.cos))({
      Bucket: this.bucket,
      Region: this.region,
      Key: filepath,
      Sign: true,
      Expires: expires || 900,
    });
  }

  list(dir) {
    return new Promise((resolve, reject) => {
      this.cos.getBucket({
        Bucket: this.bucket,
        Region: this.region,
        Prefix: dir || '',
      }, (err, data) => {
        if (err) { reject(err); } else { resolve(data); }
      });
    });
  }

  upload(filepath, stream) {
    return new Promise((resolve, reject) => {
      this.cos.putObject({
        Bucket: this.bucket,
        Region: this.region,
        Key: filepath,
        Body: stream,
      }, (err, data) => {
        if (err) { reject(err); } else { resolve(data); }
      });
    });
  }
}

(function main() {
  let cos = new Cos({
    bucket: 'wepy-templates-1251238373',
    region: 'ap-guangzhou',
    secretId: process.env.COS_SECRET_ID,
    secretKey: process.env.COS_SECRET_KEY,
  });

  Promise.all(
    getTemplates().map(temp => {
      return cos.upload(temp + '.zip', fs.createReadStream('./zips/' + temp + '.zip'));
    })
  ).then(res => {
    console.log('===========Zip List==========')
    res.forEach(v => {
      console.log('https://' + v.Location);
    });
  }).catch(e => {
    console.error('FAILED: ' + e);
  })
})()
