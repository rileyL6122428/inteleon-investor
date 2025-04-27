import { Component, input, linkedSignal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { PokeDollarsComponent } from '../../poke-dollars/poke-dollars.component';

@Component({
  selector: 'app-percentage-change',
  imports: [
    MatIconModule,
    PokeDollarsComponent
  ],
  templateUrl: './percentage-change.component.html',
  styleUrl: './percentage-change.component.scss'
})
export class PercentageChangeComponent {
  initial = input(0);
  final = input(0);

  percentageChange = linkedSignal(() => {
    const initial = this.initial();
    const final = this.final();

    if (initial === 0) {
      return Infinity;
    }

    return Math.round((final - initial) * 100 / initial);
  });
}
