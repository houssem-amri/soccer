import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchService } from 'src/app/service/match.service';

@Component({
	selector: 'app-display-match',
	templateUrl: './display-match.component.html',
	styleUrls: [ './display-match.component.css' ]
})
export class DisplayMatchComponent implements OnInit {
	match: any;
	id: any;

	constructor(private activatedRoute: ActivatedRoute, private serviceMatch: MatchService) {}

	ngOnInit() {
		this.id = this.activatedRoute.snapshot.paramMap.get('id');
		this.serviceMatch.getMatchById(this.id).subscribe((data) => {
			this.match = data.match;
		});
	}
}
