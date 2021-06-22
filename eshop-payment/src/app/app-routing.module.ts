import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MakepaymentComponent } from './makepayment/makepayment.component';
import { ViewbycustidComponent } from './viewbycustid/viewbycustid.component';
import { ViewpaymentComponent } from './viewpayment/viewpayment.component';

const routes: Routes = [{path:'makepayment',component:MakepaymentComponent},
                        {path:'viewpayment',component:ViewpaymentComponent},
                        {path:'viewpaymentbycustid',component:ViewbycustidComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
