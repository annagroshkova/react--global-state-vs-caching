import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { Pokemon } from "@/types/pokemon";
import { createFileRoute } from "@tanstack/react-router";
import { LoaderCircleIcon, ShipIcon } from "lucide-react";
import { toast } from "sonner";
import { useBoatsCount } from "@/store/useBoatsCount";
import { useGetPokemon } from "@/store/useGetPokemon";

export const Route = createFileRoute("/zustand/")({
  component: RouteComponent,
});


function RouteComponent() {

  const {boats, increaseBoats} = useBoatsCount()
  const {pokemon, setPokemon} =useGetPokemon()
  const isLoadingPokemon = false;

  const handleAddBoats = () => {
    increaseBoats();
  };

  const handleSetPokemon = () => {
    // byt ut den tomma funktionen i toast.promise mot din setter-funktion
    setPokemon()
  };

  return (
    <>
      <p>
        1. Använd{" "}
        <a
          href="https://zustand.docs.pmnd.rs/getting-started/introduction"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700"
        >
          Zustand
        </a>{" "}
        för att skapa en hook som håller koll på antalet båtar du lagt till.
      </p>
      <p>
        <strong>Båtar:</strong> {boats} st
      </p>
      <Button variant="outline" onClick={handleAddBoats}>
        Öka antalet båtar
      </Button>
      <Separator />
      <p>
        2. Använd{" "}
        <a
          href="https://zustand.docs.pmnd.rs/getting-started/introduction"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700"
        >
          Zustand
        </a>{" "}
        för att skapa en hook som hämtar data från ett API och visar upp det på
        denna sida. Kodexemplet nedan hämtar en pokémon från{" "}
        <a
          href="https://pokeapi.co/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700"
        >
          PokéAPI
        </a>{" "}
        och visar upp bild och namn från API-responsen.
      </p>
      <Card className="relative min-h-36">
        {pokemon && !isLoadingPokemon ? (
          <>
            <Badge
              variant="outline-indigo"
              className="absolute bottom-0 m-2 capitalize"
            >
              {pokemon?.name}
            </Badge>
            <img src={pokemon?.sprites?.front_default ?? undefined} alt="pokemon" />
          </>
        ) : (
          <div className="size-24 px-4">
            <div className="flex items-center justify-center size-full bg-gray-100 text-wrap text-xs text-gray-500  px-4">
              {isLoadingPokemon ? (
                <LoaderCircleIcon className="size-4 animate-spin" />
              ) : (
                "Ingen pokemon hämtad"
              )}
            </div>
          </div>
        )}
      </Card>
      <Button variant="outline" onClick={handleSetPokemon}>
        Hämta pokemon
      </Button>
    </>
  );
}
