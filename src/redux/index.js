import { createStore, combineReducers} from 'redux'
import compReducer from './reducer/compReducer'
import laptopReducer from "./reducer/laptopreducer"
import phoneReducer from "./reducer/phoneReducer"
import watchReducer from './reducer/watchReducer'


const rootReducer = combineReducers({
    laptop: laptopReducer,
    phone: phoneReducer,
    watch: watchReducer,
    comp: compReducer
    
})

const store = createStore(rootReducer)

export default store