//* URL de la api
const URL = 'https://pokeapi.co/api/v2/pokemon/';


//--------------------------------------------------------------------------------------------
//* Funcion encargada de consultara la api y obtener la respuesta
const getPokemons = async(name)=>{
    try {
        let pokemon;
        let apiResponse = await axios.get(URL);
        let resultados = apiResponse.data.results;
        
        resultados.forEach((pok)=>{
            if(pok.name==name){
                pokemon = pok;
            };
        });
        return pokemon;
    }
    catch(err){
        console.log(err);
    }
};
//--------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------
//* Funcion encagrada de mostrar los detalles del pokemon
const getDetails = async (element)=>{
    try{
        let pokemonName = element.id;
        let img = element.src;
        let pokemon = await getPokemons(pokemonName);
        let pokemonDetails = await axios.get(pokemon.url);
        pokemonDetails = pokemonDetails.data
        let name = pokemonDetails.name;
        let No = pokemonDetails.id;
        let level = pokemonDetails.base_experience;
        let type = pokemonDetails.types[0].type.name;
        let hability = pokemonDetails.abilities[0].ability.name;
        let height = pokemonDetails.height;
        let weight = pokemonDetails.weight;
        
        //! Introducimos los valores del poquemon en su elemento del dom correspondiente

        // Nombre
        document.getElementById('pokemon-name').innerHTML = name;

        // Imagen del pokemon
        document.getElementById('pokemon-img').innerHTML = `
            <img src='${img}' alt='pokemon' />
        `;

        // No
        document.getElementById('No').innerHTML = No;

        // Level
        document.getElementById('level').innerHTML = level;
        
        // type
        document.getElementById('type').innerHTML = type;
        
        // Hability
        document.getElementById('hability').innerHTML = hability;
        
        // Height
        document.getElementById('height').innerHTML = height;
        
        // Weight
        document.getElementById('weight').innerHTML = weight;
    }
    catch(err){
        console.log(err);
    }
}
//--------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------
//* Funcion encargada de buscar un pokemon
const searchPokemon = async() => {
    try{
        let userInput = document.getElementById('floatingInput').value;
        let pokemon = await getPokemons(userInput);
        let img = document.getElementById(userInput).src;
        let pokemonDetails = await axios.get(pokemon.url);
        pokemonDetails = pokemonDetails.data
        let name = pokemonDetails.name;
        let No = pokemonDetails.id;
        let level = pokemonDetails.base_experience;
        let type = pokemonDetails.types[0].type.name;
        let hability = pokemonDetails.abilities[0].ability.name;
        let height = pokemonDetails.height;
        let weight = pokemonDetails.weight;
        //! Introducimos los valores del poquemon en su elemento del dom correspondiente

        // Nombre
        document.getElementById('pokemon-name').innerHTML = name;

        // Imagen del pokemon
        document.getElementById('pokemon-img').innerHTML = `
            <img src='${img}' alt='pokemon' />
        `;

        // No
        document.getElementById('No').innerHTML = No;

        // Level
        document.getElementById('level').innerHTML = level;
        
        // type
        document.getElementById('type').innerHTML = type;
        
        // Hability
        document.getElementById('hability').innerHTML = hability;
        
        // Height
        document.getElementById('height').innerHTML = height;
        
        // Weight
        document.getElementById('weight').innerHTML = weight;
        
    }
    catch(err){
        console.log(err);
    }
}
//--------------------------------------------------------------------------------------------