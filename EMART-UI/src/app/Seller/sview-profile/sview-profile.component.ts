import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from "@angular/forms";
import {SellerService} from 'src/app/Services/seller.service';
import {Seller} from 'src/app/Models/seller';
import { ViewCartComponent } from 'src/app/Buyer/view-cart/view-cart.component';
@Component({
  selector: 'app-sview-profile',
  templateUrl: './sview-profile.component.html',
  styleUrls: ['./sview-profile.component.css']
})
export class SViewProfileComponent implements OnInit {
  editForm:FormGroup;
  submitted=false;
sellerId:string;
userName:string;
emailId:string;
password:string;
companyName:string;
gstin:string;
briefDetails:string;
mobileNo:string;
postalAddress:string;
website:string;
list:Seller[];
seller:Seller;
  constructor(private formBulider:FormBuilder,private service:SellerService) { }

  ngOnInit() {
    this.editForm=this.formBulider.group({
      sellerId:[''],
      userName:[''],
      emailId:[''],
      password:[''],
      companyName:[''],
      gstin:[''],
      briefDetails:[''],
      mobileNo:[''],
      postalAddress:[''],
      website:['']
      
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
    let id=this.editForm.value["sellerId"];
    this.service.ViewProfile(id).subscribe(res=>{
      this.seller=res;
      console.log(this.seller);
      this.editForm.patchValue({
        sellerId:this.seller.sellerId,
        userName:this.seller.userName,
        emailId:this.seller.emailId,
        password:this.seller.password,
        companyName:this.seller.companyName,
        gstin:this.seller.gstin,
        briefDetails:this.seller.briefDetails,
        mobileNo:this.seller.mobileNo,
        postalAddress:this.seller.postalAddress,
        website:this.seller.website
        
      })
    })
  }

}
