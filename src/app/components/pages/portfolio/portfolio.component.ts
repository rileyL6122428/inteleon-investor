import { Component } from '@angular/core';
import { PokeDollarsComponent } from '../../poke-dollars/poke-dollars.component';
import { PokemonIconComponent } from '../../pokemon-icon/pokemon-icon.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-portfolio',
  imports: [
    PokeDollarsComponent,
    PokemonIconComponent,
    MatIconModule
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

}
