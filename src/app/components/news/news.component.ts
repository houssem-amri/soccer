import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-news',
	templateUrl: './news.component.html',
	styleUrls: [ './news.component.css' ]
})
export class NewsComponent implements OnInit {
	news: any;
	constructor() {}

	ngOnInit() {
		this.news = [
			{ id: 1, descrption: 'dfghjk1', info: 'gfhjk', date: 'ghjkl', image: 'assets/images/img_1.jpg' },
			{ id: 2, descrption: 'dfghjk2', info: 'gfhjk', date: 'ghjkl', image: 'assets/images/img_1.jpg' },
			{ id: 3, descrption: 'dfghj3', info: 'gfhjk', date: 'ghjkl', image: 'assets/images/img_1.jpg' },
			{ id: 4, descrption: 'dfghjk4', info: 'gfhjk', date: 'ghjkl', image: 'assets/images/img_1.jpg' },
			{ id: 5, descrption: 'dfghjk5', info: 'gfhjk', date: 'ghjkl', image: 'assets/images/person_1.jpg' }
		];
	}
}
