import { LeadersOverTimeTable } from './leaders-over-time-table';
import { PokemonTable } from './pokemon-table';
import { POKEMON_SEED, USER_SEED, LEADERS_OVER_TIME_SEED } from './seed';
import { UserTable } from './user-table';

export class MockDatabase {
  readonly pokemonTable = new PokemonTable();
  readonly userTable = new UserTable();
  readonly leadersOverTimeTable = new LeadersOverTimeTable();
}

export const MOCK_DATABASE = new MockDatabase();

POKEMON_SEED.forEach(
  pokemon => MOCK_DATABASE.pokemonTable.insert(pokemon)
);

USER_SEED.forEach(
  user => MOCK_DATABASE.userTable.insert(user)
);

LEADERS_OVER_TIME_SEED.forEach(
  record => MOCK_DATABASE.leadersOverTimeTable.insert(record)
);