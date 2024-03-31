import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private uid?: string;
  public isAuthenticated:boolean=false
  constructor(private roter: Router) {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.uid = user.uid;
        this.isAuthenticated=true
        console.log(`User Login as ${user.email}`);
      } else {
        this.uid = undefined;
        console.log('User Logout');
      }
    });
  }

  registerUser(email: string, password: string) {
    console.log(email, password);

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        this.roter.navigate(['/']);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }

  loginUser(email: string, password: string) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        this.roter.navigate(['/']);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }

  logOut() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        this.roter.navigate(['/login']);
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  }
  getUid(){
    return this.uid
  }
}
