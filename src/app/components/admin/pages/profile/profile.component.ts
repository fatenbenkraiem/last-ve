import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';


import { User } from 'src/app/model/User';
import { AuthUserService } from 'src/app/services/auth-user.service';
import { userservice } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor( private Userservice :userservice,
     private toastr: NgToastService,
     private router:Router ,
     private auth:AuthUserService
    ) { }
user :User =new User()
check:boolean =false ;
cpassword :String="" ;
npassword :String |any ="" ;

  ngOnInit(): void {
    this.getusers ()
  }
getusers ()
{
  let id :any =sessionStorage.getItem('id');
  this.Userservice.getuser(id).subscribe(
    data=>{
      console.log(data)
      this.user=data;
    
    }
  )
 // console.log(this.user.image)
}

show(){
  this.check=true;
 
}
hide(){
  this.check=false;

}

edit() 
{
 
  if (this.cpassword .length==0 &&this.npassword .length==0)
  {

    this.Userservice.edituser(this.user).subscribe(data=> 
      { 
                  console.log(data)
                  this.user=data ;
                  this.toastr.success({detail:"Modifié avec succès"});
                  this.router.navigate(['/admin/edit']);
          
        }
          
        );
  }
  else{
 if (this.cpassword==this.user.password && this.npassword .length>5)
 {
this.user.password=this.npassword 

this.Userservice.edituser(this.user).subscribe(data=> 
  { 
              console.log(data)
              this.user=data ;
              this.toastr.success({detail:"Modifié avec succès"});
              this.router.navigate(['admin/login']); 
    }
    );

 }
 else
 {
  this.toastr.error({detail:"password incorrect"});
 }
 
  }
 
}







}

