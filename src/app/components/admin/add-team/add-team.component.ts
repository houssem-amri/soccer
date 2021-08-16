import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from 'src/app/service/team.service';

@Component({
	selector: 'app-add-team',
	templateUrl: './add-team.component.html',
	styleUrls: [ './add-team.component.css' ]
})
export class AddTeamComponent implements OnInit {
	addTeamForm: FormGroup;
	team: any = {};
	id: any;
	title: string;

	constructor(
		private formBuilder: FormBuilder,
		private activateRouter: ActivatedRoute,
		private teamService: TeamService
	) {}

	ngOnInit() {
		this.id = this.activateRouter.snapshot.paramMap.get('id');
		if (this.id) {
			this.title = 'Edit';
			this.teamService.getTeamById(this.id).subscribe((data) => {
				this.team = data.team;
			});
		} else {
			this.title = 'Add';
		}
		this.addTeamForm = this.formBuilder.group({
			teamName: [ '' ],
			teamFoundation: [ '' ],
			teamStadium: [ '' ]
		});
	}
	addEditTeam() {
		if (this.id) {
			this.teamService.updateTeam(this.team).subscribe((data) => {
				console.log(data.message);
			});
		} else {
			this.teamService.addTeam(this.team).subscribe((data) => {
				console.log(data.message);
			});
		}
	}
}
