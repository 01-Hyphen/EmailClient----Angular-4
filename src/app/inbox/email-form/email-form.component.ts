import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Email } from '../email';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrl: './email-form.component.css'
})
export class EmailFormComponent {

 @Input() email:Email;
 emailForm;
 @Output() sendMail = new EventEmitter();

  constructor( private authService:AuthService ){
    
  }

  ngOnInit(){
    this.emailForm = new FormGroup({
      to:new FormControl(this.email.to, [Validators.required,Validators.email]),
      from: new FormControl({value:`${this.authService.username}@angular-email.com`, disabled:true}),
      subject: new FormControl(this.email.subject,[Validators.required]),
      text: new FormControl(this.email.text,[Validators.required]),
    })
  }



  onSubmit(){
    if(this.emailForm.invalid){
      return;
    }else{
      console.log(this.emailForm);
      this.sendMail.emit(this.emailForm.value);
    }

  }

}
