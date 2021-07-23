export interface BookAction {
  type: string;
  id: number | string;
  payload: IBook;
}

export interface IBook {
  id: number | string;
  name: string;
  author: string;
  genre: string;
  rating: number;
  description: string;
  image: string;
  status: string;
}

export interface Books {
  all: IBook[];
}

export interface RootState {
  books: Books;
  user: IUser;
}

export interface IUser {
  name: string;
  id: number | string;
  email: string;
}

export interface UserAction {
  type: string;
  payload: IUser;
}
