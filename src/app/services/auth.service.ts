import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth
  ) { }

  login(email: string, password: string) {
    return new Promise((res, rej) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then(data => res(data))
        .catch(err => rej(err));
    });
  }

  checkAuth() {
    return this.afAuth.authState.map(auth => auth);
  }

  logOut() {
    return this.afAuth.auth.signOut();
  }
}
