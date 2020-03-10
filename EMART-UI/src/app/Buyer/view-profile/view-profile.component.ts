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
item:Buyer;
  constructor(private formBulider:FormBuilder,private service:BuyerService) { 
    let id1=localStorage.getItem('buyerId');
  console.log(id1);
  this.service.GetProfile(id1).subscribe(res=>{
    this.item=res;
    console.log(this.item);
    this.editForm.patchValue({
      buyerId:this.item.buyerId,
      userName:this.item.userName,
      password:this.item.password,
      emailId:this.item.emailId,
      mobileNo:this.item.mobileNo,
      createdDateTime:this.item.createdDateTime
    })
  })

  }

  ngOnInit() {
    this.editForm=this.formBulider.group({
      
        buyerId:['',Validators.required],
       userName:['',[Validators.required,Validators.pattern('^[a-zA-Z]{3,6}$')]],
        mobileNo:['',[Validators.required,Validators.pattern("^[6-9][0-9]{9}$")]],
       emailId:['',[Validators.required,Validators.email]],
        password:['',[Validators.required,Validators.minLength(6)]],
        createdDateTime:['']
      
    });
  
  }
  onSubmit()
  {
    this.submitted=true;
    
  
    }
  get f() {return this.editForm.controls;}
  onReset()
  {
  this.submitted=false;
  this.editForm.reset();
  }
  EditProfile()
{
  this.item=new Buyer();
  this.item.buyerId=this.editForm.value["buyerId"];
  this.item.userName=this.editForm.value["userName"];
  this.item.password=this.editForm.value["password"];
  this.item.emailId=this.editForm.value["emailId"];
  this.item.mobileNo=this.editForm.value["mobileNo"];
this.item.createdDateTime=this.editForm.value["createdDateTime"];

  console.log(this.item);
  this.service.EditProfile(this.item).subscribe(res=>
    {
      console.log('Record Updated');
    })
}
}
