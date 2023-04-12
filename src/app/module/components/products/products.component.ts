import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { category } from 'src/app/data';
import { AddproductsService } from 'src/app/services/addproducts.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
  categoriesList: category[]= []
 ngOnInit(): void {
   this.getCategories();
 }
  constructor(private _product: AddproductsService, private _route: Router) {}

  getCategories() {
   try{
    this._product.categoriesList().subscribe(result=>{
      if(result){
          this.categoriesList = result;
      }
    })
   }catch(error){
    console.log(error);
   }
  }
  
  onClickCategories(category_id: string) {
    this._route.navigate(['/admin/subcategory'], { queryParams: { category_id } });
  }
  
}
