import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-add-player',
	templateUrl: './add-player.component.html',
	styleUrls: [ './add-player.component.css' ]
})
export class AddPlayerComponent implements OnInit {
	title: string;
	id: any;
	constructor(private activateRouter: ActivatedRoute) {}

	ngOnInit() {
		this.id = this.activateRouter.snapshot.paramMap.get('id');
		if (this.id) {
			this.title = 'Edit';
		} else {
			this.title = 'Add';
		}
	}
}
