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

/// retrieve pokemon info details based on id and info pokemon/:id/:info(name|type|base)

app.get("/pokemon/:id/:info", (req, res) => {
  const { id, info } = req.params;

  function getInfo(pokemonData){
    var infoObj ={};
    
    switch (info){
        case 'name': infoObj = pokemonData[0].name
        break;
        case 'type': infoObj = pokemonData[0].type
        break;
        case 'base': infoObj = pokemonData[0].base
        break;
        default: null;
    }
    return infoObj;
  }
   var pokemon = pokedex.filter((element) => element.id == req.params.id);
   res.send(getInfo(pokemon));
});