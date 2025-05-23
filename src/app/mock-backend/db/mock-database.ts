import { LeadersOverTimeTable } from './leaders-over-time-table';
import { PokemonTable } from './pokemon-table';
import { POKEMON_SEED, USER_SEED, LEADERS_OVER_TIME_SEED, TOURNAMENT_SEED, TOURNAMENT_INVESTMENT_SEED } from './seed';
import { TournamentInvestmentTable } from './tournament-investment-table';
import { TournamentTable } from './tournament-table';
import { UserTable } from './user-table';

export class MockDatabase {
  readonly pokemonTable = new PokemonTable();
  readonly userTable = new UserTable();
  readonly leadersOverTimeTable = new LeadersOverTimeTable();
  readonly tournamentTable = new TournamentTable();
  readonly tournamentInvestmentsTable = new TournamentInvestmentTable();
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

TOURNAMENT_SEED.forEach(
  record => MOCK_DATABASE.tournamentTable.insert(record)
);

TOURNAMENT_INVESTMENT_SEED.forEach(
  record => MOCK_DATABASE.tournamentInvestmentsTable.insert(record)
);