import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators } from "@angular/forms";
import { from } from 'rxjs';
import {AccountService} from 'src/app/Serviecs/account.service';
import {Router} from '@angular/router';
import { Buyer } from 'src/app/Models/buyer';
import { Seller } from 'src/app/Models/seller';
import { Token } from 'src/app/Models/token';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: FormGroup;
  submitted = false;
  userName:string;
  password:string;
  errmsg:string;
  buyer:Buyer;
  seller:Seller;
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
      localStorage.setItem('token3',this.token.token);
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
  console.log(res)
  this.token=res;
  console.log(this.token);
  localStorage.setItem('token1',this.token.token);
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
if(userName=="Admin" && password=="admin")
{
  localStorage.setItem('token2',this.token.token);
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
