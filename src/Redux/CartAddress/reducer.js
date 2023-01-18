import { ADD_ADDRESS_SUCCESS, GET_ADDRESS_SUCCESS } from "./actionTypes"


const initialState={
   isLoading:false,
   isError:false,
   address:[]
}


const reducer=(state=initialState,action)=>{
    const {type,payload}=action
    switch(type){

        case ADD_ADDRESS_SUCCESS:{
            const newData=[...state.address,payload]
            return {
                ...state,address:newData
            }
        }

        case GET_ADDRESS_SUCCESS:{
            return {
                ...state,address:payload
            }
        }

        default:
            return state
    }
}

export {reducer}