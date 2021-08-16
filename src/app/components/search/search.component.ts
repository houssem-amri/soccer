import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatchService } from 'src/app/service/match.service';
import { SearchService } from 'src/app/service/search.service';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: [ './search.component.css' ]
})
export class SearchComponent implements OnInit {
	search: any = {};
	searchTeamName: FormGroup;
	result: any;
	constructor(private formBuilder: FormBuilder, private searchService: SearchService) {}

	ngOnInit() {
		this.searchTeamOne();
		this.searchTeamName = this.formBuilder.group({
			teamOne: [ '' ]
		});
	}

	searchTeamOne() {
		this.searchService.search(this.search).subscribe((data) => {
			this.result = data.match;
			console.log('finded match by team one', data.match);
		});
	}
}
