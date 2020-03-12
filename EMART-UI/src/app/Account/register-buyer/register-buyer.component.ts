import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from "@angular/forms";
import { Buyer } from 'src/app/Models/buyer';
import {AccountService} from 'src/app/Serviecs/account.service';
@Component({
  selector: 'app-register-buyer',
  templateUrl: './register-buyer.component.html',
  styleUrls: ['./register-buyer.component.css']
})
export class RegisterBuyerComponent implements OnInit {
  registerForm:FormGroup;
submitted=false;
id:string;
name:string;
pwd:string;
email:string;
pnnum:number;
dt:Date;
list:Buyer[];
item:Buyer;
  constructor(private formBulider:FormBuilder,private service:AccountService) { }

  ngOnInit() {
    this.registerForm=this.formBulider.group({
      
      name:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9]{3,20}$')]],
      phnum:['',[Validators.required,Validators.pattern("^[6-9][0-9]{9}$")]],
      email:['',[Validators.required,Validators.email]],
      pwd:['',[Validators.required,Validators.pattern('^a-zA-Z0-9`!@#$%^&*()_+=]{6,15}$')]],
      
     
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
    this.item=new Buyer();
    this.item.buyerId='B'+Math.floor(Math.random()*999);
    this.item.userName=this.registerForm.value["name"];
    this.item.emailId=this.registerForm.value["email"];
    this.item.password=this.registerForm.value["pwd"];
    this.item.mobileNo=this.registerForm.value["phnum"];
    this.item.createdDateTime=this.registerForm.value["dt"];
    console.log(this.item);
    this.service.BuyerRegister(this.item).subscribe(res=>{
      console.log('Registered')
    },err=>{
      console.log(err)
    })
    
  }
}
