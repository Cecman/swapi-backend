const { getMoviesHandler, getPeopleHandler } = require("./handlers");

const getFilms = {
  method: "GET",
  path: "/films",
  handler: getMoviesHandler,
};

const getCharacters = {
  method: "GET",
  path: "/characters",
  handler: getPeopleHandler
};

module.exports = { getFilms, getCharacters };
