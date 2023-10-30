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
  destroyed$ = new Subject();

  constructor(private accountEndpoint:AccountEndpointService, private errors: ErrorService) { 
      this.errors.registerError$.pipe(
        tap(data => this.registerError = data),
        takeUntil(this.destroyed$)
      )
      .subscribe();
  }
  ngOnDestroy(): void {
    this.destroyed$.complete();
  }

  register(form: RegisterModel){
    this.accountEndpoint.registerUser(form).pipe(
      tap()
    )
    .subscribe({
      next: (response) =>{
        console.log(response);
      },
      error: error =>{
        this.errors.registerError$.next(error.error as string);
      }
    });
  }
}
