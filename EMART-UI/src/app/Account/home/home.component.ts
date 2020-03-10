import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators } from "@angular/forms";
import { Token } from 'src/app/Models/token';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/Serviecs/account.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  login: FormGroup;
  submitted = false;
  userName:string;
  password:string;
  msg:string;
  
  
  role: any;
  token:Token;
  constructor(private formBuilder: FormBuilder,private route:Router,private service:AccountService) { }
  ngOnInit() {
    this.login = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      role:['']
  });
  }
// convenience getter for easy access to form fields
get f() { return this.login.controls; }

onSubmit() {
    this.submitted = true;
    this.Validate();
     // display form values on success
     }

onReset() {
    this.submitted = false;
    this.login.reset();
}
public Validate()
{
  let userName=this.login.value['userName'];
  let password=this.login.value['password'];
  let role=this.login.value['role'];
  this.token=new Token();
  // alert(username)
  // alert(role)
  if(role=='buyer')
  {
    this.service.BuyerLogin(userName,password).subscribe(res=>{
      console.log(res);
      this.token=res;
      console.log(this.token);
      localStorage.setItem('token',this.token.token);
      localStorage.setItem('buyerId',this.token.buyerId);
      if(this.token.msg=='Success'){
          this.route.navigateByUrl('/buyer');
      }
      else{
        alert('Invalid Credentials');
      }
    });
  }
if(role=='seller')
{
 
this.service.SellerLogin(userName,password).subscribe(res=>{
  console.log(res);
  this.token=res;
  console.log(this.token);
  localStorage.setItem('token',this.token.token);
  localStorage.setItem('sellerId',this.token.sellerId);
  if(this.token.msg=="Success"){
    this.route.navigateByUrl("/seller")
  }
  else{
    alert('inavlid  Credentials');
  }
});

}
if(role=='')
{
  localStorage.setItem('token',this.token.token);
if(userName=="Admin" && password=="admin")
{
  this.route.navigateByUrl("/admin");
}
else
{
  alert('invalid credentials');
}
}

}
//Navigate()
//{
  //switch(this.role){
    //case "buyer":
      ///this.route.navigateByUrl("buyerindex");
      //break;
      //case "seller":
      //this.route.navigateByUrl("sellerindex");
      //break;
      //case "admin":
      //this.route.navigateByUrl("adminindex");
      //break;
     // default:
      //  alert("invalid credentials");

// }
//}

}