import { Configuration, IgnorePlugin } from "webpack";
import ParentConfig from "../../webpack.common";
import * as _ from "lodash";
import * as copyWebpackPlugin from "copy-webpack-plugin";

const config: Configuration = {
  entry: {
    "api-server/index": "./src/main.ts",
  },
  plugins: [
    new copyWebpackPlugin({
      patterns: [{ from: "./Dockerfile", to: "./api-server/Dockerfile", toType: "file" }],
    }),
    new IgnorePlugin({
      /**
       * There is a small problem with Nest's idea of lazy require() calls,
       * Webpack tries to load these lazy imports that you may not be using,
       * so we must explicitly handle the issue.
       * Refer to: https://github.com/nestjs/nest/issues/1706
       */
      checkResource(resource: string) {
        const lazyImports = [
          "@nestjs/microservices",
          "@nestjs/microservices/microservices-module",
          "@nestjs/websockets/socket-module",
          "cache-manager",
          "class-validator",
          "class-transformer",
        ];
        if (!lazyImports.includes(resource)) {
          return false;
        }
        try {
          require.resolve(resource);
        } catch (err) {
          return true;
        }
        return false;
      },
    }),
  ],
  stats: {
    warningsFilter: [
      "node_modules/express/lib/view.js",
      "node_modules/@nestjs/common/utils/load-package.util.js",
      "node_modules/@nestjs/core/helpers/load-adapter.js",
      "node_modules/@nestjs/core/helpers/optional-require.js",
    ],
  },
};

export default _.merge(ParentConfig, config);
