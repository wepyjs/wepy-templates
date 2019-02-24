module.exports = {
  "prompts": {
   "name": {
      "type": "string",
      "required": true,
      "message": "Project name"
    },
    "appid": {
      "type": "string",
      "required": true,
      "message": "AppId",
      "default": "touristappid"
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
    "ts": {
      "type": "confirm",
      "message": "Use TypeScript?"
    },
  },
  "filters": {
    "./src/common/lib/stringOpration.js": "ts",
    "./src/common/lib/stringOpration.ts": "!ts",
  }
}
