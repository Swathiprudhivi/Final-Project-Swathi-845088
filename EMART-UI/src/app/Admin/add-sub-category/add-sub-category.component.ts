import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from "@angular/forms";
import {SubCategory} from 'src/app/Models/sub-category';
import {AdminService} from 'src/app/Services/admin.service';
import { Category } from 'src/app/Models/category';

@Component({
  selector: 'app-add-sub-category',
  templateUrl: './add-sub-category.component.html',
  styleUrls: ['./add-sub-category.component.css']
})
export class AddSubCategoryComponent implements OnInit {
  subcategoryForm:FormGroup;
  submitted=false;
  subcategory:SubCategory;
  subcategorylist:SubCategory[];
  categorylist:Category[];
  constructor(private fromBuilder:FormBuilder,private service: AdminService) {
     this.GetCategories();
     }



  
  ngOnInit() {
    this.subcategoryForm=this.fromBuilder.group({
     
      subcategoryName:['',[Validators.required,Validators.pattern('^[a-zA-Z]{3,15}$')]],
      // CategoryId:['',[Validators.required,Validators.pattern("^[0-9]{1,5}$")]],
      GST:['',[Validators.required,Validators.pattern('^[0-9]{5}$')]],
      BriefDetails:[''],
      categoryName:['']

    
    });
   
  }


  get f()
  {
    return this.subcategoryForm.controls;

  }
  
  onSubmit()
  {
    this.submitted=true;
    //display from values on sucess
    if(this.subcategoryForm.valid)
    {
      alert('sucess!!!!!!')
      // console.log(JSON.stringify(this.subcategoryForm.value));
    }
    this.Add();
  }
    onReset()
    {

    this.submitted=false;
    this.subcategoryForm.reset();
    }

   GetCategories()
   {
     this.service.GetCategory().subscribe(res=>
      {
        this.categorylist=res;
        console.log(this.categorylist);
      },
      err=>
      {
        console.log(err);
      })
    }
   
   
    Add()
    {

      this.subcategory=new SubCategory();
      this.subcategory.subcategoryId='SC'+Math.floor(Math.random()*100);
      this.subcategory.subcategoryName=this.subcategoryForm.value["subcategoryName"];
      this.subcategory.categoryId=(this.subcategoryForm.value["categoryName"]);
      this.subcategory.BriefDetails=this.subcategoryForm.value["BriefDetails"];
      this.subcategory.GST=this.subcategoryForm.value["GST"];
      this.service.AddSubCategory(this.subcategory).subscribe 
      (
        res=>
        {
          console.log(this.subcategory)
          console.log('Record Added');
        },
        err=>
        {
          console.log(err);
        }
      )
    }
  
}
