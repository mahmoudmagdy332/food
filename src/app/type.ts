

export type ingredient={
  strIngredient:string,
  strDescription:string
}

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
};


type CartType=