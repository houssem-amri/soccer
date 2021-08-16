import { Component, OnInit } from '@angular/core';
import { SignupService } from 'src/app/service/signup.service';

@Component({
  selector: 'app-scrapting',
  templateUrl: './scrapting.component.html',
  styleUrls: ['./scrapting.component.css']
})
export class ScraptingComponent implements OnInit {

  constructor(private authService: SignupService) { }

  ngOnInit() {
    this.authService.getCheerioData().subscribe((res) => {
      console.log('here fetch data', res.result);

    })
  }

}
