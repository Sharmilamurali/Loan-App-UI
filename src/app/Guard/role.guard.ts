import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../service/User';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private service: UserService, private route: Router) {

  }
  canActivate() {
    if (this.service.GetRole())
      return true;
    else {
      this.route.navigate(['homeUser']);
      return false;

    }
  }

}
