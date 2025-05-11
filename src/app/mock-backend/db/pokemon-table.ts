import { DatabaseTable } from "./base-database-table";

export interface Pokemon {
  id: string;
  pokedexNumber: number;
  pokemonForm: string;
  pokemonName: string;
  slogan: string;
  yourCutNumerator: number;
  yourCutDenominator: number;
  iconPath: string | undefined;
}

export class PokemonTable extends DatabaseTable<Pokemon> {}

