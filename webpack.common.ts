import * as path from "path";
import * as webpack from "webpack";

const config: webpack.Configuration = {
  mode: "development",
  target: "node",
  node: {
    __dirname: false,
    __filename: false,
  },
  devtool: "inline-source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      // KEEP IN SYNC WITH tsconfig.json.compilerOptions.paths ! and jest.config.moduleNameMapper
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
  stats: {
    warningsFilter: ["node_modules/express/lib/view.js"],
  },
};

export default config;
