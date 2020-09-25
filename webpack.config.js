const path = require("path");
const webpack = require("webpack");
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: {
    apiServer: "./src/backend/api-server/src/main.ts",
    scraper: "./src/backend/scraper/main.ts",
    frontend: "./src/frontend/main.ts"
  },
  mode: "development",
  target: "node",
  externals: [nodeExternals()],
  devtool: "inline-source-map",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      // KEEP IN SYNC WITH tsconfig.json.compilerOptions.paths !
      "@src": path.resolve(__dirname, "src")
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
      },
    ],
  },
  plugins: [
    new webpack.IgnorePlugin({
      checkResource(resource) {
        const lazyImports = [
          '@nestjs/microservices',
          // ADD THIS
          '@nestjs/microservices/microservices-module',
          '@nestjs/websockets',
          // AND THIS
          '@nestjs/websockets/socket-module',
          '@nestjs/platform-express',
          'cache-manager',
          'class-validator',
          'class-transformer',
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
    })
  ]
};
