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

// retrieve single pokemon with dynamic route on id
app.get("/pokemon/:id", (req, res) => {
    const { id } = req.params;
    const pokemon = pokedex.filter((element) => element.id == req.params.id);
    res.send(pokemon);
});