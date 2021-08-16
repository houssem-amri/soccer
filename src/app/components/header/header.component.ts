import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SignupService } from 'src/app/service/signup.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: [ './header.component.css' ]
})
export class HeaderComponent implements OnInit {
	userIsAuthenticated = false;
	private authListenerSubs: Subscription;
	constructor(private authService: SignupService) {}

	ngOnInit() {
		this.userIsAuthenticated = this.authService.isUserAuth();
		this.authListenerSubs = this.authService.getAuthStatusListener().subscribe((isAuthenticated) => {
			this.userIsAuthenticated = isAuthenticated;
		});
	}
	ngOnDestroy() {
		this.authListenerSubs.unsubscribe();
	}
	logout() {
		this.authService.logout();
	}
}
