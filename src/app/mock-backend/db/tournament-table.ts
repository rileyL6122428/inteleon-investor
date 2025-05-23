import { DatabaseTable } from "./base-database-table";

export interface Tournament {
  id: string;
  date: Date;
  completed: boolean;
  isNext: boolean;
  province: string;
}

export class TournamentTable extends DatabaseTable<Tournament> {}

