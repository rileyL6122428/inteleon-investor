import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-pokemon-icon',
  imports: [],
  templateUrl: './pokemon-icon.component.html',
  styleUrl: './pokemon-icon.component.scss'
})
export class PokemonIconComponent {

  iconUrl = signal<string>('');

  @Input()
  set pokedexNumber(pokedexNumber: number) {
    this.iconUrl.set(
      `pokemon/${pokedexNumber.toString().padStart(4, '0')}/icon.svg`
    );
  }
}
