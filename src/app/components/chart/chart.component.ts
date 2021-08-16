import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import * as io from 'socket.io-client';
import { MatchService } from 'src/app/service/match.service';
import { Chart } from '../../models/Chart';

@Component({
	selector: 'app-chart',
	templateUrl: './chart.component.html',
	styleUrls: [ './chart.component.css' ]
})
export class ChartComponent implements OnInit {
	// socket = io('http://localhost:3000');
	chartData: Chart[] = [];

	public pieChartOptions: ChartOptions = {
		responsive: true,
		legend: {
			position: 'top'
		},
		plugins: {
			datalabels: {
				formatter: (value, ctx) => {
					const label = ctx.chart.data.labels[ctx.dataIndex];
					return label;
				}
			}
		}
	};
	public pieChartLabels: Label[] = [];
	public pieChartData: number[] = [];
	public pieChartType: ChartType = 'pie';
	public pieChartLegend = true;
	public pieChartPlugins = [ pluginDataLabels ];
	public pieChartColors = [];
	constructor(private api: MatchService) {}

	ngOnInit() {
		this.getChartData();
		// this.socket.on(
		// 	'update-data',
		// 	function(data: any) {
		// 		this.getSales();
		// 	}.bind(this)
		// );
	}
	getChartData() {
		this.api.getChart().subscribe(
			(res: any) => {
				console.log('here res chart', res);
				this.chartData = res.matches;
				this.pieChartLabels = [];
				this.pieChartData = [];
				this.pieChartColors = [];
				const backgrounds = [];
				this.chartData.forEach((ch, idx) => {
					this.pieChartLabels.push(ch.teamOne);
					this.pieChartData.push(ch.scoreOne);
					backgrounds.push(`rgba(${0 + idx * 10}, ${255 - idx * 20}, ${0 + idx * 10}, 0.3)`);
				});

				// for (let idx = 0; idx < this.chartData.length; idx++) {
				// 	console.log('this.chartData[idx].teamOne', this.chartData[idx].teamOne);
				// 	console.log('this.chartData[idx].scoreOne', this.chartData[idx].scoreOne);

				// 	this.pieChartLabels.push(this.chartData[idx].teamOne);
				// 	this.pieChartData.push(this.chartData[idx].scoreOne);
				// 	backgrounds.push(`rgba(${0 + idx * 10}, ${255 - idx * 20}, ${0 + idx * 10}, 0.3)`);
				// }
				console.log('final array', this.pieChartLabels);
				console.log('final array', this.pieChartData);

				this.pieChartColors = [
					{
						backgroundColor: backgrounds
					}
				];
			},
			(err) => {
				console.log(err);
			}
		);
	}
}
