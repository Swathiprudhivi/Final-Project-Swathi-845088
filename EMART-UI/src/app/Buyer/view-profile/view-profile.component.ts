import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from "@angular/forms";
import {BuyerService} from 'src/app/Services/buyer.service';
import {Buyer} from 'src/app/Models/buyer';
import { from } from 'rxjs';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {
  editForm:FormGroup;
  submitted=false;
  userName:string;
    password:string;
    emailId:string;
    mobileNo:number;
    buyerId:string;
    createdDateTime:Date;
    list:Buyer[];
buyer:Buyer;
  constructor(private formBulider:FormBuilder,private service:BuyerService) { }

  ngOnInit() {
    this.editForm=this.formBulider.group({
      buyerId:[''],
      userName:[''],
      emailId:[''],
      password:[''],
      mobileNo:[''],
      createdDateTime:['']
      
    });
  
  }
  onSubmit()
  {
    this.submitted=true;
    this.View();
  
    }
  get f() {return this.editForm.controls;}
  onreset()
  {
  this.submitted=false;
  this.editForm.reset();
  }
  View()
  {
    let id=this.editForm.value["buyerId"];
    this.service.ViewProfile(id).subscribe(res=>{
      this.buyer=res;
      console.log(this.buyer);
      this.editForm.patchValue({
        sellerId:this.buyer.buyerId,
        userName:this.buyer.userName,
        emailId:this.buyer.emailId,
        password:this.buyer.password,
        mobileNo:this.buyer.mobileNo,
        createdDateTime:this.buyer.createdDateTime       
        
      })
    })
  }
}
