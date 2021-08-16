import { Injectable } from '@angular/core';
import { AdItem } from './ad-item';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';

@Injectable({
	providedIn: 'root'
})
export class AdService {
	getAds() {
		return [
			new AdItem(C2Component, { name: 'Bombasto', bio: 'Brave as they come' }),

			new AdItem(C2Component, { name: 'Dr IQ', bio: 'Smart as they come' }),

			new AdItem(C1Component, {
				headline: 'Hiring for several positions',
				body: 'Submit your resume today!'
			}),

			new AdItem(C1Component, {
				headline: 'Openings in all departments',
				body: 'Apply today'
			})
		];
	}
}
