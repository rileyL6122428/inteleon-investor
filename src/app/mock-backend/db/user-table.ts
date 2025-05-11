import { DatabaseTable } from "./base-database-table";

export interface User {
  id: string;
  username: string;
  password: string;
}

export class UserTable extends DatabaseTable<User> {}