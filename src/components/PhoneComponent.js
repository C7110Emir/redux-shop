import React from 'react'
import { useSelector, useDispatch} from "react-redux"
import { sellphone } from '../redux/actions'

const PhoneComponent = () => {
    const numberOfPhones = useSelector((state)=> state.phone.numberOfPhones)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>REDUX AFTER HOOKS</h1>
            <h1>Phones {numberOfPhones}</h1>
            <button onClick ={() => dispatch(sellphone())}>Sell Phone</button>
        </div>
    )
}


export default PhoneComponent