import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PieChartBaseDirective } from '../pie-chart-base.directive';
import { PieChartDirective } from '../pie-chart.directive';

@NgModule({
  declarations: [PieChartBaseDirective, PieChartDirective],
  imports: [CommonModule],
  exports: [PieChartDirective, PieChartBaseDirective],
})
export class Milld3PieChartModule {}
