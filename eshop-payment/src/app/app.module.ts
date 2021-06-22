import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewpaymentComponent } from './viewpayment/viewpayment.component';
import { PfPipe } from './pf.pipe';
import { FormsModule } from '@angular/forms';
import { MakepaymentComponent } from './makepayment/makepayment.component';
import { ViewbycustidComponent } from './viewbycustid/viewbycustid.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewpaymentComponent,
    PfPipe,
    MakepaymentComponent,
    ViewbycustidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
