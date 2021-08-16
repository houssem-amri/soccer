import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/service/team.service';

@Component({
	selector: 'app-teams-table',
	templateUrl: './teams-table.component.html',
	styleUrls: [ './teams-table.component.css' ]
})
export class TeamsTableComponent implements OnInit {
	teams: any;
	constructor(private teamService: TeamService, private router: Router) {}

	ngOnInit() {
		this.getAllTeam();
	}
	getAllTeam() {
		this.teamService.getAllTeams().subscribe((data) => {
			this.teams = data.result;
		});
	}
	deleteTeam(id) {
		this.teamService.deleteTeam(id).subscribe((data) => {
			console.log(data.message);

			this.getAllTeam();
		});
	}
	gotoEdit(id) {
		this.router.navigate([ `Edit-team/${id}` ]);
	}
	goToDisplay(id) {
		this.router.navigate([ `display-team/${id}` ]);
	}
}
