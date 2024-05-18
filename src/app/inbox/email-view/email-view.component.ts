import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmailService, GetEmailRes } from '../email.service';
import { pipe, switchMap } from 'rxjs';

@Component({
  selector: 'app-email-view',
  templateUrl: './email-view.component.html',
  styleUrl: './email-view.component.css'
})
export class EmailViewComponent {

  constructor(private route: ActivatedRoute, private emailService:EmailService ){

    console.log(this.route.snapshot.data);
    this.email = this.route.snapshot.data.email;
    this.route.data.subscribe(
      ({email})=>{
        this.email = email;
      }
    )

  }

  email:GetEmailRes;



  ngOnInit(){
      // so here issue with nested subscriptions that is when we toggling between mails quickly then there might be some cases that it will show result for the previous request instead of latest one 
      // because of slow network. hence we are using here RXJS operator switchMap because it will cancel the prev req when new comes before completing the existing one.

      // req in the sense you can take it as value emitted by observable itself.
    // this.route.params
    // .pipe(
    //   switchMap(({ id })=>{
    //    return this.emailService.getEmail(id);
    //   })
    // )
    // .subscribe(
    //   (email)=>{
    //     this.email = email;
        
    //   }
    // )

    // this.route.params.subscribe(({ id })=>{
    //   this.emailService.getEmail(id).subscribe((email)=>{
    //     console.log(email);
        
    //   })
    // })
  }

}
