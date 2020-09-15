import { Explorer } from "@src/models/models";

export default class NoFluffJobsExplorer extends Explorer {
  getUrls() {
    return new Promise((resolve, reject) => {
      resolve(["s"]);
    });
  }
}
