module.exports = {
  "helpers": {
    "if_or": function (v1, v2, options) {
      if (v1 || v2) {
        return options.fn(this);
      }
      
      return options.inverse(this);
    }
  },
  "prompts": {
    "name": {
      "type": "string",
      "required": true,
      "message": "Project name"
    },
    "description": {
      "type": "string",
      "required": false,
      "message": "Project description",
      "default": "A WePY project"
    },
    "author": {
      "type": "string",
      "message": "Author"
    },
    "lint": {
      "type": "confirm",
      "message": "Use ESLint to lint your code?"
    },
    "redux": {
      "type": "confirm",
      "message": "Use Redux in your project?"
    },
    "web": {
      "type": "confirm",
      "message": "Use web transform feature in your project?"
    }
  },
  "filters": {
    ".eslintignore": "lint",
    ".eslintrc.js": "lint",
    "src/index.template.html": "web",
    "src/store/**/*": "redux"
  }
}