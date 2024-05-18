import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatchPassword } from '../validators/match-password';
import { UniqueUsername } from '../validators/unique-username';
import { AuthService } from '../auth.service';
import { SignUpCrediantials } from '../auth.service';
import { Router } from '@angular/router';
import { delay, tap } from 'rxjs';
 
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  
  constructor(private matchPassword : MatchPassword, private uniqueUsername: UniqueUsername,
              private authService:AuthService, private router: Router
  ){}

  signupForm = new FormGroup({
    username: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20),Validators.pattern('^[A-Za-z]+[0-9]*$')],
  [this.uniqueUsername.validate]),
    password: new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(20)]),
    passwordConfirmation: new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(20)])
  },
  {validators:[this.matchPassword.validate]}
)

  showModal= false;

  submit(){
    if(this.signupForm.invalid){
      return
    }else{
      this.authService.signup(this.signupForm.value as SignUpCrediantials)
      .subscribe({
        next:(res)=>{
          // routing to Inbox home component
          this.router.navigateByUrl('/inbox')
        },
        complete(){

        },
        error : (err)=>{
          if(err.status === 0){
            this.signupForm.setErrors({noConnection:true})
          }else{
            this.signupForm.setErrors({otherIssue:true})
          }
          
          
        }
      })
    }
    
  }



}
