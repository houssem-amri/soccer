import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class DaattaService {
	matchUrl = 'http://localhost:3000/matches';
	constructor(private httpClient: HttpClient) {}
	getAllMatches() {
		// Action :Get , Address: api/matches
		this.httpClient.get<{ matches: any }>(this.matchUrl);
	}
	getSales() {
		return of({
			year1: {
				volumeSales: '1.09',
				valueSales: '1.23'
			},
			year2: {
				volumeSales: '0.11',
				valueSales: '1.56'
			},
			year3: {
				volumeSales: '0.12',
				valueSales: '1.69'
			},
			year4: {
				volumeSales: '0.12',
				valueSales: '1.64'
			},
			year5: {
				volumeSales: '0.10',
				valueSales: '1.41'
			},
			year6: {
				volumeSales: '0.10',
				valueSales: '1.41'
			},
			year7: {
				volumeSales: '0.10',
				valueSales: '1.41'
			},
			year8: {
				volumeSales: '0.10',
				valueSales: '1.41'
			},
			year9: {
				volumeSales: '0.10',
				valueSales: '1.41'
			},
			year10: {
				volumeSales: '0.10',
				valueSales: '1.41'
			},
			year11: {
				volumeSales: '0.10',
				valueSales: '1.41'
			},
			total: {
				volumeSales: '0.55',
				valueSales: '0.53'
			}
		});
	}
}
