import { type } from "@testing-library/user-event/dist/type";
import { types } from "../types/types";


export const authReducer = (state={}, action)=>{
    switch (action.type) {
        case types.login:
            return {
                ...state,
                logged: true,
                user: action.payload
            };

        case type.logout:
            return {
                logged: false,
            };
            
        default:
            return state;
    }
}