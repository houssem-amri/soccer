import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-btn',
	templateUrl: './btn.component.html',
	styleUrls: [ './btn.component.css' ]
})
export class BtnComponent implements OnInit {
	@Input() obj: any;

	constructor() {}

	ngOnInit() {}
}
