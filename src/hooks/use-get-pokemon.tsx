import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "@/lib/query";
import type { Pokemon } from "@/types/pokemon";

const useGetPokemon = (species: string) =>
  useQuery<Pokemon>({
    queryKey: ["pokemon"],
    queryFn: () => fetch(`${BASE_URL}/${species}`).then((res) => res.json()),
    // staleTime: 1000 * 60 * 0.5   ,
  });

export default useGetPokemon;
