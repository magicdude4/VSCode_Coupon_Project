import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})


export class AdminGuardService implements CanActivate {

  public constructor(private loginService: LoginService, private router: Router) {}

  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;
  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(this.loginService.type === "admin" && this.loginService.isLoggedIn === true) {
      return true;
    }
    this.router.navigate(["/login"]);
    return false;
  }
}
