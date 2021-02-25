import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService,private router: Router) {}

  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  //   const currentUser = this.authService.currentUserValue;
  //   if (currentUser) {
  //     // logged in so return true
  //     return true;
  //   }

  //   // not logged in so redirect to login page with the return url
  //   this.authService.logout();
  //   return false;
  // }
  canActivate() {
    // const currentUser = this.authService.currentUserValue;
    // if (currentUser) {
    //   // logged in so return true
    //   return true;
    // }

    // not logged in so redirect to login page with the return url
    // this.authService.logout();
    // return false;
// return this.authService.isLogged.pipe(
//   take(1),
//   map((isLogged:boolean) => !isLogged)
//     );


if(this.authService.isLogged()){
  console.log('APSO GUARD');return true
}else{
  console.log('BLOQ GUARD')
  // this.authService.logout();
  this.router.navigate(['/auth/login']);return false
}

    
    
  }
}
