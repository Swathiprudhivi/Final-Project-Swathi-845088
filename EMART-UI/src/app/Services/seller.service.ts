import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import {Observable} from "Rxjs";
import {Seller} from 'src/app/Models/seller';
const Requestheaders={headers:new HttpHeaders({
  'Content-Type':'application/json',
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

}
