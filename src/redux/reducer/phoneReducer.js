import { SELL_PHONE } from "../types"

const initialState ={
    numberOfPhones:1000
}


const phoneReducer = (state = initialState,action) =>{
    switch (action.type) {
        case SELL_PHONE:
            return{...state,numberOfPhones: state.numberOfPhones -10}
        default:
            return state;
    }
}




export default phoneReducer