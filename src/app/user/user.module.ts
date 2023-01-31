import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthMadalComponent } from './auth-madal/auth-madal.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AuthMadalComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    AuthMadalComponent
  ]
})
export class UserModule { }
