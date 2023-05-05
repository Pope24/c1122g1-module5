module.exports = function (request, response) {
  let bookList = require("book.json");
  let book = bookList.find((book) => (book.id = request.params.id));
  if (book != undefined) response.json(book);
  else response.json(bookList);
};
