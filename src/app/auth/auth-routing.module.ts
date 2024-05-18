import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { SignOutComponent } from './sign-out/sign-out.component';

const routes: Routes = [
  {path:'signout', component:SignOutComponent},
  {path:'signup', component:SignupComponent},
  { path: '', component:SigninComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
