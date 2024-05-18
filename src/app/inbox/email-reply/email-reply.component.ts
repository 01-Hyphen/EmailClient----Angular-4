import { Component, Input } from '@angular/core';
import { Email } from '../email';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-reply',
  templateUrl: './email-reply.component.html',
  styleUrl: './email-reply.component.css'
})
export class EmailReplyComponent {

  showModal;
  @Input() email:Email;
  successMsg;
  errorMsg;

  constructor( private emailService:EmailService){

  }

  ngOnChanges(){
    const text = this.email.text.replace(/\n/gi,'\n> ')
    this.email = {
      ...this.email,
      to:this.email.from,
      from:this.email.to,
      subject: `RE: ${this.email.subject}`,
      text:`\n\n\n---------- ${this.email.from} wrote:\n ${text}`
    } 
  }

  submit(email:Email){
    this.emailService.sendEmail(email).subscribe((res)=>{
      console.log(res.status);
      this.successMsg = res.status; 
      this.showModal=false;
    },
  (err)=>{
    this.errorMsg = 'Something went worng.'
    
  })  
  }
  

}
