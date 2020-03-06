import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import {Observable} from "Rxjs";
import {Buyer } from '../Models/buyer';
import {Seller} from '../Models/seller';
const Requestheaders={headers:new HttpHeaders({
  'Content-Type':'application/json',
})}
@Injectable({
  providedIn: 'root'
})
export class AccountService {
  url:string='http://localhost:57775/Account/'

  constructor(private http:HttpClient) { }
  public BuyerRegister(buyer:Buyer):Observable<any>
  {
    return this.http.post(this.url+'BuyerRegister',JSON.stringify(buyer),Requestheaders);
  }
  public SellerRegister(seller:Seller):Observable<any>
  {
    return this.http.post(this.url+'SellerRegister',JSON.stringify(seller),Requestheaders);
  }
  public BuyerLogin(uname:string,pwd:string):Observable<any>{
    return this.http.get<any>(this.url+'BuyerLogin/'+uname+'/'+pwd,Requestheaders);
  }
  public SellerLogin(uname:string,pwd:string):Observable<any>{
    return this.http.get<any>(this.url+'SellerLogin/'+uname+'/'+pwd,Requestheaders);
  }
}
