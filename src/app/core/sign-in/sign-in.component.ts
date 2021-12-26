import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private routing: Router,
  ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.loginForm = new FormGroup(
      {
        email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$')]),
        password: new FormControl('', Validators.required)
      }
    );
  }

  // tslint:disable-next-line: typedef
  get formControls() {
    return this.loginForm.controls;
  }

  submitUserDetails(): void {
    console.log(this.formControls);
    if (!this.loginForm.valid) {
      console.log('Unsuccessful Login');
      return;
    }
    console.log('Login Successfully');
  }

  navigate(url: string): void {
    this.routing.navigate([`${url}`]);
  }

}
