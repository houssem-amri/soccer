import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {} from 'events';
import { MatchService } from 'src/app/service/match.service';

@Component({
	selector: 'app-match',
	templateUrl: './match.component.html',
	styleUrls: [ './match.component.css' ]
})
export class MatchComponent implements OnInit {
	@Input() m: any;
	@Input() showBtn: string;
	displayBtn = true;
	result: string;
	@Output() newMatches: EventEmitter<any> = new EventEmitter();

	constructor(private router: Router, private matchService: MatchService) {}

	ngOnInit() {
		// this.modifyBtn();
	}
	goToInfo(x) {
		this.router.navigate([ `info/${x}` ]);
	}
	goToEditMatch(id) {
		this.router.navigate([ `addEditMatch/${id}` ]);
	}
	// modifyBtn() {
	// 	if (this.showBtn === 'yes') {
	// 		this.displayBtn = true;
	// 	} else {
	// 		this.displayBtn = false;
	// 	}
	// }
	compare(a: any, b: any) {
		if (a > b) {
			return [ 'green', 'win' ];
		}
		if (a < b) {
			return [ 'yellow', 'LOSS' ];
		} else {
			return [ 'blue', 'Draw' ];
		}
	}
	delete(id) {
		this.matchService.deleteMatch(id).subscribe((data) => {
			console.log(data.message);
			this.matchService.getAllMatches().subscribe((data) => {
				this.newMatches.emit(data.matches);
			});
		});
	}
}
