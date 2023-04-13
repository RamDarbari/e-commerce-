export interface signUp{
    username: string;
    email: string;
    number: number
    password: string;
    password2: string;

}

export interface login {
    // username: string;
    emailAddress: string;
    password: number;
    // passsword2:number;  
    

}

export interface admin {
    name: string
}

export interface product {
    name: string;
    brand: string;
    category_id: string
    desc: string;
    price: string   ;
    quantity: number;
    image: string,
    _id: string  
    subCategoryName: string
    url: string
    subCategoryId: string;
}


export interface category {
    // id: string;
    category: string;
    categoryName: string;
    url: string
    _id: string
    // subcategories?: subCategory[];
  }
   
 export interface product1 {
    // _id: string;
    categoryId: string;
    url: string
    subCategoryName: string;
    _id: string
  }
  