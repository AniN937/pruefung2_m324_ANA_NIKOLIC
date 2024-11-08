{
    "name": "ict-m324",
    "version": "1.0.0",
    "description": "# Tutorial: Automatisierung und Deployment eines Node.js-Projekts mit Docker, CI/CD und Portainer",
    "main": "index.js",
    "type": "module",
    "scripts": {
      "start": "npm run lint && npm run format && npm run test && node index.js",
      "lint": "eslint .",
      "format": "prettier --write .",
      "format-check": "prettier --check .",
      "test": "node_modules/.bin/mocha ./"
    },
    "repository": {
      "type": "git",
      "url": "git+https://github.com/roman-hatz-sluz/ict-m324.git"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "bugs": {
      "url": "https://github.com/roman-hatz-sluz/ict-m324/issues"
    },
    "homepage": "https://github.com/roman-hatz-sluz/ict-m324#readme",
    "dependencies": {
      "chalk": "^5.3.0",
      "random-words": "^2.0.1"
    },
    "devDependencies": {
      "@eslint/js": "^9.10.0",
      "eslint": "^9.10.0",
      "globals": "^15.9.0",
      "mocha": "^10.7.3",
      "npm-check-updates": "^17.1.1",
      "prettier": "^3.3.3"
    }
  }