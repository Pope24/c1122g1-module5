module.exports = function (request, response) {
  let toDoList = require("todos.json");

  response.json(toDoList);
};
