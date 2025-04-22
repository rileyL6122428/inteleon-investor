import { Component, ViewChild } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';

import { CurrentLeaderboardComponent } from '../../current-leaderboard/current-leaderboard.component';
import { WealthDistPieComponent } from '../../wealth-dist-pie/wealth-dist-pie.component';
import { BarChartRaceComponent } from '../../bar-chart-race/bar-chart-race.component';


@Component({
  selector: 'app-results',
  imports: [
    MatTableModule,
    MatTabsModule,
    WealthDistPieComponent,
    CurrentLeaderboardComponent,
    BarChartRaceComponent
  ],
  templateUrl: './results.component.html',
  styleUrl: './results.component.scss'
})
export class ResultsComponent {

  @ViewChild('resultsOverTime') resultsOverTime: BarChartRaceComponent | null = null;

  onTabChange() {
    this.resultsOverTime?.pause();
  }

}
