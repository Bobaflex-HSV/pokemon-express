const express = require('express');
const pokemon_router = require('./routes/pokemon')

const app = express();

app.use('/', pokemon_router)

// use port set by environment variable if available, else set port to 3000
const port = process.env.PORT || 3000;

app.listen(port, () =>
  console.log(`Server listening at http://localhost:${port}...`)
);