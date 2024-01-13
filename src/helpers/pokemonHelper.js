const obtenerIdPokemons = () => {
    const pokemons1 = obtenerAleatorio(600)
    const pokemons2 = obtenerAleatorio(600) 
    const pokemons3 = obtenerAleatorio(600) 
    const pokemons4 = obtenerAleatorio(600) 
    const pokemonsArr = [pokemons1,pokemons2,pokemons3,pokemons4]
    console.log(pokemonsArr);
}

const obtenerNombresPokemons = (arreglo) => {
    const nombre1 = consumirAPI(arreglo[0]);
    const nombre2 = consumirAPI(arreglo[1]);
    const nombre3 = consumirAPI(arreglo[2]);
    const nombre4 = consumirAPI(arreglo[3]);
}

async function consumirAPI(id){
    const getApi = await fetch(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`).then(p => p.json());
    return getApi;
}

//si quiero usar un metodo original, debo llamar a una fachada y exportar.
const obtenerIdPokemonFachada = () => {
    obtenerIdPokemons();
}

const obtenerAleatorio = function(max){
    return Math.floor(Math.random() * max);
}

// console.log(obtenerAleatorio(600));

export default obtenerIdPokemonFachada