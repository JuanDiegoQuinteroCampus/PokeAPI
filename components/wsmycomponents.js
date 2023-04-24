const wsmycomponents = {
    showpoke(p1){
        return
        `
      
      <div class="card m-3 text-center p-3 border-white bg-black text-light fosfo-border " style="width: 18rem;">
      <img src="${pokemon.imageUrl}" id="imagen" class="card-img-top" alt="${pokemon.name}">
      <div class="card-body">
      <p class="card-text">ID: ${pokemon.id}</p>
      <h3 class="card-title">${pokemon.name}</h3>
      <p class="card-text">Types: ${pokemon.types.join(', ')}</p>
      <p class="card-text">Height: ${pokemon.height}</p>
      <p class="card-text">Weight: ${pokemon.weight}</p>
      </div>
      </div>
    `
    }
}

self.addEventListener('message', async function(event) {
    if (event.data === 'start') {
      const pokemonData = await allDataPokemon();
      self.postMessage(pokemonData); 
    }
  });