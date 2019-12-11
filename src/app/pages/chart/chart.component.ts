import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import {ApiService} from '../../core/http/api.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  public movies: any;
  public loading: boolean;

  // Pie chart
  public pieChartLabels: Label[] = [];
  public pieChartData: SingleDataSet = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };

  constructor(public api: ApiService) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit() {
    this.loading = true;
    this.api.getTopMovies()
      .subscribe(movies => {
        const years = _.map(movies, movie => movie.year);
        const gropedYears = _.groupBy(years, year => year.slice(0, -1));
        this.pieChartLabels = _.map(_.keys(gropedYears),  year => year + 'x');
        this.pieChartData = _.map(_.values(gropedYears), yearsArr => yearsArr.length);
        this.loading = false;
      });
  }
}
