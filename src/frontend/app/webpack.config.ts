import { Configuration } from "webpack";
import * as copyWebpackPlugin from "copy-webpack-plugin";
import ParentConfig from "../../../webpack.common";
import * as _ from "lodash";

const config: Configuration = {
  entry: {
    "frontend/public/app": "./main.tsx",
  },
  target: "web",
  plugins: [
    new copyWebpackPlugin({
      patterns: [{ from: "./index.html", to: "./frontend/public/index.html" }],
    }),
  ],
};

export default _.merge(ParentConfig, config);
