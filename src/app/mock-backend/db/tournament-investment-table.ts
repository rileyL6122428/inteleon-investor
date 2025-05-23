import { DatabaseTable } from "./base-database-table";

export interface TournamentInvestment {
  id: string;
  tournamentId: string;
  pokemonId: string;
  userId: string;
  invested: number;
  returned: number | null;
}

export class TournamentInvestmentTable
  extends DatabaseTable<TournamentInvestment> {}

