import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { EmailService, GetEmailRes } from './email.service';
import { EMPTY, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailResolverService implements Resolve<GetEmailRes>{
  

  constructor( private emailService:EmailService, private router:Router) { }

  resolve(route : ActivatedRouteSnapshot){
    console.log(route.params.id);
    
    const { id } = route.params;
    return this.emailService.getEmail(id)
    .pipe(
      catchError(()=>{
        console.log('joooooo');
        
        this.router.navigateByUrl('/inbox/not-found')
        return EMPTY;
      })
    );
    
    // return {
    //   id:'wgehehgerge',
    //   subject:'ggggsffwffrew',
    //   text:'wggfsgs',
    //   to:'ggsdsd',
    //   from:'hgjfgnd',
    //   html:'gsfgsffsb'
    // }
  }
}
