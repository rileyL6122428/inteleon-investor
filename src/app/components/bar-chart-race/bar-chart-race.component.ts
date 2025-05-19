import { Component, input } from '@angular/core';
import * as d3 from 'd3';

export interface BarChartRace {
  date: string;
  value: number;
  name: string;
}

@Component({
  selector: 'app-bar-chart-race',
  templateUrl: './bar-chart-race.component.html',
  styleUrls: ['./bar-chart-race.component.scss']
})
export class BarChartRaceComponent {
  
  data = input<BarChartRace[]>([]);
//   data: BarChartRace[] = [
//   { date: '2025-01-01', name: 'Blue', value: 100 },
//   { date: '2025-01-01', name: 'Lance', value: 80 },
//   { date: '2025-01-01', name: 'Red', value: 60 },
//   { date: '2025-01-01', name: 'Lorelei', value: 60 },
  
//   { date: '2025-01-02', name: 'Blue', value: 120 },
//   { date: '2025-01-02', name: 'Lance', value: 90 },
//   { date: '2025-01-02', name: 'Red', value: 55 },
//   { date: '2025-01-02', name: 'Lorelei', value: 85 },
  
//   { date: '2025-01-03', name: 'Blue', value: 130 },
//   { date: '2025-01-03', name: 'Lance', value: 95 },
//   { date: '2025-01-03', name: 'Red', value: 70 },
//   { date: '2025-01-03', name: 'Lorelei', value: 100 },
  
//   { date: '2025-01-04', name: 'Blue', value: 125 },
//   { date: '2025-01-04', name: 'Lance', value: 110 },
//   { date: '2025-01-04', name: 'Red', value: 100 },
//   { date: '2025-01-04', name: 'Lorelei', value: 105 },
  
//   { date: '2025-01-05', name: 'Blue', value: 140 },
//   { date: '2025-01-05', name: 'Lance', value: 130 },
//   { date: '2025-01-05', name: 'Red', value: 151 },
//   { date: '2025-01-05', name: 'Lorelei', value: 110 },
// ];

  private svg: any;
  private width = 800;
  private height = 500;
  private margin = { top: 40, right: 20, bottom: 40, left: 100 };
  private currentFrameIndex = 0;
  private groupedData: Map<string, BarChartRace[]> = new Map();
  private dates: string[] = [];
  private playing = false;
  private interval: any;

  ngAfterViewInit(): void {
    this.processData();
    this.createSvg();
    this.renderFrame(this.dates[this.currentFrameIndex]);
  }

  processData() {
    this.data().forEach(d => {
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

    const tickCount = 5;
    const maxValue = d3.max(frameData, d => d.value) ?? 100;
    const tickStep = Math.ceil(maxValue / tickCount / 10) * 10;
    const tickValues = d3.range(0, tickStep * tickCount + 1, tickStep);

    const t = d3.transition().duration(500);
    const xAxis = d3.axisBottom(x)
      .ticks(5)
      .tickValues(tickValues)
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
