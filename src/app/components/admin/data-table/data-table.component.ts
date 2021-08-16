import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { DaattaService } from 'src/app/service/daatta.service';
import { SignupService } from 'src/app/service/signup.service';
export interface User {
	firstName: String;
	lastName: String;
	email: String;
	pwd: String;
	confirmPwd: String;
	role: String;
}

@Component({
	selector: 'app-data-table',
	templateUrl: './data-table.component.html',
	styleUrls: [ './data-table.component.css' ]
})
export class DataTableComponent implements OnInit {
	displayedColumns: string[] = [ 'name', 'email', 'phone', 'website' ];
	dataSource;
	user;

	users: User[];

	@ViewChild(MatSort, { static: true })
	sort: MatSort;
	// options = {};
	// data = [];
	// columns: any = {};

	constructor(private appService: DaattaService, private SignupService: SignupService) {}

	ngOnInit() {
		// this.data = this.appService.getData();
		// this.columns = [
		// 	{ key: 'id', title: 'ID' },
		// 	{ key: 'name', title: 'Name' },
		// 	{ key: 'phone', title: 'Phone' },
		// 	{ key: 'company', title: 'Company' },
		// 	{ key: 'date', title: 'Date' },
		// 	{ key: 'phone', title: 'Phone' }
		// ];
		this.SignupService.getTableDataUser().subscribe((data) => {
			this.users = data.users;
			this.dataSource = new MatTableDataSource(data.users);
			this.dataSource.sort = this.sort;
		});
	}
}
