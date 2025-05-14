import { BaseController } from "./base-controller";

export class PokemonController extends BaseController {

  getAll() {
    return this.database.pokemonTable.getAll();
  }

  getOne(params: {pokedexNumber: number, form: string}) {
    return this.database.pokemonTable.getById(
      `${params.pokedexNumber}-${params.form}`
    );
  }
}