import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from "@angular/forms";
import {Category} from 'src/app/Models/category';
import {AdminService} from 'src/app/Services/admin.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
categoryId:string;
categoryName:string;
bd:string;
addcatform:FormGroup;
submitted:boolean=false;
list:Category[];
item:Category;
  constructor(private formBuilder:FormBuilder,private service:AdminService) { }

  ngOnInit() {
    this.addcatform=this.formBuilder.group({
      categoryName:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9]{3,20}$')]],
      bd:['']
    });
    
  }
  onSubmit()
  {
    
    this.submitted=true;
    //display form values on success
    if(this.addcatform.valid) {
      alert('SUCCESS!! :-)\n\n')
      console.log(JSON.stringify(this.addcatform.value));
    }
    this.Add();
  }
  onReset()
  {
    this.submitted=false;
    this.addcatform.reset();
  }
get f()
{
  return this.addcatform.controls;
}
Add()
{
  this.item=new Category();
  this.item.categoryId='C'+Math.floor(Math.random()*100);
  this.item.categoryName=this.addcatform.value["categoryName"];
  this.item.BriefDetails=this.addcatform.value["bd"];
  console.log(this.item);
  this.service.AddCategory(this.item).subscribe(res=>{
    console.log('Added')
  },err=>{
    console.log(err)
  

  })
}
Delete()
{
  let id=this.addcatform.value["categoryId"];
  this.service.DeleteCategory(id).subscribe(res=>{
    console.log('Record deleted');
  },err=>{
    console.log(err);
  })
}
}
