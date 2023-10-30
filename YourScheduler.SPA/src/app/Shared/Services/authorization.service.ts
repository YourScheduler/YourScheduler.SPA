import { Injectable } from '@angular/core';
import { RegisterModel } from '../Models/Register';
import { AccountEndpointService } from '../Endpoints/account-endpoint.service';
import { AuthorizationRequest, AuthorizationResponse } from '../Models/authorization';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  authResponse = new AuthorizationResponse(0,'','','')
  constructor(private accountEndpoint: AccountEndpointService) { }

  logIn(authModel: AuthorizationRequest){
    this.accountEndpoint.signIn(authModel).pipe(
      tap(_ => {})
    )
    .subscribe();
  }

  
}
