import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class TeamService {
	teamUrl = 'http://localhost:3000/teams';
	constructor(private httpClient: HttpClient) {}
	getAllTeams() {
		return this.httpClient.get<{ result: any }>(`${this.teamUrl}/api/soccer/teams`);
	}
	addTeam(team: any) {
		return this.httpClient.post<{ message: string }>(this.teamUrl, team);
	}
	deleteTeam(id: any) {
		return this.httpClient.delete<{ message: string }>(`${this.teamUrl}/${id}`);
	}
	getTeamById(id: any) {
		return this.httpClient.get<{ team: any }>(`${this.teamUrl}/${id}`);
	}
	updateTeam(team: any) {
		return this.httpClient.put<{ message: string }>(`${this.teamUrl}/${team._id}`, team);
	}
}
