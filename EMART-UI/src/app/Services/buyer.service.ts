import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import {Observable, from} from "Rxjs";
import {Buyer} from 'src/app/Models/buyer';
import { TransactionHistory } from '../Buyer/transaction-history';
import { Cart } from '../Models/cart';
const Requestheaders={headers:new HttpHeaders({
  'Content-Type':'application/json',
  'Authorization':'Bearer'+localStorage.getItem('token')
})}
@Injectable({
  providedIn: 'root'
})
export class BuyerService {
  url:string='http://localhost:57775/Buyer/'
  constructor(private http:HttpClient) { }
 
public SearchItems(name:string):Observable<any>
{
  return this.http.get<Buyer>(this.url+'SearchItem/'+name,Requestheaders);
}
public BuyItem(obj:TransactionHistory):Observable<any>{
  return this.http.post<any>(this.url+'BuyItem',obj,Requestheaders);
}
public EditProfile(buyer:Buyer):Observable<any>
  {
    return this.http.put<any>(this.url+'EditProfile',JSON.stringify(buyer),Requestheaders);
  }
  public GetProfile(id:string):Observable<Buyer>
  {
    return this.http.get<Buyer>(this.url+'ViewProfile/'+id,Requestheaders);
  }
  public AddtoCart(cart:Cart):Observable<any>{

    return this.http.post<any>(this.url+'AddtoCart',cart,Requestheaders);
  }
  public GetCartItems():Observable<any>
  {
    return this.http.get<any>(this.url+'GetCartItems',Requestheaders);
  }
  public RemoveCartItem(Id:string):Observable<any>
  {
    return this.http.delete<any>(this.url+'DeleteCartItems/'+Id,Requestheaders);
  }
  public GetPurchaseHistory(buyerid:string):Observable<any>
  {
    return this.http.get<any>(this.url+'TransactionHistory/'+buyerid,Requestheaders);
  }
  public GetCount(buyerid:string):Observable<any>
  {
    return this.http.get<any>(this.url+'GetCount/'+buyerid,Requestheaders);
  }
  public GetAllItems():Observable<any>{

    return this.http.get<any>(this.url+'GetAllItems',Requestheaders);
  }
}
