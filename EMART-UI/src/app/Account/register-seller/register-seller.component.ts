import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from "@angular/forms";
import { Seller } from 'src/app/Models/seller';
import {AccountService} from 'src/app/Serviecs/account.service';
import { AddCategoryComponent } from 'src/app/Admin/add-category/add-category.component';
@Component({
  selector: 'app-register-seller',
  templateUrl: './register-seller.component.html',
  styleUrls: ['./register-seller.component.css']
})
export class RegisterSellerComponent implements OnInit {
  registerForm:FormGroup;
  submitted=false;
id:string;
name:string;
pwd:string;
email:string;
phnum:string;
companyname:string;
gst:string;
website:string;
pa:string;
briefdetails:string;
list:Seller[];
item:Seller;
  constructor(private formBulider:FormBuilder,private service:AccountService) { }

  ngOnInit() {
    this.registerForm=this.formBulider.group({
      
      name:['',Validators.required],
      phnum:['',[Validators.required,Validators.pattern("^[6-9][0-9]{9}$")]],
      email:['',[Validators.required,Validators.email]],
      pwd:['',[Validators.required,Validators.minLength(6)]],
      companyname:['',Validators.required],
      website:['',Validators.required],
      pa:['',Validators.required],
      briefdetails:['',Validators.required],
      gst:['',Validators.required]
     
    });
  }
  get f() {return this.registerForm.controls;}
  onSubmit()
  {
    
    this.submitted=true;
    //display form values on success
    if(this.registerForm.valid) {
      alert('SUCCESS!! :-)\n\n')
      console.log(JSON.stringify(this.registerForm.value));
    }
    this.Add();
  }
  onReset()
  {
    this.submitted=false;
    this.registerForm.reset();
  }
  Add()
  {
    this.item=new Seller();
    this.item.sellerId='B'+Math.floor(Math.random()*999);
    this.item.userName=this.registerForm.value["name"];
    this.item.password=this.registerForm.value["pwd"];
    this.item.companyName=this.registerForm.value["companyname"];
    this.item.gstin=this.registerForm.value["gst"];
    this.item.briefDetails=this.registerForm.value["briefdetails"];
    this.item.postalAddress=this.registerForm.value["pa"];
    this.item.website=this.registerForm.value["website"];
    this.item.emailId=this.registerForm.value["email"];
    this.item.mobileNo=this.registerForm.value["phnum"];
    console.log(this.item);
    this.service.SellerRegister(this.item).subscribe(res=>{
      console.log('Registered')
    },err=>{
      console.log(err)
    

    })

  }
}
