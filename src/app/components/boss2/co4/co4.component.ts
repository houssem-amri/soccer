import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-co4',
	templateUrl: './co4.component.html',
	styleUrls: [ './co4.component.css' ]
})
export class Co4Component implements OnInit {
	@Input() data: any;
	constructor() {}

	ngOnInit() {}
}
