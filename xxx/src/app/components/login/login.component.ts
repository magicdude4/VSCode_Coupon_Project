import { Component, OnInit } from '@angular/core';
import { Credentials } from 'src/app/models/credentials';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { LoginStatus } from 'src/app/models/login-status';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public credentials = new Credentials();

  public constructor(private loginService: LoginService, private router: Router) { }

  public login(): void {
    this.loginService.userExists(this.credentials).subscribe(loginStatus => {
      if(!loginStatus.isLoggedIn) {
        alert("Incorrect username or password.");
      }
      else {
        this.loginService.isLoggedIn = true;
        this.loginService.type = loginStatus.type;
        if(JSON.stringify(loginStatus.type) === "CUSTOMER") {
          this.router.navigate(["/customer"]);
        }
        else if(JSON.stringify(loginStatus.type) === "COMPANY") {
          this.router.navigate(["/company"]);
        }
        else if(JSON.stringify(loginStatus.type) === "ADMIN") {
          this.router.navigate(["/admin"]);
        }
    }
    });
  }

  public loginDemo(): void{
    if(this.loginService.userExistsDemo(this.credentials))
      if(this.credentials.type === "customer"){
        this.router.navigate(["/customer"]);
      }
      else if(this.credentials.type === "company"){
        this.router.navigate(["/company"]);
      }
      else if(this.credentials.type === "admin"){
        this.router.navigate(["/admin"]);
      }
    else alert("Incorrect username or password.");  
  }
}
