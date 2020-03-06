import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from "@angular/forms";
import {Items} from 'src/app/Models/items';
import {Router} from '@angular/router';
import {ItemService} from 'src/app/Services/item.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-view-items',
  templateUrl: './view-items.component.html',
  styleUrls: ['./view-items.component.css']
})
export class ViewItemsComponent implements OnInit {
viewitemsform:FormGroup;
submitted:boolean=false;
isShow:boolean=true;
list:Items[];
item:Items;
  constructor(private formBulider:FormBuilder,private service:ItemService,private route:Router) { 
    this.service.ViewItems().subscribe(res=>{
      this.list=res;
      console.log(this.list);
    },err=>{
      console.log(err);
    })
  }
  

  ngOnInit() {
    this.viewitemsform=this.formBulider.group({
      categoryId:[''],
      subcategoryId:[''],
      remarks:[''],
      itemId:[''],
      itemName:[''],
      price:[''],
      stockNumber:[''],
      description:[''],
      sellerId:[''],
      image:['']
    });
  }
onSubmit()
{
  this.submitted=true;
  
}
get f()
{
  return this.viewitemsform.controls;
}
onReset()
{
  this.submitted=false;
  this.viewitemsform.reset();
}
Logout()
{
  this.route.navigateByUrl('/login');
}
Delete(ItemId:string)
{
  this.service.DeleteItem(ItemId).subscribe(res=>{
    console.log("Record Deleted");
  },err=>{
    console.log(err);
  })
}
Search1(){
  this.isShow=!this.isShow;
}
Search()
{
  // this.isShow=!this.isShow;
   let id1=this.viewitemsform.value["itemId"];
  console.log(id1);
  this.service.GetItem(id1).subscribe(res=>{
    this.item=res;
    console.log(this.item);
    this.viewitemsform.setValue({
      itemId:this.item.itemId,
      categoryId:this.item.categoryId,
      subcategoryId:this.item.subcategoryId,
      sellerId:this.item.sellerId,
       itemName:this.item.itemName,
      price:this.item.price,
      description:this.item.description,
      stockNumber:this.item.stockNumber,
      remarks:this.item.remarks
    })
  })
}
  Update()
  {
    this.item=new Items();
    this.item.sellerId=this.viewitemsform.value["sellerId"];
    this.item.itemId=this.viewitemsform.value["itemId"];
    this.item.categoryId=(this.viewitemsform.value["categoryName"]);
    this.item.subcategoryId=(this.viewitemsform.value["subcategoryName"]);
    this.item.price=this.viewitemsform.value["price"];
    this.item.itemName=this.viewitemsform.value["itemName"];
    this.item.description=this.viewitemsform.value["description"];
    this.item.stockNumber=this.viewitemsform.value["stockNumber"];
    this.item.remarks=this.viewitemsform.value["remarks"];
    console.log(this.item);
    this.service.UpdateItem(this.item).subscribe(res=>{
      console.log('Item Updated')
    })
  }

}
