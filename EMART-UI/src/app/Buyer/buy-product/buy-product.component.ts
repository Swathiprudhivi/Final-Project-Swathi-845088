import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from "@angular/forms";
import {Buyer} from 'src/app/Models/buyer';
import { from } from 'rxjs';
import { BuyerService } from 'src/app/Services/buyer.service';
import {Items} from 'src/app/Models/items';

@Component({
  selector: 'app-buy-product',
  templateUrl: './buy-product.component.html',
  styleUrls: ['./buy-product.component.css']
})
export class BuyProductComponent implements OnInit {
buyerform:FormGroup;
item:Items[];
  constructor(private formbuilder:FormBuilder,private service:BuyerService) { }

  ngOnInit() {
    
  }

}
