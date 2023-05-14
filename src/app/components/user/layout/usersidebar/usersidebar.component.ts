import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { AuthUserService } from 'src/app/services/auth-user.service';
import { userservice } from 'src/app/services/user.service';
@Component({
  selector: 'app-usersidebar',
  templateUrl: './usersidebar.component.html',
  styleUrls: ['./usersidebar.component.css']
})
export class UsersidebarComponent implements OnInit  {
  constructor(private authenticationService :AuthUserService ,private router: Router ,private Userservice :userservice) { }
  user :User =new User()
  ngOnInit(): void {
    this.getusers();
  }
  getusers (){
    let id :any =sessionStorage.getItem('id');
    this.Userservice.getuser(id).subscribe(data=>{
        console.log(data)
        this.user=data;
      } )
  }
  
status: boolean = true;
  //Sidebar opne
  clickEvent(){
      this.status = false;       
  }
  //Sidebar close
  clickEvent2()
  {
    this.status = false; 
  }


}

