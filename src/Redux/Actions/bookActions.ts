import { Books } from "../../interfaces";

export const ADD_TO_READING_LIST = "ADD_TO_READING_LIST";

export const REMOVE_FROM_READING_LIST = "REMOVE_FROM_READING_LIST";

export const ADD_TO_COMPLETED_LIST = "ADD_TO_COMPLETED_LIST";

export const LOAD_LOCAL_DATA = "LOAD_LOCAL_DATA";

export type ID = number | string;

export const addToReadingList = (id: ID) => ({
  type: ADD_TO_READING_LIST,
  id: id,
});

export const removeFromReadingList = (id: ID) => ({
  type: REMOVE_FROM_READING_LIST,
  id,
});

export const addToCompletedList = (id: ID) => ({
  type: ADD_TO_COMPLETED_LIST,
  id,
});

export const loadLocalData = (books: Books) => ({
  type: LOAD_LOCAL_DATA,
  payload: books,
});
