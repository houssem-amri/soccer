import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { SignupService } from 'src/app/service/signup.service';
import { mustMatch } from '../../modules/mustMatch';
import { filter } from 'rxjs/operators';

@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html',
	styleUrls: [ './signup.component.css' ]
})
export class SignupComponent implements OnInit {
	signupForm: FormGroup;
	text: string = 'hello world';
	role: string;

	constructor(private formBuilder: FormBuilder, private signupService: SignupService, private router: Router) {
		this.router.events
			.pipe(filter((e) => e instanceof NavigationEnd))
			.subscribe((event) => this.postRoleToDb(event));
	}

	ngOnInit() {
		this.signupForm = this.formBuilder.group(
			{
				firstName: [ '', [ Validators.minLength(5), Validators.required ] ],
				lastName: [ '', [ Validators.minLength(3), Validators.required ] ],
				email: [ '', [ Validators.email, Validators.required ] ],
				pwd: [ '', Validators.required ],
				confirmPwd: [],
				role: [ this.role ]
			},
			{
				validator: mustMatch('pwd', 'confirmPwd')
			}
		);
	}
	postRoleToDb(location) {
		if (location.url === '/admin/signup') {
			this.role = 'admin';
		} else {
			this.role = 'user';
		}
	}
	signup(user) {
		this.signupService.addUser(user).subscribe((data) => {
			console.log(data.message);
		});
	}
}
