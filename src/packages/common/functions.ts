import { ChildProcess, spawn } from "child_process";

export function getEnvVariable(name: string): string {
  const val = process.env[name];
  if (!val) {
    throw Error(`No enviroment variable ${name} set. Exiting...`);
  }
  return val;
}

export function runScriptInChildProcess(
  path: string,
  fileName: string,
  env: Record<string, unknown> = {},
): ChildProcess {
  return spawn("node", [`${fileName}`], {
    detached: true,
    env: Object.assign(process.env, env),
    cwd: path,
    stdio: "inherit",
  });
}
