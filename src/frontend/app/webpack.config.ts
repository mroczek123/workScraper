import { Configuration } from "webpack";
import * as copyWebpackPlugin from "copy-webpack-plugin";
import ParentConfig from "../../../webpack.config";
import * as _ from "lodash";

const config: Configuration = {
  entry: {
    "frontend/app": "./main.tsx",
  },
  target: "web",
  plugins: [
    new copyWebpackPlugin({
      patterns: [{ from: "./index.html", to: "./frontend/index.html" }],
    }),
  ],
};

export default _.merge(ParentConfig, config);
