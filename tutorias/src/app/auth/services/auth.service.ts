import { Injectable } from '@angular/core';
// @ts-ignore
import {User} from 'firebase';
import {AngularFireAuth} from '@angular/fire/auth';
import {first} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: User;
  constructor(public afAuth: AngularFireAuth) { }

  // tslint:disable-next-line:typedef
  async login(email: string, password: string) {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(
        email,
        password
      );
      return result;
    }
    catch (e) {
      console.log(e);
    }
  }

  // tslint:disable-next-line:typedef
  async register(email: string, password: string){
    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      return result;
    }
    catch (e) {
      console.log(e);
    }
}
// tslint:disable-next-line:typedef
async logout(){
    try {
      await this.afAuth.signOut();
    }
    catch (e) {
      console.log(e);
    }
}
// tslint:disable-next-line:typedef
getCurrentUser(){
    return this.afAuth.authState.pipe(first()).toPromise();
}

}
