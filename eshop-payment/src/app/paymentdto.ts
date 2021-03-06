import { Bankacc } from "./bankacc";
import { Orderproducts } from "./orderproducts";

export class Paymentdto {
    bankTxns:number;
    bankAcc:Bankacc = undefined;
    txnDate:string;
    txnAmount:number;
    orderproducts:Orderproducts = undefined;
    cvv:number;
    exprdate:string;
    cardholder:string;
    cardno:number;
}
