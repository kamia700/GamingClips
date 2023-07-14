import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Injectable } from "@angular/core";
import { AsyncValidator, AbstractControl, ValidationErrors } from "@angular/forms";
// By default classes cannot be injected with services. On the other hand Angular will automatically add dependency injection support for a component.
// If we're creating a plain JavaScript class, we need to manually inform Angular that we need dependency injection.
// We can add dependency injection support by decorating the class with the injectable decorator

@Injectable({
  providedIn: 'root'
})

export class EmailTaken implements AsyncValidator {
  //inject the service as a private property called auth
  constructor(private auth: AngularFireAuth) {}

  validate = (control: AbstractControl): Promise<ValidationErrors | null> => {
    return this.auth.fetchSignInMethodsForEmail(control.value).then(
      response => response.length ? {emailTaken: true} : null
    )
  }
}
