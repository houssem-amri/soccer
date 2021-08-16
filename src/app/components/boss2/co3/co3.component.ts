import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-co3',
	templateUrl: './co3.component.html',
	styleUrls: [ './co3.component.css' ]
})
export class Co3Component implements OnInit {
	@Input() data: any;
	constructor() {}

	ngOnInit() {}
}
