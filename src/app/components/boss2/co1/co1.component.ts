import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-co1',
	templateUrl: './co1.component.html',
	styleUrls: [ './co1.component.css' ]
})
export class Co1Component implements OnInit {
	@Input() data: any;
	constructor() {}

	ngOnInit() {}
}
