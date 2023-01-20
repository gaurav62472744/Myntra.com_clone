import { SIGN_UP_SUCCESS } from "./actionTypes"

const initialState={
    signupData:{}
}

export const reducer=(state=initialState,action)=>{
    const {type,payload}=action

    switch(type){

        case SIGN_UP_SUCCESS:{
            return {
                ...state
            }
        }

        default:
            return state
    }

}
