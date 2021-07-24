import { BookAction, Books } from "../../interfaces";
import {
  ADD_RATING,
  ADD_TO_COMPLETED_LIST,
  ADD_TO_READING_LIST,
  LOAD_LOCAL_DATA,
  REMOVE_FROM_READING_LIST,
} from "../Actions/bookActions";
import data from "../FakeData/data";

const books: Books = {
  all: data,
};

const bookReducers = (state = books, action: BookAction) => {
  switch (action.type) {
    case LOAD_LOCAL_DATA:
      return action.payload;
    case ADD_TO_READING_LIST:
      const newList = state.all.map((book) => {
        if (book.id === action.id) {
          return { ...book, status: "readList" };
        }
        return book;
      });
      console.log("saving to local storage 2");
      localStorage.setItem("data", JSON.stringify({ ...state, all: newList }));
      return { ...state, all: newList };
    case REMOVE_FROM_READING_LIST:
      const updated = state.all.map((book) => {
        if (book.id === action.id) {
          return { ...book, status: "allList" };
        }
        return book;
      });
      return { ...state, all: updated };
    case ADD_TO_COMPLETED_LIST:
      const updateList = state.all.map((book) => {
        if (book.id === action.id) {
          return { ...book, status: "done" };
        }
        return book;
      });
      return { ...state, all: updateList };
    case ADD_RATING:
      const updateRating = state.all.map((book) => {
        if (book.id === action.payload.id) {
          return { ...book, rating: [...book.rating, action.payload.rating] };
        } else {
          return book;
        }
      });
      return { ...state, all: updateRating };
    default:
      return state;
  }
};

export default bookReducers;
