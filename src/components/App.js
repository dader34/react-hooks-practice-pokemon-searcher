import React, { useState,useEffect } from "react";
import PokemonPage from "./PokemonPage";

function App() {
  const [pokemon,setPokemon] = useState([])
  const [filteredPokemon,setFilteredPokemon] = useState([])

  useEffect(()=>{
    fetch('http://localhost:3001/pokemon')
    .then(resp => resp.json())
    .then((data) => {setFilteredPokemon(data);setPokemon(data)})
    .then(console.log)
  },[])

  const addPokemon = (newPokemon) =>{
    fetch("http://localhost:3001/pokemon",{
      method: "POST",
      headers:{
        "Content-Type" : "application/json"
      },
      body:JSON.stringify(newPokemon)
    })
    .then(resp => resp.json())
    .then((data) => {setPokemon(current => [...current,data]);setFilteredPokemon(current => [...current,data])})
    // .then(data => setPokemon(current => [...current,data]))
  }

  return (
    <div className="App">
      {pokemon.length > 1 ? <PokemonPage pokemon={pokemon} addPokemon={addPokemon} filteredPokemon={filteredPokemon} setFilteredPokemon={setFilteredPokemon}/> : null}
    </div>
  );
}

export default App;
