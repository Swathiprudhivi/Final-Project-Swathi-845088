import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import {Observable} from "Rxjs";
import {Seller} from 'src/app/Models/seller';
const Requestheaders={headers:new HttpHeaders({
  'Content-Type':'application/json',
  'Authorization':'Bearer'+localStorage.getItem('token')
})}
@Injectable({
  providedIn: 'root'
})
export class SellerService {
  url:string='http://localhost:57775/Seller/'
  constructor(private http:HttpClient) { }
  public ViewProfile(id:string):Observable<any>{
    return this.http.get<Seller>(this.url+'ViewProfile/'+id,Requestheaders);
}
public EditProfile(seller:Seller):Observable<any>
  {
    return this.http.put<any>(this.url+'EditProfile',JSON.stringify(seller),Requestheaders);
  }
  public GetProfile(id:string):Observable<Seller>
  {
    return this.http.get<Seller>(this.url+'ViewProfile/'+id,Requestheaders);
  }
}
