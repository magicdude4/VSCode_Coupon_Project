import { Injectable } from '@angular/core';
import { Credentials } from '../models/credentials';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginStatus } from '../models/login-status';
import { Component, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public constructor(private httpClient: HttpClient) {}
  
  public isLoggedIn: boolean;
  public type: string;
  private SERVER_URL = "http://localhost:8080";

  //JSON.stringify(credentials)
  
  public userExists(credentials: Credentials): Observable<LoginStatus> {
   // const params = new HttpParams()
   // .set('name', credentials.name) 
   // .set('password', credentials.password)
   // .set('type', credentials.type);
   //const data = {'type': credentials.type, 'name': credentials.name, 'password': credentials.password};
    alert({credentials});
    return this.httpClient.post<LoginStatus>(`${this.SERVER_URL}/login`, credentials, {withCredentials: true});
  }

   public userExistsDemo(credentials: Credentials): boolean {
     if(credentials.type === credentials.type && credentials.name === credentials.name && credentials.password === credentials.password) {
      this.isLoggedIn = true;
      this.type = credentials.type; 
      alert(credentials);
      return true;
      }
    return false; 
    }

    public logout(): void {
      this.type = "";
      this.isLoggedIn = false;
    }
}
