import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../Models/user';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserEndpointService {
  constructor(private http: HttpClient){

  }

  public getAll(){
    return this.http.get<User[]>(`${environment.appUrl}User/GetUsers`)
  }
}
