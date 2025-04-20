import { Component, signal } from '@angular/core';

import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { PokeDollarsComponent } from "../poke-dollars/poke-dollars.component";
import { DatePipe } from '@angular/common';

export interface Leader {
  position: number;
  name: string;
  cash: number;
  createdAt: Date;
}

@Component({
  selector: 'app-current-leaderboard',
  imports: [
    MatTableModule,
    DatePipe,
    PokeDollarsComponent,
  ],
  templateUrl: './current-leaderboard.component.html',
  styleUrl: './current-leaderboard.component.scss'
})
export class CurrentLeaderboardComponent {
  leadersDisplayedColumns = signal(['position', 'name', 'cash', 'createdAt'])

  leaders = signal<Leader[]>([
    {
      position: 1,
      name: 'Red',
      cash: 1000000000,
      createdAt: new Date()
    },
    {
      position: 2,
      name: 'Blue',
      cash: 900000000,
      createdAt: new Date()
    },
    {
      position: 3,
      name: 'Lance',
      cash: 850000000,
      createdAt: new Date()
    },
    {
      position: 4,
      name: 'Lorelei',
      cash: 800000000,
      createdAt: new Date()
    },
    {
      position: 5,
      name: 'Oak',
      cash: 750000000,
      createdAt: new Date()
    },
    {
      position: 6,
      name: 'Bruno',
      cash: 700000000,
      createdAt: new Date()
    },
  ]);
}
