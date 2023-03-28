function PokemonCard(props) {
    const pokemon = props.pokemon;
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