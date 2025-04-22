// // src/app/bar-chart-race/bar-chart-race.component.ts
// import { Component, OnInit, ElementRef, ViewChild, OnDestroy, AfterViewInit, Input, AfterContentChecked } from '@angular/core';
// import * as d3 from 'd3';
// import { EMPTY, interval, of, Subscription, switchMap, takeUntil, takeWhile, tap } from 'rxjs';

// interface DataItem {
//   name: string;
//   value: number;
//   date: Date;
// }

// @Component({
//   selector: 'app-bar-chart-race',
//   templateUrl: './bar-chart-race.component.html',
//   styleUrls: ['./bar-chart-race.component.scss']
// })
// export class BarChartRaceComponent implements AfterViewInit, OnDestroy {
//   @ViewChild('chartContainer') chartContainer!: ElementRef;
//   private data: DataItem[] = [
//     { date: '2024-01-01', name: 'A', value: 10 },
//     { date: '2024-01-01', name: 'B', value: 5 },
//     { date: '2024-01-01', name: 'C', value: 8 },

//     { date: '2024-01-02', name: 'A', value: 15 },
//     { date: '2024-01-02', name: 'B', value: 4 },
//     { date: '2024-01-02', name: 'C', value: 7 },

//     { date: '2024-01-03', name: 'A', value: 20 },
//     { date: '2024-01-03', name: 'B', value: 1 },
//     { date: '2024-01-03', name: 'C', value: 3 }
//   ]
//     .map(d => ({
//       name: d.name,
//       value: d.value,
//       date: new Date(d.date)
//     }));

//   private svg: d3.Selection<any, unknown, null, undefined> | undefined;
//   private x: d3.ScaleLinear<number, number, never> | undefined;
//   private y: d3.ScaleBand<string> | undefined;
//   private height = 400;
//   private width = 600;
//   private margin = { top: 20, right: 20, bottom: 30, left: 40 };
//   private intervalSubscription: Subscription | undefined;
//   private currentDateIndex = 0;

//   private dates = Array.from(new Set(this.data.map(d => d.date.getTime())))
//       .sort((a, b) => a - b)
//       .map(time => new Date(time));

//   play() {
//     this.animateFrame();
//   }

//   ngAfterViewInit(): void {
//     console.log('Calling after view init');
//     this.loadData();
//   }

//   ngOnDestroy(): void {
//     if (this.intervalSubscription) {
//       this.intervalSubscription.unsubscribe();
//     }
//   }

//   private loadData(): void {
//     this.initChart();
//     this.animateFrame();
//   }


//   private initChart(): void {
//     this.svg = d3.select(this.chartContainer.nativeElement)
//       .append('svg')
//       .attr('width', this.width + this.margin.left + this.margin.right)
//       .attr('height', this.height + this.margin.top + this.margin.bottom)
//       .append('g')
//       .attr('transform', `translate(${this.margin.left},${this.margin.top})`);

//     this.x = d3.scaleLinear()
//       .range([0, this.width]);

//     this.y = d3.scaleBand()
//       .range([0, this.height])
//       .padding(0.1);
//   }


//   private updateChart(dataSlice: DataItem[]): void {
//     if (!this.x || !this.y || !this.svg) return;

//     this.x.domain([0, d3.max(dataSlice, d => d.value) || 0]);
//     this.y.domain(dataSlice.map(d => d.name));

//     const bars = this.svg.selectAll('.bar')
//       .data(dataSlice, d => (d as any).name);

//     // Exit
//     bars.exit().remove();

//     // Enter
//     bars.enter().append('rect')
//       .attr('class', 'bar')
//       .attr('x', 0)
//       .attr('height', this.y.bandwidth())
//       .attr('fill', 'steelblue')
//       .merge(bars as any) // Update + Enter
//       .transition(d3.transition().duration(200))
//       .attr('y', d => this.y!(d.name)!)
//       .attr('width', d => this.x!(d.value)!);
//   }

//   private startAnimation(): void {
//     this.intervalSubscription = interval(1000).pipe(
//       takeWhile(() => {
//         return this.currentDateIndex < this.dates.length
//       }),
//       tap((value) => {console.log('After takeWhile', value)}),
//     ).subscribe(() => {
//       this.animateFrame();
//       // const date = this.dates[this.currentDateIndex];
//       // const dataSlice = this.data.filter(d => d.date.getTime() === date.getTime())
//       //   .sort((a, b) => b.value - a.value)
//       //   .slice(0, 10);

//       // this.updateChart(dataSlice);

//       // this.currentDateIndex = this.currentDateIndex + 1;
//     });
//   }

//   private animateFrame() {
//     const date = this.dates[this.currentDateIndex];
//     const dataSlice = this.data.filter(d => d.date.getTime() === date.getTime())
//       .sort((a, b) => b.value - a.value)
//       .slice(0, 10);

//     this.updateChart(dataSlice);

//     this.currentDateIndex = this.currentDateIndex + 1;
//   }
// }





// bar-chart-race.component.ts
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import * as d3 from 'd3';

interface BarData {
  date: string;
  value: number;
  name: string;
}

@Component({
  selector: 'app-bar-chart-race',
  templateUrl: './bar-chart-race.component.html',
  styleUrls: ['./bar-chart-race.component.scss']
})
export class BarChartRaceComponent implements AfterViewInit {
  // @Input() data: BarData[] = [];
  data: BarData[] = [
  { date: '2025-01-01', name: 'Alpha', value: 100 },
  { date: '2025-01-01', name: 'Beta', value: 80 },
  { date: '2025-01-01', name: 'Delta', value: 60 },
  { date: '2025-01-01', name: 'Gamma', value: 60 },
  
  { date: '2025-01-02', name: 'Alpha', value: 120 },
  { date: '2025-01-02', name: 'Beta', value: 90 },
  { date: '2025-01-02', name: 'Delta', value: 60 },
  { date: '2025-01-02', name: 'Gamma', value: 85 },
  
  { date: '2025-01-03', name: 'Alpha', value: 130 },
  { date: '2025-01-03', name: 'Beta', value: 95 },
  { date: '2025-01-03', name: 'Delta', value: 150 },
  { date: '2025-01-03', name: 'Gamma', value: 100 },
  
  { date: '2025-01-04', name: 'Alpha', value: 125 },
  { date: '2025-01-04', name: 'Beta', value: 110 },
  { date: '2025-01-04', name: 'Delta', value: 200 },
  { date: '2025-01-04', name: 'Gamma', value: 105 },
  
  { date: '2025-01-05', name: 'Alpha', value: 140 },
  { date: '2025-01-05', name: 'Beta', value: 130 },
  { date: '2025-01-05', name: 'Delta', value: 90 },
  { date: '2025-01-05', name: 'Gamma', value: 110 },
];
;
  private svg: any;
  private width = 800;
  private height = 500;
  private margin = { top: 40, right: 20, bottom: 40, left: 100 };
  private currentFrameIndex = 0;
  private groupedData: Map<string, BarData[]> = new Map();
  private dates: string[] = [];
  private playing = false;
  private interval: any;

  ngAfterViewInit(): void {
    this.processData();
    this.createSvg();
    this.renderFrame(this.dates[this.currentFrameIndex]);
  }

  processData() {
    this.data.forEach(d => {
      if (!this.groupedData.has(d.date)) this.groupedData.set(d.date, []);
      this.groupedData.get(d.date)?.push(d);
    });
    this.dates = Array.from(this.groupedData.keys()).sort();
  }

  createSvg() {
    this.svg = d3.select("#barChartRace")
      .append("svg")
      .attr("width", this.width)
      .attr("height", this.height);
  }

  renderFrame(date: string) {
    const frameData = this.groupedData.get(date)?.sort((a, b) => b.value - a.value).slice(0, 10) || [];

    const x = d3.scaleLinear()
      .domain([0, d3.max(frameData, d => d.value) || 1])
      .range([0, this.width - this.margin.left - this.margin.right]);

    // const xAxis = d3.axisBottom(x)
    //   .ticks(5)
    //   .tickSizeOuter(0);

    // const axisGroup = this.svg.selectAll(".x-axis").data([null]);

    // axisGroup.enter()
    //   .append("g")
    //   .attr("class", "x-axis")
    //   .attr("transform", `translate(${this.margin.left}, ${this.height - this.margin.bottom})`)
    //   .call(xAxis)
    //   .selectAll("text")
    //   .attr("fill", "darkgreen") // ✅ customize color here
    //   .attr("font-size", "12px")
    //   .attr("font-family", "sans-serif");

    // axisGroup
    //   .attr("transform", `translate(${this.margin.left}, ${this.height - this.margin.bottom})`)
    //   .call(xAxis)
    //   .selectAll("text")
    //   .attr("fill", "darkgreen");
    const tickCount = 5;
    const maxValue = d3.max(frameData, d => d.value) ?? 100;
    const tickStep = Math.ceil(maxValue / tickCount / 10) * 10;
    const tickValues = d3.range(0, tickStep * tickCount + 1, tickStep);

    const t = d3.transition().duration(500);
    const xAxis = d3.axisBottom(x)
      .ticks(5)
      .tickValues(tickValues)
      // .tickSizeOuter(0)
      .tickFormat(d3.format("~s"));;

    const xAxisGroup = this.svg.selectAll(".x-axis").data([null]);

    xAxisGroup.enter()
      .append("g")
      .attr("class", "x-axis")
      .attr("transform", `translate(${this.margin.left}, ${this.height - this.margin.bottom})`)
      .call(xAxis)
      .selectAll("text")
      .attr("fill", "#FFF")
      .attr("font-size", "12px")
      .attr("font-family", "sans-serif");

    xAxisGroup
      .transition(t) // Apply the transition
      .call(xAxis);

    const y = d3.scaleBand()
      .domain(frameData.map(d => d.name))
      .range([this.margin.top, this.height - this.margin.bottom])
      .padding(0.1);

    const bars = this.svg.selectAll("rect").data(frameData, (d: any) => d.name);

    bars.enter()
      .append("rect")
      .attr("x", this.margin.left)
      .attr("y", (d: any) => y(d.name)!)
      .attr("height", y.bandwidth())
      .attr("width", (d: any) => x(d.value))
      .attr("fill", "steelblue")
      .merge(bars as any)
      .transition().duration(500)
      .attr("y", (d: any) => y(d.name)!)
      .attr("width", (d: any) => x(d.value));

    bars.exit().remove();

    const labels = this.svg.selectAll("text.label")
    .data(frameData, (d: any) => d.name);

    labels.enter()
      .append("text")
      .attr("class", "label")
      .attr("x", this.margin.left - 5)
      .attr("y", (d: any) => (y(d.name) || 0) + y.bandwidth() / 2)
      .attr("dy", ".35em")
      .attr("text-anchor", "end")
      .attr("fill", "#FFF")
      .text((d: any) => d.name)
      .merge(labels as any)
      .transition().duration(500)
      .attr("y", (d: any) => (y(d.name) || 0) + y.bandwidth() / 2);

    labels.exit().remove();

    this.svg.append("text")
      .attr("class", "date-label")
      .attr("x", this.width - 100)
      .attr("y", this.height - 80) // Near the bottom
      .attr("fill", "#FFF")
      .attr("font-size", "14px")
      .attr("font-family", "sans-serif")
      .text("");
      // .text(date);
    this.svg.select(".date-label")
      .text(date);
  }

  nextFrame() {
    if (this.currentFrameIndex < this.dates.length - 1) {
      this.currentFrameIndex++;
      this.renderFrame(this.dates[this.currentFrameIndex]);
    }
  }

  prevFrame() {
    if (this.currentFrameIndex > 0) {
      this.currentFrameIndex--;
      this.renderFrame(this.dates[this.currentFrameIndex]);
    }
  }
  
  rewind() {
    if (this.playing) {
      this.pause();
    }
    if (this.currentFrameIndex === 0) {
      return;
    }
    this.currentFrameIndex = 0;
    this.renderFrame(this.dates[this.currentFrameIndex]);
  }

  play() {
    if (this.playing) return;
    this.playing = true;
    this.interval = setInterval(() => {
      if (this.currentFrameIndex < this.dates.length - 1) {
        this.nextFrame();
      } else {
        this.pause();
      }
    }, 1000);
  }

  pause() {
    this.playing = false;
    clearInterval(this.interval);
  }
} 
