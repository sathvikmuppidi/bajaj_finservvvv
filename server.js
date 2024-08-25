const express = require("express");
const routeHandler = require("./routes");

const app = express();

app.use(express.json());

app.use("/", routeHandler);

app.listen(3000, () => {
  console.log(`running on port 3000`);
});
