import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService, SignInCred } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {

  signinForm = new FormGroup({
    username: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20),Validators.pattern('^[A-Za-z]+[0-9]*$')]),
    password: new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(20)])
  })

  constructor(private authService:AuthService,
              private router: Router
  ){}

  onSubmit(){
    this.authService.signin(this.signinForm.value as SignInCred).subscribe({
      next : (res) => {
        // routing to Inbox home component
        this.router.navigateByUrl('/inbox')

      },

      error : ({error}) => {
        if(error.username || error.password){
          console.log(error.username);
          
          this.signinForm.setErrors({invalidCreds: true});
        }else{
          this.signinForm.setErrors({otherIssue: true})
        }
      }
    })
  }

}
