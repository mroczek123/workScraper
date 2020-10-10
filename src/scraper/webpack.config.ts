import { Configuration } from "webpack";
import * as _ from "lodash";
import ParentConfig from "../../webpack.config";

const config: Configuration = {
  entry: {
    "scraper/index": "./main.ts",
  },
};

export default _.merge(ParentConfig, config);