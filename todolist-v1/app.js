const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");
const tasks = [];
const workTasks = [];
app.get("/", function(req, res) {
  const day = date.getDay();
  res.render("list", {
    listTitle: day,
    items: tasks
  });
});

app.post("/", function(req, res) {
  const task =  req.body.newItem;
  tasks.push(task);
  res.redirect("/");
});

app.get("/work", function(req, res) {
  res.render("list", {
    listTitle: "Work Tasks",
    items: workTasks
  });
});

app.post("/work", function(req, res) {
  const workTask =  req.body.newItem;
  workTasks.push(workTask);
  res.redirect("/work");
});

app.listen(3000, function() {
  console.log("Server is running on port 3000");
});
