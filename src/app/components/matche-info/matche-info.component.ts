import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchService } from 'src/app/service/match.service';
import { searchById } from '../../modules/searchById';

@Component({
	selector: 'app-matche-info',
	templateUrl: './matche-info.component.html',
	styleUrls: [ './matche-info.component.css' ]
})
export class MatcheInfoComponent implements OnInit {
	match: any;
	id: any;

	constructor(private activatedRoute: ActivatedRoute, private matchService: MatchService) {}

	ngOnInit() {
		this.id = this.activatedRoute.snapshot.paramMap.get('id');
		// this.match = searchById(this.id, 'matches');
		this.matchService.getMatchById(this.id).subscribe((data) => {
			this.match = data.match;
		});
	}
}
