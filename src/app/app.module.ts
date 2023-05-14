import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TypeComponent } from './components/type/type.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { ResComponent } from './components/res/res.component';
import { LoginComponent } from './components/admin/login/login.component';
import { AdminfooterComponent } from './components/admin/layout/adminfooter/adminfooter.component';
import { AdminsidebarComponent } from './components/admin/layout/adminsidebar/adminsidebar.component';
import { AdminheaderComponent } from './components/admin/layout/adminheader/adminheader.component';
import { AdminreserveComponent } from './components/admin/pages/adminreserve/adminreserve.component';
import { AdminuserComponent } from './components/admin/pages/adminuser/adminuser.component';
import { AdmintypeComponent } from './components/admin/pages/admintype/admintype.component';
import { AdminresComponent } from './components/admin/pages/adminres/adminres.component';
import { ProfileComponent } from './components/admin/pages/profile/profile.component';
import { HttpInterceptors } from './services/http-interceptors.service';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClientXsrfModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserreserveComponent } from './components/user/pages/userreserve/userreserve.component';
import { UserresComponent } from './components/user/pages/userres/userres.component';
import { UserfooterComponent } from './components/user/layout/userfooter/userfooter.component';
import { UserheaderComponent } from './components/user/layout/userheader/userheader.component';
import { UsersidebarComponent } from './components/user/layout/usersidebar/usersidebar.component';
import { ProfilComponent } from './components/user/pages/profil/profil.component';
import { NgToastModule } from 'ng-angular-popup';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MatDialogModule } from '@angular/material/dialog';
import { RegisterComponent } from './components/register/register.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import{MatListModule} from'@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { SigninComponent } from './components/user/signin/signin.component';
import { GuardUserGuard } from './guards/guard-user.guard';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    NavbarComponent,
    TypeComponent,
    ReservationComponent,
    ResComponent,
    LoginComponent,
    AdminfooterComponent,
    AdminsidebarComponent,
    AdminheaderComponent,
    AdminreserveComponent,
    AdminuserComponent,
    AdmintypeComponent,
    AdminresComponent,
    ProfileComponent,
    UserreserveComponent,
    UserresComponent,
    UserfooterComponent,
    UserheaderComponent,
    UsersidebarComponent,
    ProfilComponent,
    RegisterComponent,
    SigninComponent,
 

  ],
  imports: [
    HttpClientXsrfModule.withOptions({
      cookieName: 'XSRF-TOKEN',
      headerName: 'X-XSRF-TOKEN'
    }),
    FormsModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule, 
    ReactiveFormsModule,
    NgToastModule,
    Ng2SearchPipeModule,
    MatToolbarModule,
    MatSidenavModule,
    MatSidenavModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,

  ],
  providers: [GuardUserGuard,
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptors, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
