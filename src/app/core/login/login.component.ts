import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '@app/_services/authentication.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  hide = true;

  constructor(
    private routing: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      // this.router.navigate(['/']);
      console.log('User is logged in');
    }
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    // [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$')]
    this.loginForm = new FormGroup(
      {
        email: new FormControl('', Validators.required),
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
    if (this.loginForm.invalid) {
      console.log('Unsuccessful Login');
      return;
    }

    this.loading = true;
    this.authenticationService.login(this.formControls.email.value, this.formControls.password.value)
      .pipe(first())
      .subscribe(
        data => {
          // this.router.navigate([this.returnUrl]);
          console.log('Login Successfully');
        },
        error => {
          this.error = error;
          this.loading = false;
          console.log(error);
        });
  }

  navigate(url: string): void {
    this.routing.navigate([`${url}`]);
  }

}
