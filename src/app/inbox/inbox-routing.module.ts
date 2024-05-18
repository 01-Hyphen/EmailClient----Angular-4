import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InboxHomeComponent } from './inbox-home/inbox-home.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { EmailViewComponent } from './email-view/email-view.component';
import { EmailResolverService } from './email-resolver.service';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:'', component: InboxHomeComponent,
    children:[
      { path:'',component:PlaceholderComponent},
      { path:'not-found',  component:NotFoundComponent},
      { path:':id', component:EmailViewComponent, resolve:{email:EmailResolverService}},
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InboxRoutingModule { }
