import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthUserService } from 'src/app/services/auth-user.service';

@Component({
  selector: 'app-adminheader',
  templateUrl: './adminheader.component.html',
  styleUrls: ['./adminheader.component.css']
})
export class AdminheaderComponent implements OnInit {

  constructor(private authenticationService :AuthUserService ,private router: Router ,) { }
logout()
{
  this.authenticationService.logout();
  this.router.navigate(['/login']);
}

  ngOnInit(): void {
  }

}

