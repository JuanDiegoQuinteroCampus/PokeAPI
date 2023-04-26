const allDataPokemon = async()=>{

  const response = await fetch ('https://pokeapi.co/api/v2/pokemon?limit=600')
  const data = await response.json();
  const pokemonUrls = data.results.map(pokemon => pokemon.url);
  const pokemonData = await Promise.all(pokemonUrls.map(async url => {
    const response = await fetch(url);
    const data = await response.json();

  
    return {
    id: data.id,
    name: data.name,
    imageUrl: data.sprites.other.dream_world.front_default,
    types: data.types.map(type => type.type.name),
    height: data.height,
    weight: data.weight
    };
    }));
    
    return pokemonData;
    
    }; 
  
    

    self.addEventListener('message', async function(event) {
      if (event.data === 'start') {
        const pokemonData = await allDataPokemon();
        self.postMessage(pokemonData); 
      }
    });
    