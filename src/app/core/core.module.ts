import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../material/material.module';
import { SignInComponent } from './sign-in/sign-in.component';



@NgModule({
  declarations: [
    LoginComponent,
    SignInComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    LoginComponent,
    SignInComponent,
  ]
})
export class CoreModule { }
