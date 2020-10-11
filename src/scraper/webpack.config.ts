import { Configuration } from "webpack";
import * as _ from "lodash";
import ParentConfig from "../../webpack.config";
import * as copyWebpackPlugin from "copy-webpack-plugin";

const config: Configuration = {
  entry: {
    "scraper/index": "./main.ts",
  },
  plugins: [
    new copyWebpackPlugin({
      patterns: [{ from: "./Dockerfile", to: "./scraper/Dockerfile", toType: "file" }],
    }),
  ],
};

export default _.merge(ParentConfig, config);
