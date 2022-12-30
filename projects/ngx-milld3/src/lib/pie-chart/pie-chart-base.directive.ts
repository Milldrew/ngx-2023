import { Directive, ElementRef, Input, OnChanges } from '@angular/core';
import * as d3 from 'd3';
type PieChartData = SliceData[];
type SliceData = { name: string; value: number };
type Data = { name: string; value: number };
const getNames = (data: Data) => data.name;
const getValues = (data: Data) => data.value;

/** Exports a diretive that takes the id of the element that it is assigned to
 *  The Pie Chart has a title at the top and each slice of the pie chart has a label and the value
 *  @Input
 *    • Parent Element Id
 *    • data [{name: string, value: number} ...]
 *    • height
 *    • width
 *    • viewBox
 *    • unit type dollars, pounds inches etc..
 */
@Directive({
  selector: '[appPieChartBase]',
})
export class PieChartBaseDirective implements OnChanges {
  arc = d3.arc().innerRadius(0).outerRadius(500);
  svg: d3.Selection<SVGSVGElement, unknown, HTMLElement, any>;
  arcs: d3.PieArcDatum<
    | number
    | {
        valueOf(): number;
      }
  >[];

  arcLabel = d3.arc().innerRadius(0).outerRadius(750);
  names: string[];
  values: number[];
  range: number[];
  colors: string[];
  orindalScale: d3.ScaleOrdinal<string, string, never>;
  title: 'title';

  initializeProperties() {
    this.names = d3.map(this.pieChartData, getNames);
    this.values = d3.map(this.pieChartData, getValues);
    this.range = d3
      .range(this.names.length)
      .filter((number) => !isNaN(this.values[number]));

    this.colors = d3.quantize(
      (t) => d3.interpolateSpectral(t * 0.8 + 0.1),
      this.names.length
    );
    this.orindalScale = d3.scaleOrdinal<string, string, never>(
      this.names,
      this.colors
    );
  }

  createSVG() {
    this.svg = d3
      .select('#pie-container')
      .append('svg')
      .attr('width', '1000')
      .attr('height', '1000')
      .attr('viewBox', [-500, -500, 1000, 1000]);
  }
  createPie() {
    this.arcs = d3
      .pie()
      .padAngle(0)
      .sort(null)
      .value((index) => {
        if (typeof index === 'number') {
          return this.values[index];
        } else {
          return this.values[index.valueOf()];
        }
      })(this.range);
  }

  createSlices() {
    this.svg
      .append('g')
      .attr('stroke', 'black')
      .attr('stroke-width', 1)
      .attr('stroke-linejoin', 'round')
      .selectAll('path')
      .data(this.arcs)
      .join('path')
      .attr('fill', (_data, index) => {
        return this.colors[index];
      })
      .attr('d', (d: any) => {
        return this.arc(d);
      });
  }

  addNameTextToEachSlice() {
    this.svg
      .append('g')
      .attr('font-family', 'sans-serif')
      .attr('font-size', 30)
      .attr('text-anchor', 'middle')
      .selectAll('text')
      .data(this.arcs)
      .join('text')
      .attr('transform', (d: any) => {
        const [textXposition, textYposition] = this.arcLabel.centroid(d);
        return `translate(${[textXposition, textYposition - 20]})`;
      })
      .selectAll('tspan')
      .data((d, index) => {
        return `${this.pieChartData[index].name}`;
      })
      .join('tspan')
      /*
      .attr('x', 0)
      .attr('font-weight', (_, i) => (i ? null : 'bold'))
      */
      .text((d) => d);
  }
  addValueTextToEachSlice() {
    this.svg
      .append('g')
      .attr('font-family', 'sans-serif')
      .attr('font-size', 30)
      .attr('text-anchor', 'middle')
      .selectAll('text')
      .data(this.arcs)
      .join('text')
      .attr('transform', (d: any) => {
        const [xTextPosition, yTextPosition] = this.arcLabel.centroid(d);
        return `translate(${[xTextPosition, yTextPosition + 20]})`;
      })
      .selectAll('tspan')
      .data((d, index) => {
        return `${this.pieChartData[index].value} ${this.units}`;
      })
      .join('tspan')
      /*
      .attr('x', 0)
      .attr('y', (_, i) => `${i * 1.1}em`)
      .attr('font-weight', (_, i) => (i ? null : 'bold'))
      */
      .text((d) => d);
  }
  @Input() units: string;
  @Input() pieChartData: PieChartData;
  ngOnChanges() {
    this.initializeProperties();
    this.createSVG();
    this.createPie();
    this.createSlices();
    this.addNameTextToEachSlice();
    this.addValueTextToEachSlice();
  }
}
