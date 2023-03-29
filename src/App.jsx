
import PokemonCard from "./components/PokemonCard"
import { useState } from "react";
import "./App.css"
import NavBar from "./components/NavBar";
import { useEffect } from "react";


function App() {

  const pokemonList = [
    {
      name: "Bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      color: "green",
    },
    {
      name: "Charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      color: "orange",
    },
    {
      name: "Squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      color: "blue",
    },
    {
      name: "Pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      color: "yellow",
      phrase: "pika pika !!!!",
    },
    {
      name: "Mew",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png",
      color: "pink",
    },
  ];

  const [pokemonInd, setPokemon] = useState(0);

  useEffect(
    () => {
      alert("Welcome in this amazing world, this is an automatic message !!!");
    },
    []
  );

  return (
    <div>
      <h1>Le Pokedex de Boivinos</h1>
      <NavBar setPokemon={setPokemon} pokemonList={pokemonList} />
      <PokemonCard pokemon={pokemonList[pokemonInd]} />
    </div>

  )
}

export default App;