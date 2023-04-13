import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { category, product, product1 } from '../data';
import axios from 'axios';
import { Observable, from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AddproductsService {
  categoryId: any | null
  subCategoryId: any | null;

  constructor(private _http: HttpClient) { 
  }
  addProduct(data: product){
    return this._http.post('http://10.8.10.244:3000/product/addproduct', data);
  }
  
  productList(){
    return this._http.get<product[]>('http://10.8.10.59:4000/items');
  };
  deleteProduct(id: string){
    return this._http.post( `http://10.8.10.244:3000/product/deleteproduct?_id=${id}`,{_id: id})
  };
  updateProduct(id: string){
   return this._http.post(`http://10.8.10.244:3000/product/updateproduct?_id=${id}`, {_id: id})
  };
  categoriesList(){
   return this._http.get<any>('http://10.8.10.59:4000/items/filter/')
  };
  getSubCategories(id: string) {
    this.categoryId = id
    localStorage.setItem('categoryId',id)
    return  this._http.get<product1[]>(`http://10.8.10.59:4000/items/filter/?categoryId=${id}`)

  };
  getProduct( subCategoryId: string,id: string){
    this.categoryId = localStorage.getItem('categoryId')
    return this._http.get<product[]>(`http://10.8.10.59:4000/items/filter/?categoryId=${this.categoryId}&subCategoryId=${subCategoryId}`)
  }
  addToCart() {
    // this._http.post('http://10.8.10.244:3000/cart/addToCart')
  }
}
