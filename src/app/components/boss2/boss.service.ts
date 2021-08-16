import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from './ad-item';
import { Co1Component } from './co1/co1.component';
import { Co2Component } from './co2/co2.component';
import { Co3Component } from './co3/co3.component';
import { Co4Component } from './co4/co4.component';

@Injectable({
	providedIn: 'root'
})
export class BossService {
	constructor(private httpClient: HttpClient) {}
	getItem() {
		return {
			1: new Item(Co1Component, Co3Component, { name: 'hello' }),

			2: new Item(Co2Component, Co4Component, { name: 'hello 2' })
		};
	}
}
