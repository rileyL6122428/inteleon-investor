import { Component, ElementRef, Inject, inject, Input, signal, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { IconParams, PokemonIconComponent } from '../../pokemon-icon/pokemon-icon.component';
import { MatListModule } from '@angular/material/list';
import * as d3 from 'd3';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialog } from '@angular/material/dialog';
import { InvestInPokemonComponent } from '../../widgets/invest-in-pokemon/invest-in-pokemon.component';
import { PokemonInvestment } from '../../widgets/pokemon-investments-list/pokemon-investments-list.component';
import { PokemonService } from '../../../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  imports: [
    PokemonIconComponent,
    MatExpansionModule,
    MatButtonModule,
    MatListModule,
    MatTabsModule
],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.scss'
})
export class PokemonComponent {

  readonly dialog = inject(MatDialog);
  readonly iconParams = signal<IconParams | null>(null);
  readonly pokemon = signal<PokemonInvestment | null>(null);
  readonly pokemonService = inject(PokemonService);

  @ViewChild('chart') private chartContainer!: ElementRef<SVGSVGElement>;

  static POSITIVE_RETURN_DOT_COLOR = 'rgba(0, 128, 0, 1)';
  static POSITIVE_RETURN_SEGMENT_COLOR = 'rgba(0, 128, 0, .5)';

  static NEGATIVE_RETURN_DOT_COLOR = 'rgba(255, 0, 0, 1)';
  static NEGATIVE_RETURN_SEGMENT_COLOR = 'rgba(255, 0, 0, 0.5)';

  private data = [
    { placement: 'Day 2', return: -20 },
    { placement: 'top 64', return: -3 },
    { placement: 'top 32', return: 1 },
    { placement: 'top 16', return: 2 },
    { placement: 'top 8', return: 5 },
    { placement: 'top 4', return: 8 },
    { placement: 'second', return: 10 },
    { placement: 'first', return: 40 }
  ];

  private placements = [
    'Day 2',
    'top 64',
    'top 32',
    'top 16',
    'top 8',
    'top 4',
    'second',
    'first',
  ];


  @Input()
  set pokemonNumber(pokemonNumber: number) {
    this.pokemonService.getAPokemon({
      pokedexNumber: pokemonNumber,
      form: 'default'
    })
    .subscribe((pokemon) => this.pokemon.set(pokemon));
    // this.iconParams.set({
    //   pokedexNumber: pokemonNumber,
    //   form: 'default'
    // });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(InvestInPokemonComponent, {
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed. Result =', result);
    });
  }

  ngAfterViewInit() {
    this.drawChart();
  }

  private drawChart() {
    const svg = d3.select(this.chartContainer.nativeElement);
    svg.selectAll('*').remove();

    const margin = { top: 20, right: 20, bottom: 50, left: 60 };
    const width = 800 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const g = svg
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const xScale = d3
      .scalePoint()
      .domain(this.placements)
      .range([0, width])
      .padding(0.5);

    const yScale = d3
      .scaleLinear()
      .domain([
        d3.min(this.data, (d) => d.return)! - 5,
        d3.max(this.data, (d) => d.return)! + 5,
      ])
      .range([height, 0]);

    // Axes
    g.append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(xScale));

    g.append('g').call(
      d3.axisLeft(yScale).tickFormat((d) => `${d.toString()}%`)
    );

    // Gradient Definition
    const defs = svg.append('defs');
    const gradient = defs
      .append('linearGradient')
      .attr('id', 'demarcation-gradient')
      .attr('x1', '0%')
      .attr('y1', '0%')
      .attr('x2', '0%')
      .attr('y2', '100%');

    gradient
      .append('stop')
      .attr('offset', '49%')
      .attr('stop-color', 'green')
      .attr('stop-opacity', 0.1);

    gradient
      .append('stop')
      .attr('offset', '51%')
      .attr('stop-color', 'red')
      .attr('stop-opacity', 0.1);

    // Demarcation line at y=0
    g.append('line')
      .attr('x1', 0)
      .attr('x2', width)
      .attr('y1', yScale(0))
      .attr('y2', yScale(0))
      .attr('stroke', 'gray')
      .attr('stroke-dasharray', '4');

    g.append('rect')
      .attr('x', 0)
      .attr('y', yScale(0) - 20)
      .attr('width', width)
      .attr('height', 40)
      .attr('fill', 'url(#demarcation-gradient)');

    // Split into red/green segments
    const line = d3.line<{ placement: string; return: number }>()
      .x((d) => xScale(d.placement)!)
      .y((d) => yScale(d.return))
      .curve(d3.curveMonotoneX);

    const segments: [typeof this.data[0], typeof this.data[0]][] = [];
    for (let i = 0; i < this.data.length - 1; i++) {
      segments.push([this.data[i], this.data[i + 1]]);
    }

    segments.forEach(([start, end]) => {
      const color = start.return >= 0 && end.return >= 0 ?
        PokemonComponent.POSITIVE_RETURN_SEGMENT_COLOR :
        PokemonComponent.NEGATIVE_RETURN_SEGMENT_COLOR;
      g.append('path')
        .datum([start, end])
        .attr('fill', 'none')
        .attr('stroke', color)
        .attr('stroke-width', 2)
        .attr('d', line);
    });

    const focusGroup = g.append('g').style('display', 'none');

    // Dotted horizontal line
    focusGroup.append('line')
      .attr('id', 'focus-line-x')
      .attr('stroke', 'gray')
      .attr('stroke-dasharray', '4');

    // Dotted vertical line
    focusGroup.append('line')
      .attr('id', 'focus-line-y')
      .attr('stroke', 'gray')
      .attr('stroke-dasharray', '4');

    // Tooltip text background (optional rectangle for better readability)
    focusGroup.append('rect')
      .attr('id', 'focus-rect')
      .attr('fill', 'white')
      .attr('stroke', 'gray')
      .attr('rx', 4)
      .attr('ry', 4)
      .attr('opacity', 0.8);

    // Tooltip text itself
    focusGroup.append('text')
      .attr('id', 'focus-text')
      .attr('text-anchor', 'middle')
      .attr('alignment-baseline', 'bottom')
      .style('font-size', '12px')
      .style('pointer-events', 'none');

    // Points
    g.selectAll('.dot')
      .data(this.data)
      .enter()
      .append('circle')
      .attr('cx', (d) => xScale(d.placement)!)
      .attr('cy', (d) => yScale(d.return))
      .attr('r', 4)
      .attr('fill', (d) => (d.return >= 0 ?
        PokemonComponent.POSITIVE_RETURN_DOT_COLOR :
        PokemonComponent.NEGATIVE_RETURN_DOT_COLOR))
        .on('mouseover', function (event, d: any) {
        focusGroup.style('display', null);

        const x = xScale(d.placement)!;
        const y = yScale(d.return);

        // Move dotted lines
        focusGroup.select('#focus-line-x')
          .attr('x1', 0)
          .attr('y1', y)
          .attr('x2', x)
          .attr('y2', y);

        focusGroup.select('#focus-line-y')
          .attr('x1', x)
          .attr('y1', y)
          .attr('x2', x)
          .attr('y2', height);

        // Move text
        const text = `${d.placement}, ${d.return}%`;
        const padding = 4;

        focusGroup.select('#focus-text')
          .attr('x', x)
          .attr('y', y - 10)
          .text(text);

        // Adjust background rectangle behind text
        const textWidth = text.length * 6; // rough width estimate
        focusGroup.select('#focus-rect')
          .attr('x', x - textWidth / 2 - padding)
          .attr('y', y - 25)
          .attr('width', textWidth + padding * 2)
          .attr('height', 18);
      })
      .on('mouseleave', function () {
        focusGroup.style('display', 'none');
      });
  }
}
