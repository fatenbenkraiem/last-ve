import { Component, OnInit } from '@angular/core';
import {  NavigationStart, ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { AuthUserService } from 'src/app/services/auth-user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
 userauth :User =new User();
  errorMessage = 'Invalid Credentials';
  successMessage!: string;
  invalidLogin = false;
  loginSuccess = false;
  retUrl:string="admin/edit";
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private authenticationService:AuthUserService) {   }

  ngOnInit(): void{
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        const requiresAuthentication = event['url'] !== '/login';
        if (requiresAuthentication && !this.authenticationService.isAuthenticated) {
          this.router.navigate(['/login']);
        }
      }
    });
  }
 Login() {
  this.authenticationService.authenticationService(this.userauth).subscribe((result)=> {
    console.log(Object.values(result))
    let id = Object.values(result)[2]
    let token = Object.values(result)[3]
    let role = Object.values(result)[4]
    console.log(role)
    this.authenticationService.savesession(id,token,role)
    this.invalidLogin = false;
    this.loginSuccess = true;
    this.successMessage = 'Login Successful.';
    if (role =="admin"){
      this.router.navigate([this.retUrl]);
    }
    else{
      this.router.navigate(["user/edit"]);
    }
  
  }, (error) => {
    console.log(error)
    this.invalidLogin = true;
    this.loginSuccess = false;
  });      
}
}
