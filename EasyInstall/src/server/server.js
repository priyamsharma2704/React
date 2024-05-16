const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");

app.use(cors());

app.get("/", (req, res) => {
  res.send({ data: "Hello World!" });
});

mongoose
  .connect(
    "mongodb+srv://psharma:psharma@cluster0.xvu7n8e.mongodb.net/EasyInstall"
  )
  .then(() => {
    console.log("Connected to MongoDB now");
  })
  .catch((err) => {
    console.log(err);
  });

const appsSchema = new mongoose.Schema({
  name: String,
  id: String,
});

const appsModel = mongoose.model("App", appsSchema);

app.get("/getApps", (req, res) => {
  appsModel
    .find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => console.log(err));
});

app.listen(4000, () => {
  console.log("Server running on port 4000");
});
