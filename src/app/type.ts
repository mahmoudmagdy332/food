export type langInitialState = {
  lang: string;
  translations: { [key: string]: string };
  languageLoading: boolean;
};
export type settingInitialState = {
  lang: string;
  translations: { [key: string]: string };
  languageLoading: boolean;
};

export type User = {
  fname: string;
  lname: string;
  email: string;
  phone: string;
  image: string;
  age: string;
  address: string;
  zip: string;
  city: string;
  country: string;
  country_id:number;
  current_school: string;
  gender: string;
  status: string;
  wallet: number;
  points: number;
  survey_submited: boolean;
  is_premium: boolean;

};
export type UserState = {
  user: User | null;
  isPopup: boolean;
};
export type userInitialState = {
  user: User | null;
};
export type answerType = { survey_id: null | number; answer_id: null | number };
export type quesions = {
  id: number;
  title: string;
  answers: { id: number; image: string; title: string }[];
};
