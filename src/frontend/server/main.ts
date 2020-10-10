import * as express from "express";
import * as path from "path";
const PORT = 9000;

console.log("Initiating server...");
// TODO: refac this paths to something more abstract as styles and other things will come later
const app = express();
app.get("/app.js", (req, res) => {
  res.sendFile(path.resolve("./app.js"));
});
app.get("/*", (req, res) => {
  res.sendFile(path.resolve("./index.html"));
});

app.listen(PORT);
console.log(`Server listens on port ${PORT}`);
