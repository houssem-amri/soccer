import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-co2',
	templateUrl: './co2.component.html',
	styleUrls: [ './co2.component.css' ]
})
export class Co2Component implements OnInit {
	@Input() data: any;
	constructor() {}

	ngOnInit() {}
}
