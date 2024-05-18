import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {

    intercept(req:HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        //will be modifying req by cloning it as req is by default readonly in typescript.
        const modifiedReq = req.clone({
            withCredentials:true
        });
      
        
        return next.handle(modifiedReq);
        // .pipe(
        //     tap((val)=>{
        //         console.log(val);
                
        //     })
        // )
    }

}
