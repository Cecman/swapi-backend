const Hapi = require('@hapi/hapi');
const fetch = require('node-fetch');

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
        credentials: true,
        // additionalHeaders: ["Access-Control-Allow-Headers",
        // "Origin, X-Requested-With, Content-Type, Accept"],
      },
    },
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: async (request, h) => {
      const movies = [
        {
          title: 'Server Movie 1',
          episode: '1',
          characters: ['Char 1', 'Char 2', 'char 3'],
        },
        {
          title: 'Movie 2',
          episode: '2',
          characters: ['Char 4', 'Char 5', 'char 3'],
        },
        {
          title: 'Movie 3',
          episode: '3',
          characters: ['Char 8', 'Char 5', 'char 1'],
        },
      ];

      url = 'https://swapi.dev/api/films/';
      const responseData = await fetch(url);
      const jsonData = await responseData.json();
      console.log(jsonData);
      return jsonData;
    },
  });

  await server.start();
};

process.on('unhandledRejection', err => {
  console.log(err);
  process.exit(1);
});

init();
