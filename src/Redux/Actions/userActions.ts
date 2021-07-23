import { IUser } from "../../interfaces";

export const LOAD_USER = "LOAD_USER";

export const LOG_OUT = "LOG_OUT";

export const loadUser = (user: IUser) => ({
    type: LOAD_USER,
    payload: user
})

export const logOut = (id: string | number) => ({
    type: LOG_OUT,
    id,
})