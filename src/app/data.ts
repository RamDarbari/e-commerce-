export interface signUp{
    username: string;
    email: string;
    number: number
    password: string;
    password2: string;

}

export interface login {
    // username: string;
    email: string;
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
    subcategoryId: string;
}


export interface category {
    // id: string;
    category: string;
    name: string;
    image: string
    _id: string
    // subcategories?: subCategory[];
  }
   
 export interface product1 {
    _id: string;
    category_id: string;
    image: string
    name: string;
  }
  