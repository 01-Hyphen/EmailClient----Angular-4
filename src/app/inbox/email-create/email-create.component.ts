import { Component } from '@angular/core';
import { Email } from '../email';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-create',
  templateUrl: './email-create.component.html',
  styleUrl: './email-create.component.css'
})
export class EmailCreateComponent {
  showModal;

  email:Email={
    id:'',
    subject:'',
    text:'',
    to:'',
    from:'',
    html:''
  }

  constructor( private emailService:EmailService){}

  submit(email : any){
    this.emailService.sendEmail(email).subscribe(
      (res)=>{
        console.log('hiiiiiiii');
        
        this.showModal = false;
      }
    )

  }
  
}
