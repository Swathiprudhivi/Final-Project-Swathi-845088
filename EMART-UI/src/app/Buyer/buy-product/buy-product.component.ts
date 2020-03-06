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
tobj:TransactionHistory;

  constructor(private formbuilder:FormBuilder,private service:BuyerService) { }

  ngOnInit() {
    this.buyerform=this.formbuilder.group({
      id:[''],
      buyerId:[''],
      sellerId:[''],
      transactionType:[''],
      itemId:[''],
      numberOfItems:[''],
      dateTime:[''],
      remarks:[''],
      cardnumber:[''],
      cvv:[''],
      ed:[''],
      name:[''],
      
    });
    this.item=JSON.parse(localStorage.getItem('item'));
    console.log(this.item);
  }
  onSubmit()
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
}
