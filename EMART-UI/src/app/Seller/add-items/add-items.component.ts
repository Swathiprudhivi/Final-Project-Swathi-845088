import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from "@angular/forms";
import {Items} from 'src/app/Models/items';
import {Router} from '@angular/router';
import {ItemService} from 'src/app/Services/item.service';
import {Category} from 'src/app/Models/category';
import {SubCategory} from 'src/app/Models/sub-category';
import { from } from 'rxjs';
@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit {
  additemsForm:FormGroup;
  submitted=false;
  id:string;
  categoryId:string;
  subcategoryId:string;
  i_id:string;
  ItemName:string;
  price:number;
  name:string;
  image:string;
  stock:string;
  remark:string;
  description:string;
  categorylist:Category[];
  subcategorylist:SubCategory[];
item:Items;
  constructor(private formBulider:FormBuilder,private service:ItemService,private route:Router) { 
    this.service.GetCategory().subscribe(res=>{
      this.categorylist=res;
      console.log(this.categorylist);
    })
  }

  ngOnInit() {
    this.additemsForm=this.formBulider.group({
    
      i_id:[''],
      ItemName:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9]{3,20}$')]],
      price:['',[Validators.required,Validators.pattern('^[0-9]+$')]],
      stock:['',[Validators.required,Validators.pattern('^[0-9]+$')]],
      description:[''],
      remark:[''],
      categoryId:[''],
      subcategoryId:[''],
      image:['']
     
    });
  }
  
  onSubmit()
  {
    
    this.submitted=true;
    //display form values on success
    if(this.additemsForm.valid) {
      this.AddItem();
      alert('SUCCESS!! :-)\n\n')
      console.log(JSON.stringify(this.additemsForm.value));
    }
    // this.AddItem();
  }
  get f() {return this.additemsForm.controls;}
  onReset()
  {
    this.submitted=false;
    this.additemsForm.reset();
  }
  AddItem()
  {
    this.item=new Items();
    this.item.sellerId=localStorage.getItem('sellerId');
  this.item.categoryId=this.additemsForm.value["categoryId"];
  this.item.subcategoryId=this.additemsForm.value["subcategoryId"];
  this.item.itemId='I'+Math.floor(Math.random()*100);
  this.item.itemName=this.additemsForm.value["ItemName"];
  this.item.price=this.additemsForm.value["price"];
  this.item.remarks=this.additemsForm.value["remark"];
  this.item.stockNumber=this.additemsForm.value["stock"];
  this.item.description=this.additemsForm.value["description"];
  this.item.image=this.image;
  
  console.log(this.item);
  this.service.AddItem(this.item).subscribe(res=>{
    console.log('Item Added')
  },err=>{
    console.log(err)
  })
  }
  fileEvent(event)
  {
    this.image=event.target.files[0].name;
  }
  GetSubCategories()
  {
    let cid=this.additemsForm.value["categoryId"];
    console.log(cid);
    this.service.GetSubCategory(cid).subscribe(res=>{
      this.subcategorylist=res;
      console.log(this.subcategorylist);
    })
  }
 
 
  UpdateItem()
{
  this.item=new Items();
  this.item.sellerId=this.additemsForm.value["id"];
  this.item.categoryId=this.additemsForm.value["categoryId"];
  this.item.subcategoryId=this.additemsForm.value["subcategoryId"];
  this.item.itemId=this.additemsForm.value["i_id"];
  this.item.itemName=this.additemsForm.value["i_name"];
  this.item.price=this.additemsForm.value["price"];
  this.item.remarks=this.additemsForm.value["remark"];
  this.item.stockNumber=this.additemsForm.value["stock"];
  this.item.description=this.additemsForm.value["description"];
  console.log(this.item);
  this.service.UpdateItem(this.item).subscribe(res=>{
    console.log("Record Updated");
  })

}
DeleteItem()
{
  let id=this.additemsForm.value["i_id"];
  this.service.DeleteItem(id).subscribe(res=>{
    console.log('Record deleted');
  },err=>{
    console.log(err);
  })
}
}
