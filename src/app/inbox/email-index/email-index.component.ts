import { Component } from '@angular/core';
import { EmailService, GetEamilsRes } from '../email.service';

@Component({
  selector: 'app-email-index',
  templateUrl: './email-index.component.html',
  styleUrl: './email-index.component.css'
})
export class EmailIndexComponent {

  emails:GetEamilsRes[]=[];

  constructor(private emailService:EmailService){}

  ngOnInit(){
    this.emailService.getEmails().subscribe((res)=>{
      console.log(res);
      
      this.emails = res;
    })
  }

 
 

}
