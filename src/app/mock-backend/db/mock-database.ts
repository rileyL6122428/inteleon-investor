import { PokemonTable } from './pokemon-table';
import { POKEMON_SEED } from './seed';

export class MockDatabase {
  readonly pokemonTable = new PokemonTable();
}

export const MOCK_DATABASE = new MockDatabase();

POKEMON_SEED.forEach(
  (pokemon) => MOCK_DATABASE.pokemonTable.insert(pokemon)
);
