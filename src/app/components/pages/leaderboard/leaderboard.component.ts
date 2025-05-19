import { Component, inject, OnInit, signal, ViewChild } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';

import { LeaderboardTableComponent, Leader } from '../../leaderboard-table/leaderboard-table.component';
import { WealthDistPieComponent } from '../../wealth-dist-pie/wealth-dist-pie.component';
import { BarChartRaceComponent } from '../../bar-chart-race/bar-chart-race.component';
import { LeaderboardService } from '../../../services/leaderboard.service';
import { LoadingShimmerComponent } from '../../widgets/loading-shimmer/loading-shimmer.component';


@Component({
  selector: 'app-leaderboard',
  imports: [
    MatTableModule,
    MatTabsModule,
    WealthDistPieComponent,
    LeaderboardTableComponent,
    BarChartRaceComponent,
    LoadingShimmerComponent
  ],
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.scss'
})
export class ResultsComponent implements OnInit {

  loading = signal(true);

  @ViewChild('resultsOverTime') resultsOverTime: BarChartRaceComponent | null = null;

  top6 = signal<Leader[]>([]);
  leaderboardService = inject(LeaderboardService);

  onTabChange() {
    this.resultsOverTime?.pause();
  }

  ngOnInit(): void {
    this.leaderboardService.fetchLeaders()
      .subscribe((response) => {
        this.top6.set(
          response.top6.map((user, index) => {
            return {
              position: index + 1,
              name: user.username,
              cash: user.netWorth,
              createdAt: user.createdAt,
            }
          })
        );

        this.loading.set(false);
      });    
  }
}
