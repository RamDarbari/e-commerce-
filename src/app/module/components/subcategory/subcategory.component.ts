import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { product1, product, } from 'src/app/data';
import { AddproductsService } from 'src/app/services/addproducts.service';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.scss']
})
export class SubcategoryComponent {
  product: product1[] = [];
  category_id: any | null;

  constructor(private _route: ActivatedRoute, private _product: AddproductsService) { }

  ngOnInit(): void {
    this.category_id = this._route.snapshot.queryParams['category_id'];
    // this.getSubcategories(this.category_id);
  }


  // getSubcategories(category_id: string | null) {
  //   try {
  //     this._product.getSubCategories(category_id!).subscribe(result => {
  //       if (result?.data) {
  //         console.log(result?.data, "result?.data")
  //         this.product = result?.data.filter((subcategory: product1) =>
  //           subcategory.category_id == category_id);
  //         console.log(this.product);

  //       }
  //     })
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

}
