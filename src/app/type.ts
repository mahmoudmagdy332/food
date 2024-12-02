



export type setting = {
  logo: string;
  footer_logo: string;
  location: string;
  points_price: number | null;
  footer_description: string;
  contact:{
    phone:string,
    email: string,
    facebook:string,
    linkedin: string,
    x:string,
    instgram: string,
    address: string,
  },




};

export type category = {
  id: number;
  image: string;
  title: string;
  description:string,
};

export type settingType = {
  setting: setting | null;
  loading: boolean;
  categories: category[] | null;
  ricee:ingredient[],
  braeds:ingredient[],
  drinks:ingredient[],
  salads:ingredient[]
};

export type langInitialState = {
  lang: string;
  translations: { [key: string]: string };
  languageLoading: boolean;
};

export type IFormInput= {
  image: File |null;
  name: string;
  phone: string;
  email: string;
  age:number;
  gender:string;
  weight:number;
  cancer:number;
  asthma:number;
  heart_disease:number;
  hypertension:number;
  diabetes:number;
  address:string;
}
export type User = {
  image:  string|null;
  name: string;
  phone: string;
  email: string;
  age:number;
  gender:string;
  weight:number;
  cancer:number;
  asthma:number;
  heart_disease:number;
  hypertension:number;
  diabetes:number;
  address:string;
};

export type UserState = {
  user: User | null;
  orders:order[];
};

export type userUpdateData = {
  fname?: string;
  lname?: string;
  zip?: string;
  city?: string;
  school?: string;
  region?: string;
  age?: string;
  Address?: string;
  image?: File;
};

export type password = {
  current_password: string;
  new_password: string;
  new_password_confirmation: string;
};

export type userData = {
  name?: string;
  phone?: string;
  email?: string;
  password?: string;
  password_confirmation?: string;
  gender?: string;
  image?: File | null;
};


export interface IFormContuctInput {
  name: string;
  email: string;
  title: string;
  message: string;
  phone: string;
}
export interface IFormSuggestionInput {
  email: string;
  suggestion: string;

}

export type ingredient=
  {
    id: number,
    image: string,
    name: string,

}


export type meal = {
          id: 1,
          image:string,
          price: number,
          category_id: number,
          salad_id: number,
          rice_id: number,
          drink_id: number,
          bread_id: number,
          diabetes: boolean,
          hypertension: boolean,
          heart_disease: boolean,
          asthma: boolean,
          cancer: boolean,
          name:string,
          description:string,
          rice:ingredient,
          drink: ingredient,
          salad: ingredient,
          bread:ingredient
};


export type customizations={ 
  rice_id:number|undefined,
  bread_id:number|undefined,
  salad_id:number|undefined,
  drink_id:number|undefined,
 }
export type CartType={ 
  items:{meal:meal,quantity:number,customizations:customizations|null}[],
  items_count:number,
  cart_total:number
 }

 

 export type orderData={ 
  meals:{ 
    id: number,
    quantity: number,
    customizations:customizations|null
}[]
 }

 export type order={

  meal: {
      id:number;
      image:string;
      name:string;
      price:number;
      rice:string;
      salad:string;
      bread:string;
      drink:string;
  };
  quantity: number,
  customizations:{
    rice:string;
    salad:string;
    bread:string;
    drink:string;
  }
 }
 export type plan={
  id: number;
  disease: string;
  name: string;
  description:string;
 }