import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from 'src/app/Shared/Services/account.service';
import { isPasswordMatch, matchPassword, passwordMatch } from './validator';
import { RegisterModel } from 'src/app/Shared/Models/Register';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerForm: FormGroup = new FormGroup({});
  isSubmitted = false;
  errorMessages: string[] = [];
  
  constructor(private accountService: AccountService, private formBuilder: FormBuilder){

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
    this.isSubmitted = true;
    this.errorMessages = [];

    if(this.registerForm.valid){
      this.accountService.register(this.registerForm.value as RegisterModel)
    }

  }
}
