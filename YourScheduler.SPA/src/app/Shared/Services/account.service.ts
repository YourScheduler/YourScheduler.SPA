import { Injectable } from '@angular/core';
import { AccountEndpointService } from '../Endpoints/account-endpoint.service';
import { RegisterModel } from '../Models/Register';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private accountEndpoint:AccountEndpointService) { }

  register(form: RegisterModel){
    this.accountEndpoint.registerUser(form).pipe(
      tap()
    )
    .subscribe({
      next: (response) =>{
        console.log(response);
      },
      error: error =>{
        console.log(error);
      }
    });
  }
}
