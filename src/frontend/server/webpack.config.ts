import { Configuration } from "webpack";
import * as _ from "lodash";
import ParentConfig from "../../../webpack.common";

const config: Configuration = {
  entry: { "frontend/index": "./main.ts" },
};

export default _.merge(ParentConfig, config);
