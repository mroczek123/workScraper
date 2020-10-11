import { execSync } from "child_process";
import * as path from "path";
import * as fs from "fs";

const WEBPACK_CONFIGS = [
  path.join(__dirname, "src", "api-server"),
  path.join(__dirname, "src", "frontend", "app"),
  path.join(__dirname, "src", "frontend", "server"),
  path.join(__dirname, "src", "scraper"),
];

function build() {
  return new Promise((resolve) => {
    fs.rmdirSync(path.join(__dirname, "dist"), { recursive: true });
    WEBPACK_CONFIGS.forEach((path) => {
      console.log(path);
      try {
        execSync("npx webpack", { cwd: path, stdio: "inherit" });
      } catch (e) {}
    });
    resolve();
  });
}

exports.build = build;
