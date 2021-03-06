import { Configuration, IgnorePlugin } from "webpack";
import * as nodeExternals from "webpack-node-externals";
import ParentConfig from "../../webpack.config";
import * as _ from "lodash";
import * as copyWebpackPlugin from "copy-webpack-plugin";

const config: Configuration = {
  entry: {
    "api-server/index": "./src/main.ts",
  },
  externals: [nodeExternals()],
  plugins: [
    new copyWebpackPlugin({
      patterns: [{ from: "./Dockerfile", to: "./api-server/Dockerfile", toType: "file" }],
    }),
    new IgnorePlugin({
      checkResource(resource: string) {
        const lazyImports = [
          "@nestjs/microservices",
          "@nestjs/microservices/microservices-module",
          "@nestjs/websockets",
          "@nestjs/websockets/socket-module",
          "@nestjs/platform-express",
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
};

export default _.merge(ParentConfig, config);
