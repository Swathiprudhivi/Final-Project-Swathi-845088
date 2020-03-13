import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from "@angular/forms";
import {Buyer} from 'src/app/Models/buyer';
import { from } from 'rxjs';
import { BuyerService } from 'src/app/Services/buyer.service';
import {Items} from 'src/app/Models/items';
import { PurchaseHistoryComponent } from '../purchase-history/purchase-history.component';
import { TransactionHistory } from '../transaction-history';

@Component({
  selector: 'app-buy-product',
  templateUrl: './buy-product.component.html',
  styleUrls: ['./buy-product.component.css']
})
export class BuyProductComponent implements OnInit {
buyerform:FormGroup;
item:Items;
  itemlist:Items[];
  submitted=false;
tobj:TransactionHistory;

  constructor(private formbuilder:FormBuilder,private service:BuyerService) { }

  ngOnInit() {
    this.buyerform=this.formbuilder.group({
      id:['',Validators.required],
      buyerId:['',Validators.required],
      sellerId:['',Validators.required],
      transactionType:['',Validators.required],
      itemId:['',Validators.required],
      numberOfItems:['',Validators.required],
      dateTime:['',Validators.required],
      remarks:['',Validators.required],
      cardnumber:['',Validators.required],
      cvv:['',Validators.required],
      ed:['',Validators.required],
      name:['',Validators.required],
      
    });
    this.item=JSON.parse(localStorage.getItem('item'));
    console.log(this.item);
  }
  get f() {return this.buyerform.controls;}
  purchase()
  {
    this.tobj=new TransactionHistory();
    this.tobj.id='T'+Math.floor(Math.random()*1000);
    this.tobj.buyerId=localStorage.getItem('buyerId');
    this.tobj.sellerId=this.item.sellerId;
    this.tobj.transactionId=this.tobj.id;
    this.tobj.numberOfItems=this.buyerform.value['numberOfItems'];
    this.tobj.itemId=this.item.itemId;
    this.tobj.transactionType=this.buyerform.value['transactionType'];
    this.tobj.dateTime=this.buyerform.value['dateTime'];
    this.tobj.remarks=this.buyerform.value['remarks'];
    console.log(this.tobj);
      this.service.BuyItem(this.tobj).subscribe(res=>{
        console.log("Purchase was Sucessfull");
        alert('Purchase Done Successfully');
      })
 
 
  }
  onSubmit()
  {
    
    this.submitted=true;
    //display form values on success
    if(this.buyerform.valid) {
      alert('SUCCESS!! :-)\n\n')
      console.log(JSON.stringify(this.buyerform.value));
    }
    this.purchase();
  }
 
}
