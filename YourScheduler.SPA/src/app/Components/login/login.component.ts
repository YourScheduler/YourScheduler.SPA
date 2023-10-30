import { Component, OnDestroy } from '@angular/core';
import { Subject, takeUntil, tap } from 'rxjs';
import { AuthorizationRequest } from 'src/app/Shared/Models/authorization';
import { AuthorizationService } from 'src/app/Shared/Services/authorization.service';
import { ErrorService } from 'src/app/Shared/Services/error.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy{
 authModel: AuthorizationRequest = new AuthorizationRequest("","");
 authError = '';
 destroyed$ = new Subject();
 constructor(public auth: AuthorizationService, private errorService: ErrorService){
    this.errorService.authError$.pipe(
      tap(data => this.authError = data),
      takeUntil(this.destroyed$)
    )
    .subscribe();
 }
  ngOnDestroy(): void {
    this.destroyed$.complete();
  }
 

 onSubmit(){
  this.authError = '';
  this.auth.logIn(this.authModel);
 }
 onLogout(){
  this.auth.logout();
 }
}
