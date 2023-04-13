import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { product } from 'src/app/data';
import { AddproductsService } from 'src/app/services/addproducts.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  productList: product[] = [];
  subCategoryId: any | any
  categoryId: any | null



  ngOnInit(): void {
    this.subCategoryId = this.route.snapshot.queryParams['subCategoryId'];
    this.getProduct(this.categoryId,this.subCategoryId);
  }
  constructor(private _route: Router, private route: ActivatedRoute, private _product: AddproductsService) { }


  getProduct(subCategoryId: any,categoryId: any ){
    try{
     this._product.getProduct(categoryId!,subCategoryId!).subscribe(result=>{
      this.productList = result
      console.log(this.productList);
      
     })
    }catch(error){
      console.log(error)
    }
  }
  addToCart(){
    
  }
}
