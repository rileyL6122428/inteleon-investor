import { Component, inject, OnInit, signal, ViewChild } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';

import { LeaderboardTableComponent, Leader } from '../../leaderboard-table/leaderboard-table.component';
import { DistributionPiece, WealthDistPieComponent } from '../../wealth-dist-pie/wealth-dist-pie.component';
import { BarChartRaceComponent, BarChartRace } from '../../bar-chart-race/bar-chart-race.component';
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
  leadersOverTime = signal<BarChartRace[]>([]);
  wealthDist = signal<DistributionPiece[]>([]);
  leaderboardService = inject(LeaderboardService);

  onTabChange() {
    this.resultsOverTime?.pause();
  }

  ngOnInit(): void {
    this.leaderboardService.fetchLeaders()
      .subscribe((response) => {
        this.top6.set(response.top6);
        this.leadersOverTime.set(response.leadersOverTime)
        this.wealthDist.set(response.wealthDist);

        this.loading.set(false);
      });    
  }
}
