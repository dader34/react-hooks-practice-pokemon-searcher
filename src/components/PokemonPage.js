import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage({pokemon,addPokemon,filteredPokemon,setFilteredPokemon}) {
  

  const makeSearch = (term) =>{
    if(term){
      setFilteredPokemon(pokemon.filter(element =>{
        return element.name.toLowerCase().includes(term.toLowerCase())
      }))
    }else{
      setFilteredPokemon(pokemon)
    }
  }


  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addPokemon={addPokemon}/>
      <br />
      <Search makeSearch={makeSearch}/>
      <br />
      <PokemonCollection pokemon={filteredPokemon}/>
    </Container>
  );
}

export default PokemonPage;
