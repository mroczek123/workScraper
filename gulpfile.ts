import { execSync } from "child_process";
import * as path from "path";
import * as fs from "fs";

const MODULES_LOCATIONS = [
  path.join(__dirname, "src", "api-server"),
  path.join(__dirname, "src", "frontend", "app"),
  path.join(__dirname, "src", "frontend", "server"),
];

const TESTS_LOCATIONS = MODULES_LOCATIONS.concat([]); // TODO: HOOK FOR NEXT TESTS

export async function build(): Promise<void> {
  fs.rmdirSync(path.join(__dirname, "dist"), { recursive: true });
  MODULES_LOCATIONS.forEach((path) => {
    execSync("npx webpack", { cwd: path, stdio: "inherit" });
  });
}

export async function test(): Promise<void> {
  build();
  TESTS_LOCATIONS.forEach((path) => {
    execSync("jest", { cwd: path, stdio: "inherit" });
  });
}
