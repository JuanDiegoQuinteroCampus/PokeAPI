const api = document.querySelector('.container')
const formulario = document.querySelector('#formulario')
const boton = document.querySelector('#boton')
const resultados = document.querySelector('#resultados')



const worker = new Worker('./components/wsdata.js');
worker.postMessage('start'); 
worker.onmessage = function(event) {


  const filtrar = () =>{
    resultados.innerHTML='';
    const texto =  formulario.value;
    
    for(let data of pokemonData){
      let name = data.name;
      if(name.indexOf(texto) !== -1){
        resultados.innerHTML += `
        <div class="justify-content-center">
        <div class="card m-3 text-center p-5 border-white bg-black text-light fosfo-border " style="width: 18rem;">
        <img src="${data.imageUrl}" id="imagen" class="card-img-top" alt="${pokemon.name}">
        <div class="card-body">
        <p class="card-text">ID: ${data.id}</p>
        <h3 class="card-title">${data.name}</h3>
        <p class="card-text">Types: ${data.types.join(', ')}</p> 
        <p class="card-text">Height: ${data.height}</p>
        <p class="card-text">Weight: ${data.weight}</p>
        </div>    
        </div>
        </div>
      `;
      //utilizamos el join para enlazar mas tipos si tiene mas de un solo tipo
      }
    }
    /* console.log(formulario.value); */
  }
  
  boton.addEventListener('click', filtrar)
  
  


  const pokemonData = event.data;
  
  pokemonData.forEach(pokemon => {
    const card = document.createElement('div');
    card.innerHTML = `
      
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
    `;
    api.appendChild(card);
  });
};
