interface NamedApiResource {
  name: string;
  url: string;
}

interface PokemonAbility {
  ability: NamedApiResource;
  is_hidden: boolean;
  slot: number;
}

interface PokemonCries {
  latest: string;
  legacy: string;
}

interface PokemonGameIndex {
  game_index: number;
  version: NamedApiResource;
}

interface PokemonMoveVersionGroupDetail {
  level_learned_at: number;
  move_learn_method: NamedApiResource;
  order: number | null;
  version_group: NamedApiResource;
}

interface PokemonMove {
  move: NamedApiResource;
  version_group_details: PokemonMoveVersionGroupDetail[];
}

interface PokemonPastAbility {
  abilities: Array<{
    ability: NamedApiResource | null;
    is_hidden: boolean;
    slot: number;
  }>;
  generation: NamedApiResource;
}

interface PokemonStat {
  base_stat: number;
  effort: number;
  stat: NamedApiResource;
}

interface PokemonType {
  slot: number;
  type: NamedApiResource;
}

interface PokemonHeldItem {
  item: NamedApiResource;
  version_details: Array<{
    rarity: number;
    version: NamedApiResource;
  }>;
}

interface PokemonPastType {
  generation: NamedApiResource;
  types: PokemonType[];
}

interface PokemonSpriteSet {
  back_default?: string | null;
  back_female?: string | null;
  back_shiny?: string | null;
  back_shiny_female?: string | null;
  back_gray?: string | null;
  back_transparent?: string | null;
  back_shiny_transparent?: string | null;
  front_default?: string | null;
  front_female?: string | null;
  front_shiny?: string | null;
  front_shiny_female?: string | null;
  front_gray?: string | null;
  front_transparent?: string | null;
  front_shiny_transparent?: string | null;
}

type PokemonSpritesVersionGroup = Record<
  string,
  PokemonSpriteSet & { animated?: PokemonSpriteSet }
>;

type PokemonSpritesVersions = Record<string, PokemonSpritesVersionGroup>;

interface PokemonOtherSprites {
  dream_world: {
    front_default: string | null;
    front_female: string | null;
  };
  home: {
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
  };
  "official-artwork": {
    front_default: string | null;
    front_shiny: string | null;
  };
  showdown: PokemonSpriteSet;
}

interface PokemonSprites {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
  other: PokemonOtherSprites;
  versions: PokemonSpritesVersions;
}

export interface Pokemon {
  abilities: PokemonAbility[];
  base_experience: number;
  cries: PokemonCries;
  forms: NamedApiResource[];
  game_indices: PokemonGameIndex[];
  height: number;
  held_items: PokemonHeldItem[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: PokemonMove[];
  name: string;
  order: number;
  past_abilities: PokemonPastAbility[];
  past_types: PokemonPastType[];
  species: NamedApiResource;
  sprites: PokemonSprites;
  stats: PokemonStat[];
  types: PokemonType[];
  weight: number;
}
