import { combineReducers } from "redux";
import bookReducers from './bookReducers';
import userReducers from "./userReducers";

export default combineReducers({
    books: bookReducers,
    user: userReducers
})
