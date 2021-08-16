import { Component, OnInit } from '@angular/core';
import { SignupService } from 'src/app/service/signup.service';

@Component({
	selector: 'app-hero',
	templateUrl: './hero.component.html',
	styleUrls: [ './hero.component.css' ]
})
export class HeroComponent implements OnInit {
	weather: any;
	constructor(private authService: SignupService) {}

	ngOnInit() {
		this.authService.getweather().subscribe((data) => {
			console.log('here weather', data.weather);
			this.weather = data.weather;
		});
	}
}
