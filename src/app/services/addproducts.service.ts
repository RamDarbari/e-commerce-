import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { category, product, product1 } from '../data';
import axios from 'axios';
import { Observable, from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AddproductsService {

  constructor(private _http: HttpClient) { }

  addProduct(data: product){
    return this._http.post('http://10.8.10.244:3000/product/addproduct', data);
  }
  
  productList(){
    return this._http.get<product[]>('http://10.8.10.81:3000/product/getProduct/');
  };
  deleteProduct(id: string){
    return this._http.post( `http://10.8.10.244:3000/product/deleteproduct?_id=${id}`,{_id: id})
  };
  updateProduct(id: string){
   return this._http.post(`http://10.8.10.244:3000/product/updateproduct?_id=${id}`, {_id: id})
  };
  categoriesList(){
   return this._http.get<any>('http://10.8.10.81:3000/category/getCategory')
  };
  getSubCategories(id: string) {
    return  this._http.get<product1[]>(`http://10.8.10.81:3000/category/subcategory/getSubCategory?_id=${id}`)
  };
  addToCart() {
    // this._http.post('http://10.8.10.244:3000/cart/addToCart')
  }
}
