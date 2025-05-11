import { MockDatabase } from "../db/mock-database";

export class PokemonController {

  constructor(
    private database: MockDatabase
  ) {}

  getAll() {
    return this.database.pokemonTable.getAll();
  }
}