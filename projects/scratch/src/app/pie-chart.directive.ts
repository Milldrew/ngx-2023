import { Directive, Input, OnChanges } from '@angular/core';
import { PieChartBaseDirective } from './pie-chart-base.directive';

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
export class PieChartDirective extends PieChartBaseDirective {
  constructor() {
    super();
  }
  ngOnInit() {
    this.initializeProperties();
    this.createSVG();
    this.createPie();
    this.createSlices();
    this.addNameTextToEachSlice();
    this.addValueTextToEachSlice();
  }
}
