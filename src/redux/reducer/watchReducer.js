import { SELL_WATCH } from "../types"

const initialState ={
    numberOfWatch:500
}


const watchReducer = (state = initialState,action) =>{
    switch (action.type) {
        case SELL_WATCH:
            return{...state,numberOfWatch: state.numberOfWatch - action.payload}
        default:
            return state;
    }
}




export default watchReducer