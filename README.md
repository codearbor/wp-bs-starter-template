## About
A template for customizing Bootstrap 4 using Webpack 5.


## Versions
- [Bootstrap 4](https://getbootstrap.com/docs/4.6/getting-started/introduction/)
- [Webpack 5](https://webpack.js.org/concepts/)


## What's included

- Single HTML page (index.html) to demonstrate how to include build.
- Includes Bootstrap (currently using v4.6.0) source files via npm.
- Includes [Bootstrap Icons](https://icons.getbootstrap.com) (v1.5.0).
- npm scripts (see package.json) for compiling and starting a basic local server.
- Example stylesheet (src/index.scss)
- Example JavaScript file (src/index.js) showing how to import all of Bootstrap JS, Icons or just the parts needed.


## Usage

Be sure to have [Node.js](https://nodejs.org/) installed before proceeding.

```shell
# Clone the repo
git clone https://github.com/codearbor/wp-bs-starter-template
cd wp-bs-starter-template

# Install dependencies
npm i

# Start local server (uses webpack-dev-server)
npm run server

# (Or) Compile/Build css & js for production
npm run build
```

For quick development, execute `npm run server`.
This launches url <http://localhost:8080> to see the page in action.
