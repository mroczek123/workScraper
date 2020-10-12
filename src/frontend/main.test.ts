import Axios from "axios";
import { exec, execSync } from "child_process";
import { readFileSync, rmdirSync } from "fs";
import { ROOT_PATH } from "globals";
import * as path from "path";

const SERVER_URL = "127.0.0.1:9000";

describe("server", () => {
  beforeAll(async () => {
    execSync("gulp build");
    exec(`node ${path.join(ROOT_PATH, "dist", "frontend", "index.js")}`);
    let isResponding = false;
    while (!isResponding) {
      await Axios.get(SERVER_URL)
        .then(() => (isResponding = true))
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        .catch(() => {});
    }
  });
  afterAll(() => {
    try {
      rmdirSync(path.join(ROOT_PATH, "dist"));
      // eslint-disable-next-line no-empty
    } catch (e) {}
  });

  test("returns index.html on root", async () => {
    const response = await Axios.get(SERVER_URL);
    expect(response.status).toEqual(200);
    expect(response.data).toEqual(readFileSync(path.join(__dirname, "app", "index.html")));
  });

  test("serves static files on /* pattern", async () => {
    const response = await Axios.get(SERVER_URL + "/app.js");
    expect(response.status).toEqual(200);
  });
});
