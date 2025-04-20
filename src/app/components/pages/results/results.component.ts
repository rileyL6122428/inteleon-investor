import { DatePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { PokeDollarsComponent } from "../../poke-dollars/poke-dollars.component";

import { WealthDistPieComponent } from '../../wealth-dist-pie/wealth-dist-pie.component';
import { CurrentLeaderboardComponent } from '../../current-leaderboard/current-leaderboard.component';

export interface Leader {
  position: number;
  name: string;
  cash: number;
  createdAt: Date;
}

@Component({
  selector: 'app-results',
  imports: [
    MatTableModule,
    DatePipe,
    PokeDollarsComponent,
    MatTabsModule,
    WealthDistPieComponent,
    CurrentLeaderboardComponent
  ],
  templateUrl: './results.component.html',
  styleUrl: './results.component.scss'
})
export class ResultsComponent {

  // leadersDisplayedColumns = signal(['position', 'name', 'cash', 'createdAt'])

  // leaders = signal<Leader[]>([
  //   {
  //     position: 1,
  //     name: 'Red',
  //     cash: 1000000000,
  //     createdAt: new Date()
  //   },
  //   {
  //     position: 2,
  //     name: 'Blue',
  //     cash: 900000000,
  //     createdAt: new Date()
  //   },
  //   {
  //     position: 3,
  //     name: 'Lance',
  //     cash: 850000000,
  //     createdAt: new Date()
  //   },
  //   {
  //     position: 4,
  //     name: 'Lorelei',
  //     cash: 800000000,
  //     createdAt: new Date()
  //   },
  //   {
  //     position: 5,
  //     name: 'Oak',
  //     cash: 750000000,
  //     createdAt: new Date()
  //   },
  //   {
  //     position: 6,
  //     name: 'Bruno',
  //     cash: 700000000,
  //     createdAt: new Date()
  //   },
  // ]);

}
