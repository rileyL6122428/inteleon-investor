import { DatabaseTable } from "./base-database-table";

export interface LeaderSnapshot {
  id: string;
  userid: string;
  netWorth: number;
  date: Date;
}

export class LeadersOverTimeTable extends DatabaseTable<LeaderSnapshot> {}

