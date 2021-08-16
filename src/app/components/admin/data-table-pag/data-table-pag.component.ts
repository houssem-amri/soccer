import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
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
	selector: 'app-data-table-pag',
	templateUrl: './data-table-pag.component.html',
	styleUrls: [ './data-table-pag.component.css' ]
})
export class DataTablePagComponent implements OnInit {
	// displayedColumns: string[] = [ 'position', 'name', 'weight', 'symbol' ];
	// dataSource;
	// user;

	// users: User[];
	// @ViewChild(MatPaginator, { static: false })
	// paginator: MatPaginator;
	displayedColumns = [ 'id', 'name', 'progress', 'color' ];
	dataSource;
	user;

	users: User[];

	@ViewChild(MatPaginator, { static: true })
	paginator: MatPaginator;
	@ViewChild(MatSort, { static: true })
	sort: MatSort;
	constructor(private SignupService: SignupService) {
		// const users: User[] = [];
		// for (let i = 1; i <= 100; i++) {
		// 	users.push(createNewUser(i));
		// }
		// // Assign the data to the data source for the table to render
		// this.dataSource = new MatTableDataSource(users);
	}

	ngOnInit() {
		this.SignupService.getTableDataUser().subscribe((data) => {
			this.users = data.users;
			this.dataSource = new MatTableDataSource(this.users);
			this.dataSource.sort = this.sort;
			this.dataSource.paginator = this.paginator;
		});
	}
	// ngAfterViewInit() {
	// 	this.dataSource.paginator = this.paginator;
	// 	this.dataSource.sort = this.sort;
	// }

	applyFilter(filterValue: string) {
		filterValue = filterValue.trim(); // Remove whitespace
		filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
		this.dataSource.filter = filterValue;
	}
}
