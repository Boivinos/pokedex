import React from 'react';

const NavBar = (props) => {

    const handleClickSuiv = () => {
        props.setPokemon(props.pokemonInd + 1)

    }
    const handleClickPrec = () => {
        props.setPokemon(props.pokemonInd - 1)

    }

    return props.pokemonInd === 0 ?
        <div>
            <button onClick={handleClickSuiv}>Prochain pokemon</button>
        </div> : props.pokemonInd === props.pokemonList.length - 1 ?
            <div>
                <button onClick={handleClickPrec}>Précédent pokemon</button>
            </div> :
            <div>
                <button onClick={handleClickPrec}>Précédent pokemon</button>
                <button onClick={handleClickSuiv}>Prochain pokemon</button>
            </div>
};

export default NavBar;