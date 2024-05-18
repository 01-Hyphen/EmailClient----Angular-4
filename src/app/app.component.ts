import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EmailClient';
  signedin$ = false;

  constructor(private authService:AuthService){
    this.authService.signedin$.subscribe(
      (signedin)=>{
       
        
        this.signedin$=signedin
        console.log('authenticated form constructor:',this.signedin$);
      }

    )
  }

  ngOnInit(){
    this.authService.checkAuth().subscribe(
      ()=>{
    
        console.log('form onInit authenticated:',this.signedin$);
        
      }
    );
    
   
  }

}
