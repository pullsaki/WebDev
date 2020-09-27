const supervillains = require("supervillains");
var villain = supervillains.random();
const superheroes = require("superheroes");
var hero = superheroes.random();
const fs = require("fs");
var data = (hero + " X " + villain +"\n");
fs.appendFile("heroXvillain.txt", data, (error) => {
  if (error) throw err;
});
console.log(data);
