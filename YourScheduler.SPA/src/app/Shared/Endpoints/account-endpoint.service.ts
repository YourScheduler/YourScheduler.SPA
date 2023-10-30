import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthorizationRequest } from '../Models/authorization';
import { HtmlParser } from '@angular/compiler';
import { RegisterModel } from '../Models/Register';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AccountEndpointService {
  baseURL = `${environment.appUrl}Account/`;
  constructor(private http: HttpClient) { }


  public signIn(authModel: AuthorizationRequest){
    return this.http.post(this.baseURL + 'signIn', authModel, {withCredentials: true});
  }

  public loadUser(headers: HttpHeaders){
    return this.http.get<RegisterModel>(this.baseURL+'loadUser', {headers});
  }

  public registerUser(user: RegisterModel){
    return this.http.post<RegisterModel>(this.baseURL+'register',user)
  }
}
