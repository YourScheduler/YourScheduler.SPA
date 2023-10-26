import { Component } from '@angular/core';
import { Authorization } from 'src/app/Shared/Models/authorization';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 authModel: Authorization = new Authorization("","");
 
}
