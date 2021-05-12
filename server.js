const Hapi = require("@hapi/hapi");
const { getFilms, getCharacters } = require("./routes/routes");

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: "localhost",
    routes: {
      cors: {
        origin: ["*"],
        credentials: true,
        // additionalHeaders: ["Access-Control-Allow-Headers",
        // "Origin, X-Requested-With, Content-Type, Accept"],
      },
    },
  });

  server.route(getFilms);
  server.route(getCharacters);

  await server.start();
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
