import { ActionType, Books } from "../../type";
import { ADD_TO_READING_LIST, REMOVE_FROM_READING_LIST } from "../Actions/bookActions";
const books: Books = {
 all: [
    {name: 'HP 1', id: 1, author: 'J. k. Rowling', rating: 4.9, description: 'This is the first book of Harry Potter'},
    {name: 'HP 2', id: 2, author: 'J. k. Rowling', rating: 4.9, description: 'This is the first book of Harry Potter'},
    {name: 'HP 3', id: 3, author: 'J. k. Rowling', rating: 4.9, description: 'This is the first book of Harry Potter'},
],
readingList: [],
done: []
}

const bookReducers = (state = books, action: ActionType) => {
    switch(action.type){
        case ADD_TO_READING_LIST:
            return state;
        case REMOVE_FROM_READING_LIST:
            return state;
        default:
            return state;
    }
}

export default bookReducers;