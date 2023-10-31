import { Injectable } from '@angular/core';
import { UserEndpointService } from '../Endpoints/user-endpoint.service';
import { User } from '../Models/user';
import { Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user$ = new Subject<User[]>();
  constructor(private userEndpoints: UserEndpointService) { 
    
  }
  
  getUsers(){
    this.userEndpoints.getAll().pipe(
      tap(data => this.user$.next(data as User[]))
    )
    .subscribe();
  }
}
