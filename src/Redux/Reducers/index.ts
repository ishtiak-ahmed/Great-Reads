import { combineReducers } from "redux";
import bookReducers from './bookReducers';

export default combineReducers({
    books: bookReducers,
})
