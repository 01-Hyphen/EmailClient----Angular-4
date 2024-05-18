import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AsyncValidator, FormControl } from "@angular/forms";
import { catchError, map, of } from "rxjs";
import { AuthService } from "../auth.service";

@Injectable(
    {providedIn:"root"}
)
export class UniqueUsername implements AsyncValidator {

    constructor(private http:HttpClient, private authService : AuthService){}
    
    validate = (control : FormControl) =>{
        // console.log(control.value);
        const { value } = control

       
        
       return  this.authService.UniqueUsername(value)
       .pipe(
            map(()=>{
                return null;
            }),
            catchError((err)=>{

                if(err.error.username){
                    return of({ nonUniqueUsername : true })
                }
                else{
                    return of({noConnection : true})
                }
                
            })
        )
        

        
        
    }
  
}
