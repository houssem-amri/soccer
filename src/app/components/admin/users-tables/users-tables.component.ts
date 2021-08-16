import { Component, OnInit } from '@angular/core';
import { SignupService } from 'src/app/service/signup.service';

@Component({
	selector: 'app-users-tables',
	templateUrl: './users-tables.component.html',
	styleUrls: [ './users-tables.component.css' ]
})
export class UsersTablesComponent implements OnInit {
	users: any;
	constructor(private userService: SignupService) {}

	ngOnInit() {
		this.getAllUsers();
	}
	getAllUsers() {
		this.userService.getAllUser().subscribe((data) => {
			this.users = data.users;
		});
	}
}
