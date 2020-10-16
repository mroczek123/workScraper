import { Configuration } from "webpack";
import * as _ from "lodash";
import ParentConfig, { ignorePaths } from "./webpack.common";
import * as copyWebpackPlugin from "copy-webpack-plugin";
import { ROOT_PATH } from "../globals";
import * as path from "path";

const config: Configuration = {
  entry: { "frontend/index": path.join(ROOT_PATH, "src", "frontend", "server", "main.ts") },
  plugins: [
    new copyWebpackPlugin({
      patterns: [
        {
          from: path.join(ROOT_PATH, "src", "frontend", "Dockerfile"),
          to: path.join(ROOT_PATH, "dist", "frontend", "Dockerfile"),
          toType: "file",
        },
      ],
    }),
  ],
  ignoreWarnings: [ignorePaths(["express/lib/view.js"])],
};

export default _.merge(ParentConfig, config);
