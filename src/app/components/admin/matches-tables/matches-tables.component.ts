import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/service/match.service';

@Component({
	selector: 'app-matches-tables',
	templateUrl: './matches-tables.component.html',
	styleUrls: [ './matches-tables.component.css' ]
})
export class MatchesTablesComponent implements OnInit {
	matches: any;
	constructor(private matchService: MatchService, private router: Router) {}

	ngOnInit() {
		this.getAllMatch();
	}
	deleteMatch(id) {
		this.matchService.deleteMatch(id).subscribe((data) => {
			console.log(data.message);

			this.getAllMatch();
		});
	}
	getAllMatch() {
		this.matchService.getAllMatches().subscribe((data) => {
			this.matches = data.matches;
		});
	}
	getMatchById(id: any) {
		this.router.navigate([ `display-match/${id}` ]);
	}
	goToEditMatch(id) {
		this.router.navigate([ `addEditMatch/${id}` ]);
	}
}
