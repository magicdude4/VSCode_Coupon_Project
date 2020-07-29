import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  public logout(): void {
    this.loginService.logout();
    this.router.navigate(["/home"]);
  }
}
