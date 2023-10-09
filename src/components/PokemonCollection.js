import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemon,searchTerm}) {
  console.log(pokemon)
  const allPokemon = pokemon.map(element =>{
    return(
      <PokemonCard key={element.id} {...element}/>
    )
  })

  return (
    <Card.Group itemsPerRow={6}>
      {allPokemon}
    </Card.Group>
  );
}

export default PokemonCollection;
