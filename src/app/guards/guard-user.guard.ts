import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild,Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthUserService } from '../services/auth-user.service';


@Injectable({
  providedIn: 'root'
})
export class GuardUserGuard implements CanActivate {
  constructor(private aus:AuthUserService,private router:Router){

  }
  /*canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    return new Promise((resolve,reject)=>{
      if(this.aus.isLoggedIn()==true){
      resolve(true)
    }
    else{
      resolve(false)
      this.router.navigate(['/user/login'])

    }
    })
  }*/
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   let role= sessionStorage.getItem("role")
    const { routeConfig } = route; // provides the route configuration options
    const { path } = routeConfig as Route; // provides the path of the route
   // console.log("here")
    console.log(role)
    console.log(path)
    if ((path?.includes('admin/reserve')|| path?.includes('admin/res')|| path?.includes('admin/demandeur')|| path?.includes('admin/edit')|| path?.includes('admin/type')) ) {
      if( role?.includes('admin')){
        return this.router.navigateByUrl('admin/res')
      }
        else{
          return this.router.navigateByUrl('res');
      }
      }
    
    if ((path?.includes('user/res')|| path?.includes('user/reserve')|| path?.includes('user/edit')) ) {
      if( role?.includes('user')){
        return this.router.navigateByUrl('user/res')
      }
      else{
        return this.router.navigateByUrl('res');
      }
    }
   
    this.router.navigateByUrl('res'); // for any other condition, navigate to the res route
    return false;
  }
}
