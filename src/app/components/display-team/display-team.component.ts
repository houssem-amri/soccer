import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from 'src/app/service/team.service';

@Component({
	selector: 'app-display-team',
	templateUrl: './display-team.component.html',
	styleUrls: [ './display-team.component.css' ]
})
export class DisplayTeamComponent implements OnInit {
	team: any;
	id: any;
	constructor(private activatedRoute: ActivatedRoute, private teamService: TeamService) {}

	ngOnInit() {
		this.id = this.activatedRoute.snapshot.paramMap.get('id');
		this.teamService.getTeamById(this.id).subscribe((data) => {
			this.team = data.team;
		});
	}
}
