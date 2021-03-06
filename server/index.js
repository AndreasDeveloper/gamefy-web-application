// Importing Nuxt Files
const { Nuxt, Builder } = require('nuxt');
// Importing Dependencies
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const consola = require('consola');

// Safety Net | Uncaught exceptions
process.on('uncaughtException', err => {
  console.log('Uncaught Exception. Shutting Down..');
  console.log(err.name, err.message);
  // Exit the process
  process.exit(1);
});

// Setting Environmental Variables
dotenv.config({ path: './config.env' });
// Setting App
const app = require('./app');

// Connecting MongoDB
const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);
mongoose.connect(DB, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false }).then(() => {
  console.log('Database connected');
});

// Production & Port Setup 
const isProd = (process.env.NODE_ENV === 'production');
const port = process.env.PORT || 3000;

// Instantiate nuxtjs with options 
const config = require('../nuxt.config');

config.dev = !isProd;
const nuxt = new Nuxt(config);
// Getting the host from options
const { host } = nuxt.options.server;

// Render routes with NuxtJS
app.use(nuxt.render);

// Build only in dev mode with hot-reloading (watcher)
if (config.dev) {
  new Builder(nuxt).build().then(listen);
} else {
  listen();
}

// Listen Server 
function listen() {
  app.listen(port, () => {
    consola.ready({
      message: `Server listening on http://${host}:${port}`,
      badge: true
    });
  });
}