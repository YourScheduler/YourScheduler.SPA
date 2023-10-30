import { Injectable, OnDestroy } from '@angular/core';
import { AccountEndpointService } from '../Endpoints/account-endpoint.service';
import { RegisterModel } from '../Models/Register';
import { Subject, takeUntil, tap } from 'rxjs';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService implements OnDestroy {
  registerError: string = '';
  registerSubmitted$ = new Subject<boolean>();
  destroyed$ = new Subject();

  constructor(private accountEndpoint:AccountEndpointService, private errorsService: ErrorService) { 
      this.errorsService.registerError$.pipe(
        tap(data => this.registerError = data),
        takeUntil(this.destroyed$)
      )
      .subscribe();
  }
  ngOnDestroy(): void {
    this.destroyed$.complete();
  }

  register(form: RegisterModel){
    this.accountEndpoint.registerUser(form)
    .subscribe({
      next: (response) =>{
        this.registerSubmitted$.next(true);
        console.log(response);
      },
      error: error =>{
        console.log(error);
        this.errorsService.registerError$.next(error.error.title as string + ': ' + error.error.detail as string);
      }
    });
  }
}
