import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from "@angular/forms";
import {Buyer} from 'src/app/Models/buyer';
import { from } from 'rxjs';
import { BuyerService } from 'src/app/Services/buyer.service';
import {Items} from 'src/app/Models/items';
import { Router } from '@angular/router';
import { Cart } from 'src/app/Models/cart';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  buyerform:FormGroup;
  itemlist:Items[];
  item:Items;
  itemName:string;
  cart:Cart;
  constructor(private formbuilder:FormBuilder,private service:BuyerService,private route:Router) { }

  ngOnInit() {
    this.buyerform=this.formbuilder.group({
      itemName:[''],
   });
  }
Search()
{
  
  this.itemName=this.buyerform.value["itemName"];
  this.service.SearchItems(this.itemName).subscribe(res=>{
      this.itemlist=res;
      console.log(this.itemlist);
})
}
Buy(item:Items)
{
console.log(item);
localStorage.setItem('item',JSON.stringify(item));
this.route.navigateByUrl('/buyer/buyproduct')
}
AddtoCart(item1:Items)
{
  this.cart=new Cart();
  this.cart.id='C'+Math.round(Math.random()*999);
  this.cart.itemId=item1.itemId;
    this.cart.itemName=item1.itemName;
    this.cart.categoryId=item1.categoryId;
    this.cart.subcategoryId=item1.subcategoryId;
    this.cart.sellerId=item1.sellerId;
    this.cart.stockNumber=item1.stockNumber;
    this.cart.price=item1.price;
    this.cart.description=item1.description;
    this.cart.remarks=item1.remarks;
    this.cart.img=item1.image;
    console.log(this.cart);
    this.service.AddtoCart(this.cart).subscribe(res=>{
      console.log("Record added To Cart");
      alert('Item has been Added To Cart');
    })
}
}
