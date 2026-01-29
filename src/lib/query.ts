export const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

export const getPokemon = (species: string) =>
  fetch(`${BASE_URL}/${species}`).then((res) => res.json());
