import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import {Observable, from} from "Rxjs";
import {SubCategory } from '../Models/sub-category';
import {Category} from '../Models/category';

const Requestheaders={headers:new HttpHeaders({
  'Content-Type':'application/json',
})}
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  
  url:string='http://localhost:57775/Admin/'
  constructor(private http:HttpClient) { }
  public AddCategory(category:Category):Observable<any>
  {
    return this.http.post(this.url+'AddCategory',JSON.stringify(category),Requestheaders);
  }
  public AddSubCategory(subcategory:SubCategory):Observable<any>
  {
    return this.http.post(this.url+'AddSubCategory',JSON.stringify(subcategory),Requestheaders);
  }
  public DeleteCategory(id:string):Observable<any>
  {
    return this.http.delete<Category>(this.url+'DeleteCategory/'+id,Requestheaders);
  }
  public DeleteSubCategory(id:string):Observable<any>
  {
    return this.http.delete<SubCategory>(this.url+'DeleteSubCategory/'+id,Requestheaders);
  }
  public GetCategory():Observable<Category[]>
  {
    return this.http.get<Category[]>(this.url+'GetCategory',Requestheaders);
  }
}
