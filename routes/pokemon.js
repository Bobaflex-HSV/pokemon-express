const express = require("express");
const router = express.Router();
const pokedex = require('../database/pokedex.json')

// retrieve all pokemon from pokedex database
router.get("/pokemon", (req, res) => {
    res.json(pokedex);
  });

// retrieve single pokemon with dynamic route on id
router.get("/pokemon/:id", (req, res) => {
    const { id } = req.params;
    const pokemon = pokedex.filter((element) => element.id == req.params.id);
    res.json(pokemon);
});

/// retrieve pokemon info details based on id and info pokemon/:id/:info(name|type|base)

router.get("/pokemon/:id/:info", (req, res) => {
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
   res.json(getInfo(pokemon));
}); 


module.exports = router;


