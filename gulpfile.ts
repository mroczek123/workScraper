import { execSync } from "child_process";
import * as path from "path";
import * as fs from "fs";
import { ROOT_PATH } from "./globals";

const TESTS_LOCATIONS = [
  path.join(ROOT_PATH, "src", "api-server"),
  path.join(ROOT_PATH, "src", "frontend", "app"),
  path.join(ROOT_PATH, "src", "frontend", "server"),
  path.join(ROOT_PATH, "src", "frontend", "packages"),
];

const WEBPACK_CONFIGS_LOCATIONS = [
  path.join(ROOT_PATH, "webpack", "api-server.config.ts"),
  path.join(ROOT_PATH, "webpack", "frontend_app.config.ts"),
  path.join(ROOT_PATH, "webpack", "frontend_server.config.ts"),
];

export async function build(): Promise<void> {
  fs.rmdirSync(path.join(__dirname, "dist"), { recursive: true });
  WEBPACK_CONFIGS_LOCATIONS.forEach((webpackConfig) => {
    try {
      execSync(`npx webpack --config "${webpackConfig}" `, {
        cwd: ROOT_PATH,
      });
    } catch (e) {
      throw Error(parseWebpackError(e));
    }
  });
}

export async function test(): Promise<void> {
  execSync("gulp build", { cwd: ROOT_PATH, stdio: "inherit" });
  TESTS_LOCATIONS.forEach((path) => {
    execSync("jest", { cwd: path, stdio: "inherit" });
  });
  return;
}

// eslint-disable-next-line
function parseWebpackError(e: any) {
  return e.output.reduce((acc: string, el: Buffer | null) => acc + (el ? el.toString() : ""), "");
}
