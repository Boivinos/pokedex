import PropTypes from "prop-types";
import "./PokemonCard.css";

function PokemonCard(props) {
    const pokemon = props.pokemon;
    const src = pokemon.imgSrc
    return src != undefined ?
        <figure style={{
            background: pokemon.color,
            borderRadius: "20px",
        }}>
            <img src={pokemon.imgSrc} />
            <figcaption>Le pokemon est <span style={{
                color: pokemon.color,
                backgroundColor: "white",
            }}>{pokemon.name}</span></figcaption>
        </figure> :
        <figure style={{
            background: pokemon.color
        }}>
            <p>???</p>
            <figcaption >Le pokemon est <span style={{
                color: pokemon.color,
                backgroundColor: "white",
            }}>{pokemon.name}</span> </figcaption>
        </figure>

}

PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string,
    }).isRequired
}


export default PokemonCard;