import { Component, input, signal } from '@angular/core';

import { DatePipe } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { PokeDollarsComponent } from "../poke-dollars/poke-dollars.component";

export interface Leader {
  position: number;
  name: string;
  cash: number;
  createdAt: Date;
}

@Component({
  selector: 'app-leaderboard-table',
  imports: [
    MatTableModule,
    DatePipe,
    PokeDollarsComponent,
  ],
  templateUrl: './leaderboard-table.component.html',
  styleUrl: './leaderboard-table.component.scss'
})
export class LeaderboardTableComponent {
  leadersDisplayedColumns = signal(['position', 'name', 'cash', 'createdAt'])
  leaders = input<Leader[]>([]);
}
