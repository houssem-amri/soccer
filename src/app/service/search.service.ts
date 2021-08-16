import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class SearchService {
	searchUrl = 'http://localhost:3000/matches/search';
	constructor(private httpClient: HttpClient) {}
	search(search: any) {
		return this.httpClient.post<{ match: any }>(this.searchUrl, search);
	}
}
