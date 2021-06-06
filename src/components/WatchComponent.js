import {React, useState} from 'react'
import { useSelector, useDispatch} from "react-redux"
import {sellwatch} from "../redux/actions"




const WatchComponent = () => {
    const [number, setNumber] = useState(1)
    const dispatch = useDispatch()
    const watchcount = useSelector((state) => state.watch.numberOfWatch)
    return (
        <div>
            <h1>REDUX PAYLOAD WITH HOOKS</h1>
            <h1>Watches {watchcount}</h1>
            <input value ={number} onChange={(e) => setNumber(e.target.value)}></input>
            <button onClick={()=> dispatch(sellwatch(number))}>Sell Watch</button>
        </div>
    )
}


export default WatchComponent;