import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from 'src/app/service/signup.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit {
	loginForm: FormGroup;
	login: any = {};
	constructor(private formBuilder: FormBuilder, private router: Router, private userService: SignupService) {}

	ngOnInit() {
		this.loginForm = this.formBuilder.group({
			email: [ '' ],
			pwd: [ '' ]
		});
	}
	searchByEmailAndPwd(key) {
		var object = JSON.parse(localStorage.getItem(key) || '[]');
		var findedUser;
		for (let i = 0; i < object.length; i++) {
			if (object[i].email == this.login.email && object[i].pwd == this.login.pwd) {
				findedUser = object[i];
			}
		}
		return findedUser;
	}
	// validateLogin() {
	// 	var object = this.searchByEmailAndPwd('users');
	// 	if (object) {
	// 		this.router.navigate([ 'admin' ]);
	// 	} else {
	// 		alert('verif email or pwd');
	// 	}
	// }
	validateLogin() {
		this.userService.loginByEmailAndPwd(this.login);
	}
}
