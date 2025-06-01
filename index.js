const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.json({
    message: "NGINX-CL-2"
  });
});

app.listen(8081, () => {
  console.log("Server is running on port 8081");
});