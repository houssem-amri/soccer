import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/service/player.service';

@Component({
	selector: 'app-players-table',
	templateUrl: './players-table.component.html',
	styleUrls: [ './players-table.component.css' ]
})
export class PlayersTableComponent implements OnInit {
	players: any;
	constructor(private playerService: PlayerService, private router: Router) {}

	ngOnInit() {
		this.getAllPlayer();
	}
	deletePlayer(id) {
		this.playerService.deletePlayer(id).subscribe((data) => {
			console.log(data.message);

			this.getAllPlayer();
		});
	}
	getAllPlayer() {
		this.playerService.getAllPlayers().subscribe((data) => {
			this.players = data.players;
		});
	}
	gotoEdit(id) {
		this.router.navigate([ `Edit-player/${id}` ]);
	}
}
