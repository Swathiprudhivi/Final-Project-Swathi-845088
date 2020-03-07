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
item:Seller;
  constructor(private formBulider:FormBuilder,private service:SellerService) {
    let id1=localStorage.getItem('sellerId');
  console.log(id1);
  this.service.GetProfile(id1).subscribe(res=>{
    this.item=res;
    console.log(this.item);
    this.editForm.patchValue({
      sellerId:this.item.sellerId,
      userName:this.item.userName,
      password:this.item.password,
      companyName:this.item.companyName,
      gstin:this.item.gstin,
      briefDetails:this.item.briefDetails,
      postalAddress:this.item.postalAddress,
      website:this.item.website,
      emailId:this.item.emailId,
      mobileNo:this.item.mobileNo,
      
    })
  })
   }

  ngOnInit() {
    this.editForm=this.formBulider.group({
      sellerId:[''],
      userName:['',[Validators.required,Validators.pattern('^[a-zA-Z]{3,6}$')]],
      mobileNo:['',[Validators.required,Validators.pattern("^[6-9][0-9]{9}$")]],
      emailId:[''],
      password:['',[Validators.required,Validators.minLength(6)]],
      companyName:[''],
      gstin:[''],
      briefDetails:[''],
      postalAddress:[''],
      website:['']
      
    });
  }
  onSubmit()
  {
    this.submitted=true;
    
  
    }
  get f() {return this.editForm.controls;}

onreset()
{
this.submitted=false;
this.editForm.reset();
}
EditProfile()
{
  this.item=new Seller();
  this.item.sellerId=this.editForm.value["sellerId"];
  this.item.userName=this.editForm.value["userName"];
  this.item.password=this.editForm.value["password"];
  this.item.emailId=this.editForm.value["emailId"];
  this.item.mobileNo=this.editForm.value["mobileNo"];
  this.item.companyName=this.editForm.value["companyName"];
  this.item.briefDetails=this.editForm.value["briefDetails"];
  this.item.gstin=this.editForm.value["gstin"];
  this.item.postalAddress=this.editForm.value["postalAddress"];
  this.item.website=this.editForm.value["website"];
  console.log(this.item);
  this.service.EditProfile(this.item).subscribe(res=>
    {
      console.log('Record Updated');
    })
}
}
