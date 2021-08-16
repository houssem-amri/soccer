import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/service/team.service';

@Component({
	selector: 'app-teams',
	templateUrl: './teams.component.html',
	styleUrls: [ './teams.component.css' ]
})
export class TeamsComponent implements OnInit {
	items = [];
	pageOfItems: Array<any>;
	teams: any;
	constructor(private teamService: TeamService) {}

	ngOnInit() {
		this.teamService.getAllTeams().subscribe((data) => {
			console.log('here teams api', data.result);
			this.teams = data.result;
		});
	}
	onChangePage(pageOfItems: Array<any>) {
		// update current page of items
		this.pageOfItems = pageOfItems;
	}
}
