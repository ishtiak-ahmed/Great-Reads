import { UserAction, IUser } from "../../interfaces"
import { LOAD_USER, LOG_OUT } from "../Actions/userActions"

const userState: IUser = {
    id: 'tomas',
    name: 'Tomas Sawyer',
    email: 'tomas@sawyer.com'
}

const userReducers = (state = userState, action: UserAction) => {
    switch(action.type){
        case LOAD_USER:
            return action.payload;
        case LOG_OUT:
            return {};
        default:
            return state;
    }
}
export default userReducers;
