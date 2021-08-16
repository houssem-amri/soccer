import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchService } from 'src/app/service/match.service';
import { searchById } from '../../../modules/searchById';

@Component({
	selector: 'app-add-match',
	templateUrl: './add-match.component.html',
	styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {
	// declaration d'une variable
	addMatchForm: FormGroup;
	match: any = {};
	id: any;
	title: String;
	imagePreview: String;

	constructor(
		private formBuilder: FormBuilder,
		private activatedRoute: ActivatedRoute,
		private matchService: MatchService,
		private router: Router
	) { }

	ngOnInit() {
		this.id = this.activatedRoute.snapshot.paramMap.get('id');
		if (this.id) {
			this.title = 'Edit';
			this.matchService.getMatchById(this.id).subscribe((data) => {
				console.log('here data', data.match);

				this.match = data.match;
			});
		} else {
			this.title = 'Add';
		}
		this.addMatchForm = this.formBuilder.group({
			teamOne: [''],
			teamTwo: [''],
			scoreOne: [''],
			scoreTwo: [''],
			image: ['']
		});
	}
	addEditMatch() {
		if (this.id) {
			this.matchService.updateMatch(this.match).subscribe((data) => {
				console.log(data.message);
			});
			this.router.navigate(['admin']);
		} else {
			this.matchService.addMatch(this.match, this.addMatchForm.value.image).subscribe((data) => {
				console.log(data.message);
			});
			this.router.navigate(['all-matches']);
		}
	}
	onImageSelected(event: Event) {
		const file = (event.target as HTMLInputElement).files[0];
		this.addMatchForm.patchValue({ image: file });
		this.addMatchForm.updateValueAndValidity();
		const reader = new FileReader();
		reader.onload = () => {
			this.imagePreview = reader.result as string;
		};
		reader.readAsDataURL(file);
	}
}
