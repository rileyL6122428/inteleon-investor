import { Injectable } from '@angular/core';
import { MockServer } from '../mock-backend/mock-server.service';
import { PokemonInvestment } from '../components/widgets/pokemon-investments-list/pokemon-investments-list.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(
    private mockServer: MockServer
  ) { }

  getAllPokemon(): Observable<PokemonInvestment[]> {
    return this.mockServer.call({
      verb: 'GET',
      path: '/pokemon/all'
    });
  }

  getAPokemon(
    params: {form: string, pokedexNumber: number}
  ): Observable<PokemonInvestment> {
    return this.mockServer.call({
      verb: 'GET',
      path: `/pokemon/${params.pokedexNumber}/${params.form}`
    });
  }

}
