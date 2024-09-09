export type Name = "name" | "email" | "password";

export interface IInputAuth {
  name: Name;
  placeholder: string;
}

export interface FormDataSignUp {
  name: string;
  email: string;
  password: string;
}

export interface FormDataSignIn {
  email: string;
  password: string;
}

export interface IFormData {
  name?: string;
  email: string;
  password: string;
}

export interface User {
  name: string;
  email: string;
  token: string;
}

export interface INewWord {
  en: string;
  ua: string;
  category: string;
  isIrregular?: boolean;
}

export interface ICreateNewWord {
  _id: string;
  en: string;
  ua: string;
  category: string;
  isIrregular: boolean;
  owner: string;
  progress: number;
}

export interface IUserWords {
  results: ICreateNewWord[];
  totalPages: number;
  page: number;
  perPage: number;
}

export interface IEditWord extends INewWord {
  id: string;
}

export interface IDeleteWord {
  message: string;
  id: string;
}

export interface ITasksWord {
  _id: string;
  ua: string;
  task: string;
  en: string;
}

export interface ITasksWordsUser {
  tasks: ITasksWord[];
}

export interface IAnswersWords extends ITasksWord {
  en: string;
}

export interface ICheckingResultTasks extends ITasksWord {
  isDone: boolean;
}
