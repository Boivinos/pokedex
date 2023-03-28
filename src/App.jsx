
import PokemonCard from "./components/PokemonCard"
import { useState } from "react";
import "./App.css"
import NavBar from "./components/NavBar";



function App() {

  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

  const [pokemonInd, setPokemon] = useState(0);



  return (
    <div>
      <PokemonCard pokemon={pokemonList[pokemonInd]} />
      <NavBar pokemonInd={pokemonInd} setPokemon={setPokemon} pokemonList={pokemonList} />
    </div>

  )
}

export default App;