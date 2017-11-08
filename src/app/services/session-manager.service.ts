import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
@Injectable()
export class SessionManagerService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Promise<boolean> {
    if (localStorage.getItem("username") != null) {
      return true;
    }
    else {
      this.router.navigate(['/menu']);
      return !true;
    }
  }
}
