import { Injectable } from '@angular/core';
import { RegisterModel } from '../Models/Register';
import { AccountEndpointService } from '../Endpoints/account-endpoint.service';
import { AuthorizationRequest, AuthorizationResponse } from '../Models/authorization';
import { ReplaySubject, of, tap } from 'rxjs';
import { ErrorService } from './error.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  authResponse = new AuthorizationResponse(0,'','','')
  private userStorage = new ReplaySubject<AuthorizationResponse | null>();
  public user$ = this.userStorage.asObservable();
  constructor(private accountEndpoint: AccountEndpointService, private errorService: ErrorService) { }

  refreshUser(jwt: string | null){
    if(jwt === null){
      this.userStorage.next(null);
      return of(undefined);
    }
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + jwt);
    
    return this.accountEndpoint.loadUser(headers).subscribe({
      next: data => {this.userStorage.next(data as AuthorizationResponse); console.log(data)},
      error: _ => {
        this.logout();
      }
    }); 
  }

  logIn(authModel: AuthorizationRequest){
    this.accountEndpoint.signIn(authModel).pipe(
      tap(data => this.setUser(data as AuthorizationResponse))
    )
    .subscribe({
      next: (response) =>{
      },
      error: error =>{
        this.errorService.authError$.next(error.error.title as string + ': ' + error.error.detail as string);
      }
    });
  }

  logout(){
    localStorage.removeItem('user');
    this.userStorage.next(null);
  }

  getTokenFromLocalStorage(){
    const storageUser = localStorage.getItem('user');
    if(storageUser)
    {
      const user: AuthorizationResponse = JSON.parse(storageUser);
      return user.jwtAuth;
    } else {
      return null;
    }
  }
  private setUser(auth : AuthorizationResponse){
    localStorage.setItem('user',JSON.stringify(auth));
    this.userStorage.next(auth);
  }

  
}
