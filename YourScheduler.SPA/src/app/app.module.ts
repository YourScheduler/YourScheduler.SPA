import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainBodyComponent } from './Components/main-body/main-body.component';
import { LoginComponent } from './Components/login/login.component';
import { AuthorizationComponent } from './Shared/Models/authorization/authorization.component';

@NgModule({
  declarations: [
    AppComponent,
    MainBodyComponent,
    LoginComponent,
    AuthorizationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
