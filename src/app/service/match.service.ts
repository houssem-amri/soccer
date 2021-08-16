import { formatDate } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Chart } from './../models/Chart';

@Injectable({
	providedIn: 'root'
})
export class MatchService {
	matchUrl = 'http://localhost:3000/matches';
	private handleError<T>(operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {
			console.error(error);
			return of(result as T);
		};
	}
	constructor(private httpClient: HttpClient) {}
	getAllMatches() {
		// Action :Get , Address: api/matches
		return this.httpClient.get<{ matches: any }>(this.matchUrl);
	}
	addMatch(match: any, image: File) {
		const formdata = new FormData();
		formdata.append('scoreOne', match.scoreOne);
		formdata.append('scoreTwo', match.scoreTwo);
		formdata.append('teamOne', match.teamOne);
		formdata.append('teamTwo', match.teamTwo);
		formdata.append('image', image);

		return this.httpClient.post<{ message: string }>(this.matchUrl, formdata);
	}
	deleteMatch(id: any) {
		return this.httpClient.delete<{ message: string }>(`${this.matchUrl}/${id}`);
	}
	getMatchById(id: any) {
		return this.httpClient.get<{ match: any }>(`${this.matchUrl}/${id}`);
	}
	updateMatch(match: any) {
		return this.httpClient.put<{ message: string }>(`${this.matchUrl}/${match._id}`, match);
	}
	searchMatch() {
		return this.httpClient.get<{ match: any }>(this.matchUrl);
	}
	getAllMatchesPdf() {
		// Action :Get , Address: api/matches
		return this.httpClient.get<{ message: string }>(`${this.matchUrl}/ali/pdfs`);
	}
	getChart(): Observable<Chart> {
		const url = `${this.matchUrl}`;
		return this.httpClient
			.get<Chart>(url)
			.pipe(tap((_) => console.log(`fetched chart data`)), catchError(this.handleError<Chart>(`getChart data`)));
	}
}
