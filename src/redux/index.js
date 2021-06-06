import { createStore, combineReducers} from 'redux'
import laptopReducer from "./reducer/laptopreducer"
import phoneReducer from "./reducer/phoneReducer"
import watchReducer from './reducer/watchReducer'


const rootReducer = combineReducers({
    laptop: laptopReducer,
    phone: phoneReducer,
    watch: watchReducer
    
})

const store = createStore(rootReducer)

export default store