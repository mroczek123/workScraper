import { ROOT_PATH } from "../globals";
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
    path: path.resolve(ROOT_PATH, "dist"),
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      // KEEP IN SYNC WITH tsconfig.json.compilerOptions.paths ! and jest.config.moduleNameMapper
      "@src": path.resolve(ROOT_PATH, "src"),
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
};

export default config;

export function ignorePaths(ignored: Array<string>) {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
  return function (error: any): boolean {
    // WebpackError is not exported by types :(
    const path: string = ((Object.entries(error.module).find(
      ([key]) => key == "request",
    ) as unknown) as Record<string, string>)[1];
    return path ? Boolean(ignored.find((ingoredPath) => path.includes(ingoredPath))) : false;
  };
}
