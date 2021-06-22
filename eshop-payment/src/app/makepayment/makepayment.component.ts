import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Paymentdto } from '../paymentdto';
import { PaymentserviceService } from '../paymentservice.service';

@Component({
  selector: 'app-makepayment',
  templateUrl: './makepayment.component.html',
  styleUrls: ['./makepayment.component.css']
})
export class MakepaymentComponent implements OnInit {
  payment:Paymentdto = new Paymentdto();
  msg:string;
  msgflag:boolean;
  @ViewChild("frm")
  form:NgForm;
  constructor(public service:PaymentserviceService) { }

  ngOnInit() {
  }
  makepayment():void{
    this.service.makePayment(this.payment).subscribe(
      data=>{
        console.log(data);
        this.msg=data.message;
        this.form.reset;
        this.msgflag=true;
      },
      error=>{
        console.log(error);
        this.msg=error.error.messages[0];
        this.msgflag=false;
      }
    );
  }

}
