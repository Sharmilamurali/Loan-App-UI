import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {

  }
  ProceedLogin(inputdata: any) {
    return this.http.post('http://localhost:8080/loan/authenticate', inputdata);
  }

  IsLoogedIn() {
    return localStorage.getItem('token') != null;
  }

  GetToken() {
    return localStorage.getItem('token') != null ? localStorage.getItem('token') : '';
  }

  GetRole() {
    var token = localStorage.getItem('token');
    if (token != null) {
      var extractdata = token.split('.')[1];
      var atobdata = atob(extractdata);
      var finaldata = JSON.parse(atobdata);
      if (finaldata.role == '[Admin]') {
        return true;
      } else {
        return false;
      }
    } else {
      return '';
    }
  }

}
