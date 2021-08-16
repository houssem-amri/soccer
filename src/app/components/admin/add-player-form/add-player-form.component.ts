import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from 'src/app/service/player.service';

@Component({
	selector: 'app-add-player-form',
	templateUrl: './add-player-form.component.html',
	styleUrls: [ './add-player-form.component.css' ]
})
export class AddPlayerFormComponent implements OnInit {
	addPlayerForm: FormGroup;
	player: any = {};
	id: any;
	title: string;

	constructor(
		private formBuiler: FormBuilder,
		private playerService: PlayerService,
		private router: Router,
		private activateRouter: ActivatedRoute
	) {}

	ngOnInit() {
		this.id = this.activateRouter.snapshot.paramMap.get('id');
		if (this.id) {
			this.title = 'Edit';
			this.playerService.getPlayerById(this.id).subscribe((data) => {
				this.player = data.player;
			});
		} else {
			this.title = 'Add';
		}

		this.addPlayerForm = this.formBuiler.group({
			playerName: [ '' ],
			playerAge: [ '' ],
			playerNumber: [ '' ],
			playerPoste: [ '' ]
		});
	}
	addEditPlayer() {
		if (this.id) {
			this.playerService.updatePlayer(this.player).subscribe((data) => {
				console.log(data.message);
			});
		} else {
			this.playerService.addPlayer(this.player).subscribe(() => {});
			this.router.navigate([ 'players' ]);
		}
	}
}
