//* URL de la api
// const URL = 'https://pokeapi.co/api/v2/pokemon/';
const URL = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154';


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
//* Funcion encargada de dibujar un pokemon en el DOM
const drawPokemon = (No,level,hability,name,type,height,weight,pokemonImg)=>{

    // Nombre
    document.getElementById('pokemon-name').innerHTML = name;

    // Imagen del pokemon
    document.getElementById('pokemon-img').innerHTML = `
        <img src='${pokemonImg}' alt='pokemon' />
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
//--------------------------------------------------------------------------------------------



//--------------------------------------------------------------------------------------------
//* Funcion encagrada de mostrar los detalles del pokemon
const getDetails = async (element)=>{
    try{
        let pokemonName = element.id;
        let img = element.src;
        let pokemon = await getPokemons(pokemonName);
        let detallesPokemon = await axios.get(pokemon.url);
        detallesPokemon = detallesPokemon.data
        let name = detallesPokemon.name;
        let No = detallesPokemon.id;
        let level = detallesPokemon.base_experience;
        let type = detallesPokemon.types[0].type.name;
        let hability = detallesPokemon.abilities[0].ability.name;
        let height = detallesPokemon.height;
        let weight = detallesPokemon.weight;
        
        
        //Invocamos a la funcion encargada de dibujar los pokemons en la pantalla
        drawPokemon(No,level,hability,name,type,height,weight,img) 

        // // Nombre
        // document.getElementById('pokemon-name').innerHTML = name;

        // // Imagen del pokemon
        // document.getElementById('pokemon-img').innerHTML = `
        //     <img src='${img}' alt='pokemon' />
        // `;

        // // No
        // document.getElementById('No').innerHTML = No;

        // // Level
        // document.getElementById('level').innerHTML = level;
        
        // // type
        // document.getElementById('type').innerHTML = type;
        
        // // Hability
        // document.getElementById('hability').innerHTML = hability;
        
        // // Height
        // document.getElementById('height').innerHTML = height;
        
        // // Weight
        // document.getElementById('weight').innerHTML = weight;
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
        // Entrada del usuario
        let userInput = document.getElementById('floatingInput').value;

        // Buscar el pokemon solicitado por el usuario
        let pokemon = await getPokemons(userInput);

        // Detalles del pokemon
        let url = pokemon.url;
        let detallesPokemon = await axios.get(url);
        detallesPokemon = detallesPokemon.data;

        // Extraemos la informacion relevante del pokemon encontrado
        let level = detallesPokemon.base_experience;
        let name = detallesPokemon.name;
        let No = detallesPokemon.id;
        let type = detallesPokemon.types[0].type.name;
        let hability = detallesPokemon.abilities[0].ability.name;
        let height = detallesPokemon.height;
        let weight = detallesPokemon.weight;
        let pokemonImg = detallesPokemon.sprites.other.dream_world.front_default;
    
        //Invocamos a la funcion encargada de dibujar los pokemons en la pantalla
        drawPokemon(No,level,hability,name,type,height,weight,pokemonImg) 
        
    }
    catch(err){
        console.log(err);
    }
}
//--------------------------------------------------------------------------------------------
