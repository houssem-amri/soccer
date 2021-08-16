import { Component, OnInit } from '@angular/core';
import { AdItem } from './ad-item';
import { AdService } from './ad.service';

@Component({
	selector: 'app-boss',
	templateUrl: './boss.component.html',
	styleUrls: [ './boss.component.css' ]
})
export class BossComponent implements OnInit {
	ads: AdItem[];

	constructor(private adService: AdService) {}

	ngOnInit() {
		this.ads = this.adService.getAds();
	}
}
