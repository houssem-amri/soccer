import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/service/match.service';

@Component({
	selector: 'app-matches',
	templateUrl: './matches.component.html',
	styleUrls: [ './matches.component.css' ]
})
export class MatchesComponent implements OnInit {
	matches: any;
	term: string;
	// currentItem = { name: '' };
	constructor(private matchService: MatchService) {}

	ngOnInit() {
		// this.matches = JSON.parse(localStorage.getItem('matches') || '[]');
		this.matchService.getAllMatches().subscribe((data) => {
			this.matches = data.matches;
		});
	}

	generatePDF() {
		this.matchService.getAllMatchesPdf().subscribe((data) => {
			console.log('Here message from PDF generator', data.message);
		});
	}
	// click() {
	// 	alert('click');
	// }
	// change() {
	// 	alert('change');
	// }
	// keyup(e) {
	// 	alert(e.target.value);
	// }
	// clickme($event) {
	// 	const evtMsg = $event.target.textContent;
	// 	alert(evtMsg);
	// }
	// getValue($event) {
	// 	return $event.target.value;
	// }
	update(x) {
		this.matches = x;
	}
}
