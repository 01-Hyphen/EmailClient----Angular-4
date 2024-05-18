import { Injectable } from "@angular/core";
import { CanLoad, GuardResult, MaybeAsync, Route, Router, UrlSegment } from "@angular/router";
import { AuthService } from "./auth.service";
import { filter, skipWhile, take, tap } from "rxjs";

 
@Injectable({
  providedIn:'root'
})
export class AuthGuard implements CanLoad{

  constructor(private authService:AuthService, private router: Router){}

  canLoad(route: Route, segments: UrlSegment[]): MaybeAsync<GuardResult> {
    return this.authService.signedin$.pipe(
      //skipWhile using here it will skip the value based on the condition until the condition becomes false once it becomes false it will start to emit all values.
      skipWhile((value)=>{
        return value == null;
      }),
      // take is been used here it will take only one value emitted by the subject. and mark observable as complete.
      take(1),
      //tap is used to do something rather than transforming the valued.
      tap((authenticated)=>{
        if(authenticated == false){
          this.router.navigateByUrl('/');
        }
      })
    )
  }

}