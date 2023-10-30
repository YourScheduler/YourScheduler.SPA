import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from 'src/app/Shared/Services/account.service';
import { isPasswordMatch, matchPassword, passwordMatch } from './validator';
import { RegisterModel } from 'src/app/Shared/Models/Register';
import { Subject, takeUntil, tap } from 'rxjs';
import { ErrorService } from 'src/app/Shared/Services/error.service';
import { AuthorizationService } from 'src/app/Shared/Services/authorization.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit, OnDestroy {

  registerForm: FormGroup = new FormGroup({});
  isSubmitted = false;
  registerError: string = '';
  destroyed$ = new Subject();
  createdAccount:string | null = '';
  
  constructor(private accountService: AccountService, 
    public auth: AuthorizationService,
    private formBuilder: FormBuilder,
    private errorsService: ErrorService){
      this.errorsService.registerError$.pipe(
        tap(data => this.registerError = data),
        takeUntil(this.destroyed$)
      )
      .subscribe();

      this.accountService.registerSubmitted$.pipe(
        tap(data => this.isSubmitted = data),
        takeUntil(this.destroyed$)
      )
      .subscribe();
  }
  
  ngOnDestroy(): void {
    this.destroyed$.complete();
  
  }


  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(){
    this.registerForm = this.formBuilder.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required,Validators.minLength(8),Validators.pattern('(?=[A-Za-z0-9]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,}).*$')]],
      confirmPassword: ['', Validators.required],
      displayName:['',[Validators.required, Validators.minLength(3)]]

    },{
      validators: matchPassword
    } 
    );
  }

  onSubmit(){
    this.createdAccount = this.registerForm.get('email')?.value;
    

    if(this.registerForm.valid){
      this.accountService.register(this.registerForm.value as RegisterModel)
    }

  }
}
