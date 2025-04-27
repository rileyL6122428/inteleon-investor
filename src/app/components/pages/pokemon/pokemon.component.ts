import { Component, Input, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { PokemonIconComponent } from '../../pokemon-icon/pokemon-icon.component';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-pokemon',
  imports: [
    PokemonIconComponent,
    MatExpansionModule,
    MatButtonModule,
    MatListModule
],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.scss'
})
export class PokemonComponent {

  pokedexNumber = signal(0);

  @Input()
  set pokemonNumber(pokemonNumber: number) {
    this.pokedexNumber.set(pokemonNumber);
  }
}
