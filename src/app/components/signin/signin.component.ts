import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SignupService } from 'src/app/service/signup.service';

@Component({
	selector: 'app-signin',
	templateUrl: './signin.component.html',
	styleUrls: [ './signin.component.css' ]
})
export class SigninComponent implements OnInit {
	signinForm: FormGroup;
	constructor(private formBuilder: FormBuilder, private signupService: SignupService) {}

	ngOnInit() {
		this.signinForm = this.formBuilder.group({
			email: [ '' ],
			pwd: [ '' ]
		});
	}
	Signin(user) {
		this.signupService.loginByEmailAndPwd(user);
	}
}
