
let container = document.getElementById("pokemon_card_container");
let searchInput = document.getElementById("search");
let filterButton = document.getElementById("filter");
let type = document.getElementById("type");

function createPokemoncard(pokemon){
    let card  =  document.createElement('div');
    card.classList.add("pokemon_card")
    card.innerHTML = `
    <div class='card_inner border-2 border-gray-300 flex flex-col items-center justify-center h-72 w-48 rounded-lg'>
    <div class='card_front'>
    <div class='id'>${pokemon.id}</div>
    <img src='${pokemon.sprites.front_default}' class='img'>
    <div class='name'>${pokemon.name}</div>
    <div class='type'>${pokemon.types[0].type.name}</div>
    </div>

    <div class='card_back'>
    <img src='${pokemon.sprites.back_default}' class='img'>
    <div class='name'>${pokemon.name}</div>
    </div>
    </div>
    `
    return card;
}


filterButton.addEventListener("click", () => {
    let allCards = document.querySelectorAll('.pokemon_card');
    allCards.forEach(function(pokemon){
        let pokemonType = type.value
        if(pokemon.children[0].children[0].querySelector('.type').innerText === pokemonType){
            pokemon.style.display = 'block';
        }else{
            pokemon.style.display = 'none';
        }
        
    })
})

searchInput.addEventListener('keyup', ()=>{
    let searchValue = searchInput.value.toLowerCase();
    let allCards = document.querySelectorAll('.pokemon_card');
    allCards.forEach(function(pokemon){
        let pokemonName = pokemon.querySelector('.name').innerText;
        if(pokemonName.includes(searchValue)){
            pokemon.style.display = 'flex';
        }else{
            pokemon.style.display = 'none';
        }
        
    })
})

async function fetchPokemondata(i) {
    let data = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    let result = await data.json();
    return result;
}


async function fetchPokemon(){
    for(let i=1; i<=50; i++){
        let pokemon = await fetchPokemondata(i);
        let pokemonCard = createPokemoncard(pokemon);
        container.appendChild(pokemonCard);
    }
}

fetchPokemon()



