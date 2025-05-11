import { BaseController } from "./base-controller";

export class PokemonController extends BaseController {

  getAll() {
    return this.database.pokemonTable.getAll();
  }
}