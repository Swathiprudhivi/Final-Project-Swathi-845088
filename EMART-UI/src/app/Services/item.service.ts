import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import {Observable, from} from "Rxjs";
import {Items} from '../Models/items';
import { Category } from '../Models/category';
import { SubCategory } from '../Models/sub-category';
const Requestheaders={headers:new HttpHeaders({
  'Content-Type':'application/json',
  'Authorization':'Bearer'+localStorage.getItem('token')
})}

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  url:string='http://localhost:57775/Item/'
  constructor(private http:HttpClient) { }
 
  public GetItem(id:string):Observable<Items>
  {
    return this.http.get<Items>(this.url+'GetItem/'+id,Requestheaders);
  }
  public AddItem(item:Items):Observable<any>
  {
    return this.http.post<any>(this.url+'AddItem',JSON.stringify(item),Requestheaders);
  }
  public UpdateItem(item:Items):Observable<any>
  {
    return this.http.put<any>(this.url+'UpdateItem',JSON.stringify(item),Requestheaders);
  }
  public DeleteItem(id:string):Observable<any>
  {
    return this.http.delete<Items>(this.url+'DeleteItem/'+id,Requestheaders);
  }
  public GetCategory():Observable<Category[]>
  {
    return this.http.get<Category[]>(this.url+'GetCategory',Requestheaders);
  }
  public GetSubCategory(id:string):Observable<SubCategory[]>
  {
    return this.http.get<SubCategory[]>(this.url+'GetSubCategory/'+id,Requestheaders);
  }
  public ViewItems():Observable<Items[]>
  {
    return this.http.get<Items[]>(this.url+'ViewItems',Requestheaders);
  }
  
}
