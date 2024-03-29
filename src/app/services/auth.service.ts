import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import IUser from '../models/user.model';
import { Observable, delay, map } from 'rxjs';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userCollection: AngularFirestoreCollection<IUser>;
  public isAuthenticated$: Observable<boolean>;
  public isAuthenticatedWithDelay$: Observable<boolean>;

  constructor(
    private auth: AngularFireAuth,
    private db: AngularFirestore,
    public router: Router,
    private route: ActivatedRoute
  ) {
    this.userCollection = db.collection('users');
    this.isAuthenticated$ = auth.user.pipe(
      //user arg into a boolean value
      map(user => !!user)
    );

    this.isAuthenticatedWithDelay$ = this.isAuthenticated$.pipe(delay(1000));
    this.route.data.subscribe(console.log);
  }

  public async createUser (userData: IUser) {
    if (!userData.password) {
      throw new Error("Password not provided!")
    }

    if (!userData.email) {
      throw new Error("Email not provided!")
    }

    const userCred = await this.auth.createUserWithEmailAndPassword(userData.email, userData.password);
    if (!userCred.user) {
      throw new Error("User can't be found!")
    }
    await this.userCollection.doc(userCred.user.uid).set({
      name: userData.name,
      email: userData.email,
      age: userData.age,
      phoneNumber: userData.phoneNumber
    });

    userCred.user.updateProfile({
      displayName: userData.name
    })
  }

  public async logout($event?: Event) {
    if ($event) {
      $event.preventDefault();
    }
    await this.auth.signOut();
    await this.router.navigateByUrl('/');
  }
}
