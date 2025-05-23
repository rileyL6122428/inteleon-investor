import { DatabaseTable } from "./base-database-table";

export type Placement = '1st' |
  '2nd' |
  'Top 4' |
  'Top 8' |
  'Top 16' |
  'Top 32' |
  'Other';

export interface PokemonPerformance {
  id: string;
  tournamentId: string;
  pokemonId: string;
  topPlacement: Placement;
}

export class TournamentInvestmentTable
  extends DatabaseTable<PokemonPerformance> {}

