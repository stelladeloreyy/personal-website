const fs = require('fs');
const path = require('path');

const evalSourceMapMiddleware = require('react-dev-utils/evalSourceMapMiddleware');
const noopServiceWorkerMiddleware = require('react-dev-utils/noopServiceWorkerMiddleware');
const redirectServedPath = require('react-dev-utils/redirectServedPathMiddleware');
const paths = require('react-scripts/config/paths');

const htmlEntitiesPath = path.dirname(require.resolve('html-entities/package.json'));

module.exports = {
  webpack: {
    configure: webpackConfig => {
      const rules = webpackConfig.module && webpackConfig.module.rules;

      if (Array.isArray(rules)) {
        const sourceMapRule = rules.find(
          rule => rule && rule.loader && rule.loader.includes('source-map-loader')
        );

        if (sourceMapRule) {
          const excludes = [];

          if (sourceMapRule.exclude) {
            if (Array.isArray(sourceMapRule.exclude)) {
              excludes.push(...sourceMapRule.exclude);
            } else {
              excludes.push(sourceMapRule.exclude);
            }
          }

          excludes.push(htmlEntitiesPath);
          sourceMapRule.exclude = excludes;
        }
      }

      return webpackConfig;
    },
  },
  devServer: devServerConfig => {
    devServerConfig.onBeforeSetupMiddleware = undefined;
    devServerConfig.onAfterSetupMiddleware = undefined;

    devServerConfig.setupMiddlewares = (middlewares, devServer) => {
      if (!devServer) {
        return middlewares;
      }

      middlewares.unshift(evalSourceMapMiddleware(devServer));

      if (fs.existsSync(paths.proxySetup)) {
        // Respect user-defined proxy middleware from src/setupProxy.js
        require(paths.proxySetup)(devServer.app);
      }

      middlewares.push(redirectServedPath(paths.publicUrlOrPath));
      middlewares.push(noopServiceWorkerMiddleware(paths.publicUrlOrPath));

      return middlewares;
    };

    return devServerConfig;
  },
};
