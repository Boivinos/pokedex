import React from 'react';

const NavBar = (props) => {
    const boutPok = (el) => { props.setPokemon(props.pokemonList.indexOf(el)) }

    return (
        <div>
            {props.pokemonList.map((el) => (
                <button key={el.name} onClick={() => boutPok(el)}>{el.name}</button>
            ))}

        </div>

    );
}

export default NavBar;