import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { AuthUserService } from 'src/app/services/auth-user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit {
  ngOnInit(): void {
  }
/*
  userauth :User =new User();
  errorMessage = 'Invalid Credentials';
  successMessage!: string;
  invalidLogin = false;
  loginSuccess = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService:AuthUserService  ) {   }

  

 Login() {
 
  this.authenticationService.authenticationService(this.userauth).subscribe((result)=> {
    console.log(Object.values(result))
    let id = Object.values(result)[2]
    let token = Object.values(result)[3]
    let role = Object.values(result)[4]
    console.log(id)
    this.authenticationService.savesession(id,token,role)
    this.invalidLogin = false;
    this.loginSuccess = true;
    this.successMessage = 'Login Successful.';
    this.router.navigate(['user/edit']);
  }, (error) => {
    console.log(error)
    this.invalidLogin = true;
    this.loginSuccess = false;
  });      
}*/

}
