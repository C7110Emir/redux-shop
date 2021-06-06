import React from 'react'
import { connect } from "react-redux"
import { selllaptop } from '../redux/actions'

const Laptopcomponent = (props) => {
    console.log(props)
    return (
        <div>
            <h1>PURE REDUX BEFORE HOOKS</h1>
            <h1>Laptop {props.numberOfLaptops}</h1>
            <button onClick={props.sellLaptop}>Sell Laptop</button>
        </div>
    )
}
const mapStateToProps = (state) =>{
    return{
        numberOfLaptops:state.laptop.numberOfLaptops,
    }
}

const mapDispatchToProps =(dispatch) =>{
    return{
        sellLaptop: ()=> dispatch(selllaptop())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Laptopcomponent)

