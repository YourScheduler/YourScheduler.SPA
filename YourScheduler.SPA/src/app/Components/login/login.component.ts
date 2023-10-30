import { Component } from '@angular/core';
import { AuthorizationRequest } from 'src/app/Shared/Models/authorization';
import { AuthorizationService } from 'src/app/Shared/Services/authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 authModel: AuthorizationRequest = new AuthorizationRequest("","");

 constructor(private authorizationService: AuthorizationService){}
 

 onSubmit(){
  this.authorizationService.logIn(this.authModel);
 }
}
