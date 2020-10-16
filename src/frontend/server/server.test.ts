import { ChildProcess } from "child_process";
import { ROOT_PATH } from "@src/../globals";
import * as path from "path";
import Axios from "axios";
import { readFileSync } from "fs";
import { runScriptInChildProcess } from "@src/packages/common/functions";

const ENV = {
  PORT: 9000,
};
const SERVER_URL = `http://127.0.0.1:${ENV.PORT}`;
let SERVER_PROCESS!: ChildProcess;

describe("frontend/server", () => {
  beforeAll(async () => {
    SERVER_PROCESS = runScriptInChildProcess(
      path.join(ROOT_PATH, "dist", "frontend"),
      "index.js",
      ENV,
    );
    let responded = false;
    while (!responded) {
      try {
        await Axios.get(SERVER_URL);
        responded = true;
        // eslint-disable-next-line no-empty
      } catch (e) {}
    }
  });
  afterAll(() => SERVER_PROCESS?.kill());

  test("returns index.html on root", async () => {
    const response = await Axios.get(SERVER_URL);
    expect(response.status).toEqual(200);
    expect(response.data).toEqual(
      readFileSync(path.join(__dirname, "../", "app", "index.html")).toString(),
    );
  });

  test("serves static files on /* pattern", async () => {
    const response = await Axios.get(SERVER_URL + "/app.js");
    expect(response.status).toEqual(200);
  });
});
