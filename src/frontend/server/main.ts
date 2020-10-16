import { getEnvVariable } from "@src/packages/common/functions";
import * as express from "express";
import * as path from "path";

console.log("Initiating server...");
const app = express();

//settings
const PORT = getEnvVariable("PORT");

//routes
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});
app.use(express.static(path.resolve(__dirname, "public")));

app.listen(PORT);
console.log(`Server listens on port ${PORT}`);
