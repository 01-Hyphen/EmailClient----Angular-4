import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';


export interface SignUpCrediantials{
  username:string;
  password:string;
  passwordConfirmation:string;
}

export interface SignupResponse{
  username: string;
}

export interface SignInCred{
  username:string;
  password:string;
}

export interface SignedInResponse{
  authenticated: boolean;
  username:string;
}

export interface SignInRes{
  username:string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  rootUrl = 'https://api.angular-email.com';

  //emiting defult value as null for the guard to not preassumed that user is not signed in.
  signedin$ = new BehaviorSubject<boolean>(null);
  username;

  constructor(private http : HttpClient) { }



  UniqueUsername(username : string){
    return this.http.post(`${this.rootUrl}/auth/username`,{username:username});
  }

  signup(credentials : SignUpCrediantials){
    
    return this.http.post<SignupResponse>(`${this.rootUrl}/auth/signup`,credentials)
    .pipe(tap(
      ({ username })=>{
        this.username=username;
        this.signedin$.next(true);
      }
    ));
  }

  checkAuth(){
    return this.http.get<SignedInResponse>(`${this.rootUrl}/auth/signedin`)
    .pipe(tap(
      ({authenticated, username })=>{
        this.username = username;
        this.signedin$.next(authenticated);
        
      }
    ));
  }

  signout(){
    return this.http.post(`${this.rootUrl}/auth/signout`,{}).pipe(
      tap(
        ()=>{
          this.signedin$.next(false);
        }
      )
    )
  }

  signin(signinCred:SignInCred){
    return this.http.post<SignInRes>(`${this.rootUrl}/auth/signin`,signinCred)
    .pipe(tap(
      ({ username })=>{
        this.username=username;
        this.signedin$.next(true);
      }
    ))
  }

}
