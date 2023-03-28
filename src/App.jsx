
import PokemonCard from "./components/PokemonCard"
import { useState } from "react";
import "./App.css"


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

  const handleClickSuiv = () => {
    setPokemon(pokemonInd + 1)

  }
  const handleClickPrec = () => {
    setPokemon(pokemonInd - 1)

  }

  return pokemonInd === 0 ?
    <div>
      <PokemonCard pokemon={pokemonList[pokemonInd]} />
      <button onClick={handleClickSuiv}>Prochain pokemon</button>
    </div> : pokemonInd === pokemonList.length - 1 ?
      <div>
        <PokemonCard pokemon={pokemonList[pokemonInd]} />
        <button onClick={handleClickPrec}>Précédent pokemon</button>
      </div> :
      <div>
        <PokemonCard pokemon={pokemonList[pokemonInd]} />
        <button onClick={handleClickPrec}>Précédent pokemon</button>
        <button onClick={handleClickSuiv}>Prochain pokemon</button>
      </div>


    ;
}

export default App;