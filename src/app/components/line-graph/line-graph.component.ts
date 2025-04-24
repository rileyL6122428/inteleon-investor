import { KeyValuePipe, NgClass } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as d3 from 'd3';

interface DataPoint {
  date: Date;
  price: number;
}

@Component({
  selector: 'app-line-graph',
  templateUrl: './line-graph.component.html',
  styleUrls: ['./line-graph.component.scss'],
  imports: [NgClass, KeyValuePipe]
})
export class LineGraphComponent implements OnInit {
  @ViewChild('chart', { static: true }) chartRef!: ElementRef<SVGSVGElement>;

  timeRanges = {
    '6M': 6 * 30,
    '1Y': 365,
    '2Y': 2 * 365,
    '5Y': 5 * 365,
    'Max': Number.POSITIVE_INFINITY,
  };

  selectedRange: keyof typeof this.timeRanges = '1Y';
  data: DataPoint[] = [];
  filteredData: DataPoint[] = [];
  change = 0;
  percentChange = '0.00';
  endPrice = 0;

  ngOnInit(): void {
    this.data = this.generateFakeData();
    this.updateChart();
  }

  generateFakeData(): DataPoint[] {
    const today = new Date();
    const data: DataPoint[] = [];
    for (let i = 0; i < 5 * 365; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() - i);
      data.push({
        date,
        price: 100 + Math.sin(i / 100) * 20 + Math.random() * 5,
      });
    }
    return data.reverse();
  }

  onRangeSelect(range: keyof typeof this.timeRanges): void {
    this.selectedRange = range;
    this.updateChart();
  }

  updateChart(): void {
    this.filteredData = this.data.filter(d => {
      if (this.timeRanges[this.selectedRange] === Infinity) return true;
      const startDate = new Date();
      startDate.setDate(startDate.getDate() - this.timeRanges[this.selectedRange]);
      return d.date >= startDate;
    });

    const startPrice = this.filteredData[0]?.price || 0;
    this.endPrice = this.filteredData[this.filteredData.length - 1]?.price || 0;
    this.change = this.endPrice - startPrice;
    this.percentChange = ((this.change / startPrice) * 100).toFixed(2);

    const svg = d3.select(this.chartRef.nativeElement);
    const width = 600;
    const height = 300;
    svg.selectAll('*').remove();

    svg.attr('viewBox', `0 0 ${width} ${height}`);

    const x = d3.scaleTime()
      .domain(d3.extent(this.filteredData, d => d.date) as [Date, Date])
      .range([40, width - 10]);

    const y = d3.scaleLinear()
      .domain([d3.min(this.filteredData, d => d.price)!, d3.max(this.filteredData, d => d.price)!])
      .range([height - 30, 10]);

    const line = d3.line<DataPoint>()
      .x(d => x(d.date))
      .y(d => y(d.price));

    svg.append('path')
      .datum(this.filteredData)
      .attr('fill', 'none')
      .attr('stroke', this.change >= 0 ? 'green' : 'red')
      .attr('stroke-width', 2)
      .attr('d', line);

    svg.append('g')
      .attr('transform', `translate(0,${height - 30})`)
      .call(d3.axisBottom(x).ticks(6));

    svg.append('g')
      .attr('transform', `translate(40,0)`)
      .call(d3.axisLeft(y).ticks(5));
  }
}