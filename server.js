const express = require('express');
const pokedex = require('./database/pokedex')

const app = express();

// use port set by environment variable if available, else set port to 3000
const port = process.env.PORT || 3000;

app.listen(port, () =>
  console.log(`Server listening at http://localhost:${port}...`)
);

// retrieve all pokemon from pokedex database
app.get("/pokemon", (req, res) => {
    res.send(pokedex);
  });
