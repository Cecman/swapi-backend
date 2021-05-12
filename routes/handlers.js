const fetch = require("node-fetch");

const getMoviesHandler = async (request, h) => {
  //const characters = [];

  url = "https://swapi.dev/api/films/";
  const responseData = await fetch(url);
  const jsonData = await responseData.json();

  return jsonData;

  // for (const result of jsonData.results) {
  //   //console.log(result);
  //   for (const chars of result.characters) {
  //     //console.log(chars);
  //     const char = await fetch(chars)
  //     const charJson = await char.json();
  //     characters.push(charJson);
  //   }
  // }
  // console.log(characters);
};

const getPeopleHandler = async (request, h) => {
  url = "https://swapi.dev/api/people/";
  const responseData = await fetch(url);
  const jsonData = await responseData.json();
  return jsonData;
};

module.exports = { getMoviesHandler, getPeopleHandler };
