import "./NavBar.css";

const NavBar = (props) => {
    const boutPok = (el) => { props.setPokemon(props.pokemonList.indexOf(el)) }

    return (
        <div className="Navbar">
            {props.pokemonList.map((el) => (
                <button style={{
                    color: el.color,
                    borderColor: el.color
                }} key={el.name} onClick={() => boutPok(el)}>{el.name}</button>
            ))}

        </div>

    );
}

export default NavBar;