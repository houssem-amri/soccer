import { Component, OnInit } from '@angular/core';
import { ApexEventService } from 'src/app/service/apex-event.service';
import { MatchService } from 'src/app/service/match.service';
// import { ChartDB } from './chart-data';
export class ChartDB {
	public static line1CAC = {
		chart: {
			height: 300,
			type: 'line',
			zoom: {
				enabled: false
			}
		},
		dataLabels: {
			enabled: false,
			width: 2
		},
		stroke: {
			curve: 'straight'
		},
		colors: [ '#4680ff' ],
		series: [
			{
				name: 'BUT',
				data: []
				// data: [ 10, 41, 35, 51, 49, 62, 69, 91, 90 ]
			}
		],
		title: {
			text: 'Product Trends by Month',
			align: 'left'
		},
		grid: {
			row: {
				colors: [ '#f3f6ff', 'transparent' ], // takes an array which will be repeated on columns
				opacity: 0.5
			}
		},
		xaxis: {
			categories: []
			// categories: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep' ]
		}
	};
}
@Component({
	selector: 'app-apex-chart',
	templateUrl: './apex-chart.component.html',
	styleUrls: [ './apex-chart.component.css' ]
})
export class ApexChartComponent implements OnInit {
	public chartDB: any;
	public matches: any;
	constructor(public apexEvent: ApexEventService, private matchService: MatchService) {
		this.chartDB = ChartDB;
	}

	ngOnInit() {
		this.matchService.getAllMatches().subscribe((res) => {
			this.matches = res.matches;
			for (let idx = 0; idx < this.matches.length; idx++) {
				// console.log('this.chartData[idx].teamOne', this.matches[idx].scoreOne);
				this.chartDB.line1CAC.xaxis.categories.push(this.matches[idx].teamOne);
				this.chartDB.line1CAC.series[0].data.push(this.matches[idx].scoreOne);
			}
			// console.log('here teamone', res.matches.teamOne);
			// this.chartDB.line1CAC.xaxis.categories = this.matches.teamOne;
			console.log('here chart db ', this.chartDB.line1CAC.xaxis.categories);
			console.log('here serie chart db ', this.chartDB.line1CAC.series[0].data);
		});
	}
}
