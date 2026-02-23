import type { Pokemon } from "@/types/pokemon";
import { create } from "zustand";

interface GetPokemonState {
  pokemon: {};
  error: null | string;
  setPokemon: () => void;
  isLoading: boolean;
}

interface FetchPokemonsResponse {
  results: {
    name: string;
  }[];
}

const fetchPokemonNames = async (): Promise<string[]> => {
  return await fetch("https://pokeapi.co/api/v2/pokemon")
    .then((res) => res.json())
    .then((data: FetchPokemonsResponse) => {
      return data.results.map((p) => p.name);
    });
};

const fetchPokemon = async (name: string): Promise<Pokemon> => {
  return await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((res) =>
    res.json(),
  );
};

export const useGetPokemon = create<GetPokemonState>((set) => ({
  pokemon: {},
  isLoading: false,
  error: null,
  setPokemon: async() => {
    const pokemonNames = await fetchPokemonNames()
    const pokemonName = pokemonNames[Math.floor(Math.random() * pokemonNames.length)]

    const pokemon = await fetchPokemon(pokemonName)

    set((state) => ({...state, pokemon}))
    
  }
}));
