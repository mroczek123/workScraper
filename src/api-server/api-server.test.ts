import { runScriptInChildProcess } from "@src/packages/common/functions";
import Axios from "axios";
import { ChildProcess } from "child_process";
import { ROOT_PATH } from "@src/../globals";
import * as path from "path";

const ENV = {
  PORT: 9001,
};

let SERVER_PROCESS!: ChildProcess;
const SERVER_URL = `http://127.0.0.1:${ENV.PORT}`;

describe("api-server", () => {
  beforeAll(async () => {
    SERVER_PROCESS = runScriptInChildProcess(
      path.join(ROOT_PATH, "dist", "api-server"),
      "index.js",
      ENV,
    );
    let responded = false;
    while (!responded) {
      try {
        await Axios.get(SERVER_URL);
        responded = true;
      } catch (e) {
        if (e.code != "ECONNREFUSED") {
          responded = true;
        }
      }
    }
  });
  afterAll(() => SERVER_PROCESS.kill());

  test("responds", async () => {
    try {
      await Axios.get(SERVER_URL);
    } catch (e) {
      expect(e.response.status).toEqual(404);
    }
  });
});
