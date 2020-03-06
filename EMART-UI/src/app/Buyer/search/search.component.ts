import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from "@angular/forms";
import {Buyer} from 'src/app/Models/buyer';
import { from } from 'rxjs';
import { BuyerService } from 'src/app/Services/buyer.service';
import {Items} from 'src/app/Models/items';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  buyerform:FormGroup;
  itemlist:Items[];
  item:Items[];
  itemName:string;
  constructor(private formbuilder:FormBuilder,private service:BuyerService) { }

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
}
