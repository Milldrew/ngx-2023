import { Directive, ElementRef } from '@angular/core';
import * as d3 from 'd3';
import { PieChartBaseDirective } from './pie-chart-base.directive';
const MOCK_DATA = [
  {
    name: 'A',
    value: 3,
  },
  {
    name: 'B',
    value: 5,
  },
  {
    name: 'C',
    value: 2,
  },
  {
    name: 'D',
    value: 8,
  },
  {
    name: 'E',
    value: 8,
  },
  {
    name: 'F',
    value: 8,
  },
  {
    name: 'G',
    value: 8,
  },
];
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
  selector: '[milldrewPieChart]',
})
export class PieChartDirective extends PieChartBaseDirective {}
