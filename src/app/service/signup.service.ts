import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { User } from '../../../backend/models/user';

@Injectable({
	providedIn: 'root'
})
export class SignupService {
	userUrl = 'http://localhost:3000/api/users';
	private authStatusListener = new Subject<boolean>();
	private isUserAuthenticated = false;
	constructor(private httpClient: HttpClient, private router: Router) { }
	addUser(user) {
		return this.httpClient.post<{ message: string }>(`${this.userUrl}/signup`, user);
	}
	loginByEmailAndPwd(user) {
		return this.httpClient.post<{ user: any }>(`${this.userUrl}/signin`, user).subscribe((res) => {
			console.log(res);
			console.log(res.user);
			if (res.user.role == 'user') {
				this.router.navigate(['/']);
			} else {
				this.router.navigate(['admin']);
			}
			this.isUserAuthenticated = true;
			this.authStatusListener.next(true);
		});
	}
	getAllUser() {
		return this.httpClient.get<{ users: any }>(this.userUrl);
	}
	getAuthStatusListener() {
		return this.authStatusListener.asObservable();
	}
	isUserAuth() {
		return this.isUserAuthenticated;
	}

	logout() {
		this.isUserAuthenticated = false;
		this.authStatusListener.next(false);
		this.router.navigate(['/']);
	}
	getweather() {
		return this.httpClient.get<{ weather: any }>(`${this.userUrl}/weather`);
	}
	getTableDataUser() {
		return this.httpClient.get<{ users: any }>(this.userUrl);
	}
	getCheerioData() {
		return this.httpClient.get<{ result: any }>(`${this.userUrl}/fetchData`);
	}
}
