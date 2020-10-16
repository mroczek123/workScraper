import { Configuration } from "webpack";
import ParentConfig from "./webpack.common";
import * as _ from "lodash";
import { ROOT_PATH } from "../globals";
import * as path from "path";
import * as copyWebpackPlugin from "copy-webpack-plugin";

const config: Configuration = {
  entry: {
    "frontend/public/app": path.join(ROOT_PATH, "src", "frontend", "app", "main.tsx"),
  },
  target: "web",
  plugins: [
    new copyWebpackPlugin({
      patterns: [
        {
          from: path.join(ROOT_PATH, "src", "frontend", "app", "index.html"),
          to: path.join(ROOT_PATH, "dist", "frontend", "public", "index.html"),
        },
      ],
    }),
  ],
};

export default _.merge(ParentConfig, config);
