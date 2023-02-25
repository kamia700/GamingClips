import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthMadalComponent } from './auth-madal/auth-madal.component';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AuthMadalComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
    AuthMadalComponent
  ]
})
export class UserModule { }
