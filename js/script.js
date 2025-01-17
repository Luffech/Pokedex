const pokemonName = document.querySelector(".pokemon__name");
const pokemonNumber = document.querySelector(".pokemon__number");
const pokemonImage = document.querySelector(".pokemon__image");

const form = document.querySelector(".form");
const input = document.querySelector(".input__search");

const fetchPokemon = async (pokemon) => {
  const APIresponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`
  );

  if (APIresponse.status == 200) {
    const data = await APIresponse.json();
    return data;
  }
};

const renderPokemon = async (pokemon) => {

    pokemonName.innerHTML = 'Carregando...';
    pokemonNumber.innerHTML = '';
  const data = await fetchPokemon(pokemon);

  if (data) {
    pokemonName.innerHTML = data.name; 
    pokemonNumber.innerHTML = data.id;
    pokemonImage.src =
      data["sprites"]["versions"]["generation-v"]["black-white"]["animated"][
        "front_default"
      ];

    input.value = "";
  } else{
    pokemonName.innerHTML = 'Não Encontrado :c';
    pokemonNumber.innerHTML = '';
  }
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  renderPokemon(input.value);
});

renderPokemon('1')
