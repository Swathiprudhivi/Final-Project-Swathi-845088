import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import {Observable, from} from "Rxjs";
import {Buyer} from 'src/app/Models/buyer';
const Requestheaders={headers:new HttpHeaders({
  'Content-Type':'application/json',
})}
@Injectable({
  providedIn: 'root'
})
export class BuyerService {
  url:string='http://localhost:57775/Buyer/'
  constructor(private http:HttpClient) { }
  public ViewProfile(id:string):Observable<any>{
    return this.http.get<Buyer>(this.url+'ViewProfile/'+id,Requestheaders);
}
public SearchItems(name:string):Observable<any>
{
  return this.http.get<Buyer>(this.url+'SearchItem/'+name,Requestheaders);
}
}
