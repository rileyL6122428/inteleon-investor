import { DatePipe } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, signal, viewChild } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { PokeDollarsComponent } from "../../poke-dollars/poke-dollars.component";
import {MatTabsModule} from '@angular/material/tabs';

import * as d3 from 'd3';

export interface ExampleData {
  name: string;
  value: number;
}

export interface Leader {
  position: number;
  name: string;
  cash: number;
  createdAt: Date;
}

@Component({
  selector: 'app-results',
  imports: [MatTableModule, DatePipe, PokeDollarsComponent, MatTabsModule],
  templateUrl: './results.component.html',
  styleUrl: './results.component.scss'
})
export class ResultsComponent implements AfterViewInit {

  wealthDistContainer = viewChild<ElementRef<HTMLElement>>('wealthDistributionContainer');

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
      position: 3,
      name: 'Lorelei',
      cash: 800000000,
      createdAt: new Date()
    },
    {
      position: 4,
      name: 'Oak',
      cash: 750000000,
      createdAt: new Date()
    },
    {
      position: 5,
      name: 'Bruno',
      cash: 700000000,
      createdAt: new Date()
    },
  ]);

  ngAfterViewInit(): void {
    const data = [
      {value: 35, name: 'Top 5%'},
      {value: 20, name: '(5%, 10%]'},
      {value: 15, name: '(10%, 20%]'},
      {value: 16, name: '(20%, 50%]'},
      {value: 14, name: '(50%, 100%]'},
    ].reverse();

    const width = 500;

    const height = Math.min(width, 500);
    const radius = Math.min(width, height) / 2;

    const arc: any = d3.arc()
        .innerRadius(radius * 0.67)
        .outerRadius(radius - 1);

    const pie = d3.pie()
        .padAngle(1 / radius)
        .sort(null)
        .value((d: any) => d.value);

    const color = d3.scaleOrdinal()
        .domain(data.map(d => d.name))
        .range(d3.quantize(t => d3.interpolateSpectral(t * 0.8 + 0.1), data.length).reverse());

    const svg = d3.create("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", [-width / 2, -height / 2, width, height])
        .attr("style", "max-width: 100%; height: auto;");

    svg.append("g")
      .selectAll()
      .data(pie((data as any)))
      .join("path")
        .attr("fill", (d: any) => color((d.data.name as any)) as any)
        .attr("d", arc)
      .append("title")
        .text(d => `${(d.data as any).name}: ${(d.data as any).value.toLocaleString()}`);

    svg.append("g")
        .attr("font-family", "sans-serif")
        .attr("font-size", 12)
        .attr("text-anchor", "middle")
      .selectAll()
      .data(pie(data as any))
      .join("text")
        .attr("transform", d => `translate(${arc.centroid(d)})`)
        .call(text => text.append("tspan")
            .attr("y", "-0.4em")
            .attr("font-weight", "bold")
            .text(d => (d.data as any).name))
        .call(text => text.filter(d => (d.endAngle - d.startAngle) > 0.25).append("tspan")
            .attr("x", 0)
            .attr("y", "0.7em")
            .attr("fill-opacity", 0.7)
            .text(d => (d.data as any).value.toLocaleString("en-US")));

    this.wealthDistContainer()?.nativeElement.appendChild(svg.node()!);
  }

}
