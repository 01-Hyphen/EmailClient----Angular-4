import { Injectable } from "@angular/core";
import { FormGroup, Validator } from "@angular/forms";

@Injectable({providedIn:'root'})
export class MatchPassword implements Validator {

   validate(form : FormGroup){
        const { username,password,passwordConfirmation } = form.value;

        if(password === passwordConfirmation){
            return null;
        }

        return { matchPassword : true }
    }
}
