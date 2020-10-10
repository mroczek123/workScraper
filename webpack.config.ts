import * as path from "path";
import * as webpack from "webpack";
import * as nodeExternals from "webpack-node-externals";
import * as copyWebpackPlugin from "copy-webpack-plugin";

const config: webpack.Configuration = {
  entry: {
    "api-server/index": "./src/api-server/src/main.ts",
    "scraper/index": "./src/scraper/main.ts",
    "frontend/server": "./src/frontend/main.ts",
    "frontend/app": "./src/frontend/src/main.tsx",
  },
  mode: "development",
  target: "node",
  externals: [nodeExternals()], // for compability with nest.js
  devtool: "inline-source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      // KEEP IN SYNC WITH tsconfig.json.compilerOptions.paths !
      "@src": path.resolve(__dirname, "src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
      },
    ],
  },
  plugins: [
    new copyWebpackPlugin({
      patterns: [{ from: "./src/frontend/src/index.html", to: "./frontend/index.html" }],
    }),
    // for compability with nest.js and his dynamic imports
    new webpack.IgnorePlugin({
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

export default config;
