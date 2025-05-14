import { Component, input } from '@angular/core';

export interface IconParams {
  pokedexNumber: number;
  form: string;
}

@Component({
  selector: 'app-pokemon-icon',
  imports: [],
  templateUrl: './pokemon-icon.component.html',
  styleUrl: './pokemon-icon.component.scss'
})
export class PokemonIconComponent {
  iconPath = input<string | undefined>('');
}
