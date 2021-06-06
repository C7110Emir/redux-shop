import {React,useState} from 'react'
import {connect} from 'react-redux'
import {sellcomp} from "../redux/actions"

const CompComponent = (props) => {
    const [number,setNumber] = useState(1)
    console.log(props)
    return (
        <div>
            <h1>REDUX PAYLOAD WITHOUT HOOKS</h1>
            <h1>Computer {props.numberOfComp}</h1>
            <input value={number} onChange={(e)=> setNumber(e.target.value)}></input>
            <button onClick={() => props.sellcomp(number)}>Sell Computer</button>
        </div>
    )
}
const mapStateToProps = (state)=>{
    return{
        numberOfComp:state.comp.numberOfComp
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        sellcomp: (number) => dispatch(sellcomp(number))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CompComponent)
