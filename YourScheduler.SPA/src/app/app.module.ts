import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainBodyComponent } from './Components/main-body/main-body.component';
import { LoginComponent } from './Components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './Components/registration/registration.component';
import { JwtInterceptor } from './Shared/Interceptors/jwtInterceptor';
import { AllUsersComponent } from './Components/all-users/all-users.component';
import { LoadingComponent } from './Components/loading/loading.component';
import { TeamComponent } from './Components/team/team.component';
import { CreateTeamComponent } from './Components/team/create-team/create-team.component';
import { TeamManagmentComponent } from './Components/team/team-managment/team-managment.component';
import { TeamNavbarComponent } from './Components/team/team-navbar/team-navbar.component';
import { TeamNavbarSmallComponent } from './Components/team/team-navbar-small/team-navbar-small.component';

@NgModule({
  declarations: [
    AppComponent,
    MainBodyComponent,
    LoginComponent,
    RegistrationComponent,
    AllUsersComponent,
    LoadingComponent,
    TeamComponent,
    CreateTeamComponent,
    TeamManagmentComponent,
    TeamNavbarComponent,
    TeamNavbarSmallComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
