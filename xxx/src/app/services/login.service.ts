import { Injectable } from '@angular/core';
import { Credentials } from '../models/credentials';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginStatus } from '../models/login-status';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public constructor(private httpClient: HttpClient) {}

  public isLoggedIn: boolean;
  public type: string;

  public userExists(credentials: Credentials): Observable<LoginStatus> {
    alert(credentials.name+" "+credentials.password+" "+credentials.type);
    return this.httpClient.post<LoginStatus>("http://localhost:8080/login", credentials, {withCredentials: true});
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
