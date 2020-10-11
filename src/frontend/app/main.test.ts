import { JSDOM } from "jsdom";
import * as fs from "fs";
import * as path from "path";

// mocking dom
const file = fs.readFileSync(path.join(__dirname, "index.html")).toString();
const dom = new JSDOM(file);
Object.defineProperty(window, "document", {
  value: dom.window.document,
});

test("app runs", () => {
  require("./main");
});
