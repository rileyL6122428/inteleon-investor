import { DatabaseTable } from "./base-database-table";

export interface User {
  id: string;
  username: string;
  password: string;
  freeCash: number;
  netWorth: number;
}

export class UserTable extends DatabaseTable<User> {}