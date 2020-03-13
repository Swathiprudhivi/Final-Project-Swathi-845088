import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators } from "@angular/forms";
import { Router } from '@angular/router';
@Component({
  selector: 'app-seller-landing-page',
  templateUrl: './seller-landing-page.component.html',
  styleUrls: ['./seller-landing-page.component.css']
})
export class SellerLandingPageComponent implements OnInit {
  loginForm:FormGroup;
  submitted=false;
  constructor(private formbuilder:FormBuilder, private route:Router) { 
    if(!(localStorage.getItem('token1'))){
      this.route.navigateByUrl('/home');
    }
  }

  ngOnInit() {
    this.loginForm=this.formbuilder.group({
      id:['',Validators.required],
      pwd:['',Validators.required]
    });
  }
  onSubmit()
  {
    this.submitted=true;
    if(this.loginForm.invalid)
    {
      return;
    }
    else
    {
      alert("Form is validated");
      console.log(this.loginForm.value)//return java script object
      console.log(JSON.stringify(this.loginForm.value))//return json object
      console.log(this.loginForm.value["id"])
      console.log(this.loginForm.value["pwd"])
    }
  }
  get f() { return this.loginForm.controls;}
  onreset()
  {
    this.submitted=false;
    this.loginForm.reset();
  }
  Logout()
  {
    localStorage.clear();
    localStorage.removeItem('buyerid');
    localStorage.removeItem('sellerId');
    localStorage.removeItem('token1');
    this.route.navigateByUrl('/home');
  }
}
