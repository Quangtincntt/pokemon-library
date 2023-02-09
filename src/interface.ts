export interface pokemon {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
}

export interface PokemonDetail extends pokemon {
  abilities?: {
    abilities: string;
    name: string;
  }[];
}
