import {SELL_COMP} from "../types"

const initialState ={
    numberOfComp: 424124
}


const compReducer = (state = initialState, action) =>{
    switch (action.type) {
        case SELL_COMP:
            return{...state,numberOfComp:state.numberOfComp - action.payload}
        default:
            return state;
    }
}



export default compReducer
