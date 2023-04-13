import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import axios from 'axios';
import { login, signUp } from '../data';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationsService {

  isuserLoggedIn = new BehaviorSubject<boolean>(false);
  isLogginFailed: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private _http: HttpClient, private _router: Router) { }


  userSignUp(data: signUp) {
    if (!data.username || !data.email || !data.password) {
      alert('Please fill all the required fields')
      return
    }
     
    try{
     this._http.post<any>('http://10.8.10.81:3000/user/register',data,{ headers: { "Content-Type": "application/json" } }).subscribe(response=>{
     localStorage.setItem('user', JSON.stringify(response.data));
     this.isuserLoggedIn.next(true);
     console.log('SignUp successfully!');
     this._router.navigate(['/admin']);
     })
    }catch(error){
      console.log( 'Signup failed', error);
    }

  }

  userLogin(data: login) {
    if (!data.emailAddress || !data.password) {
      alert('Please fill all the required fields')
      return
    }
    try{
      console.log(data);
      this._http.post<any>('http://10.8.10.59:4000/users/login', data).subscribe(response => {
        const user = response
          // console.log(user);
          // console.log(response);
        
        if (user) {
          localStorage.setItem('user', JSON.stringify(response));
          console.log('User logged in succesfully')
          this.isuserLoggedIn.next(true);
          this.isLogginFailed.next(false);
          this._router.navigate(['./admin'])
        } else {
          this.isuserLoggedIn.next(false);
        }
      })
    }catch(error){
      console.log(error);
    }
   

  }

  reloadSeller() {
    if (localStorage.getItem('user')) {
      this.isuserLoggedIn.next(true);
      this._router.navigate(['./admin'])
    }
  }

  getCurrentUser(): any {
    const user = localStorage.getItem('user');

    if (user) {
      return JSON.parse(user);
    } else {
      return null;
    }
  }

}
