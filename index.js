require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

const port = process.env.PORT || 5000;

app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("server is running data will appear soon...");
});

app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});
