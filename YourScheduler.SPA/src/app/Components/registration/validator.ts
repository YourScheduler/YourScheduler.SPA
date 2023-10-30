import { AbstractControl, AsyncValidatorFn, ValidationErrors, ValidatorFn } from "@angular/forms";
import { Observable, of } from "rxjs";

export function passwordMatch(password: string, confirmPassword: string) : Observable<ValidationErrors | null>{
    return of(function(form: AbstractControl){
        const passValue = form.get(password)?.value;
        const confirmValue = form.get(confirmPassword)?.value;

        if(passValue === confirmValue)
            return null;
        else
            return {passwordmatcherror: true};
    });
}

export const matchPassword : ValidatorFn = (control: AbstractControl):ValidationErrors | null => {
    
    let password = control.get('password');
    let confirmPassword = control.get('confirmPassword');
    if(password && confirmPassword && password?.value != confirmPassword?.value)
        return {passwordmatcherror: true};

    return null;
}

export async function isPasswordMatch(control: AbstractControl): Promise<ValidationErrors | null>{
    let password = control.get('password');
    let confirmPassword = control.get('confirmPassword');
    if(password && confirmPassword && password?.value != confirmPassword?.value)
        return of({passwordmatcherror: true});

    return of(null);
}
