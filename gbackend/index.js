const express = require("express");
const bodyParser = require("body-parser");
const imageRoutes = require("./routes/imageRoutes");

const app = express();
app.use(bodyParser.json());

const port = 3000;

app.use("/api", imageRoutes);

app.listen(port, () => {
  console.log(`Is running at http://localhost:${port}`);
});