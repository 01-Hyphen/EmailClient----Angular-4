import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Email } from './email';

export interface GetEamilsRes{
  id:string;
  subject:string;
  from:string;
}

export interface GetEmailRes{
  id:string;
  subject:string;
  text:string;
  to:string;
  from:string;
  html:string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {
 
 //https://api.angular-email.com/emails

 rootUrl='https://api.angular-email.com';

  constructor(private http: HttpClient) { }

  getEmails(){
    return this.http.get<GetEamilsRes[]>(`${this.rootUrl}/emails`);
  }

  getEmail(id:string){
    return this.http.get<GetEmailRes>(`${this.rootUrl}/emails/${id}`);
  }

  sendEmail(email: Email){
    return this.http.post<any>(`${this.rootUrl}/emails`,email);
  }

}
