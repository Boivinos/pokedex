const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
        name: "mew",
    },
];

function PokemonCard() {
    const pokemon = pokemonList[0];
    const src = pokemon.imgSrc
    return src != undefined ?
        <figure>
            <img src={pokemon.imgSrc} />
            <figcaption>Le pokemon est {pokemon.name}</figcaption>
        </figure> :
        <figure>
            <p>???</p>
            <figcaption>Le pokemon est {pokemon.name}</figcaption>
        </figure>

}




export default PokemonCard;