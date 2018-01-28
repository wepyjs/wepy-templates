# Contributing

## Setup

```
# Checkout the code
$ git clone git@github.com:wepyjs/wepy-templates.git

$ cd wepy-templates

# Install dependences
$ npm install
```

You can *Fix Bugs/Add Features* or *Add A Template* or *Add A Github Project* After you setup the project.

## Add A Template

1. Add your template to `templates` folder. Ref: [standard](https://github.com/wepyjs/wepy-templates/tree/master/templates/standard)
2. Make sure you have `meta.js` in your project. Ref: [meta.js](https://github.com/wepyjs/wepy-templates/blob/master/templates/standard/meta.js)
3. Run `npm run build` to add and zip your template.
4. Push your code to github and make a pull request.
5. After pull request merged, you can use `wepy list` to validate.

## Add A Github Project

1. Run `node build/meta.js add xxx/xxxx`. e.g., `node build/meta.js add wepyjs/wepy-wechat-demo`
2. Push your code to github and make a pull request.
3. After pull request merged, you can use `wepy list --github` to valudate.


** *Notice:* You don't need to manually update the grid in README.md or meta.json. Commands will help you to do it.**
