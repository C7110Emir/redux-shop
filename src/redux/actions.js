import {SELL_COMP,SELL_LAPTOP,SELL_PHONE,SELL_WATCH} from "./types"


export const sellphone = () =>{
    return{
        type:SELL_PHONE
    }
}

export const selllaptop = () =>{
    return{
        type:SELL_LAPTOP
    }
}

export const sellwatch = (number = 1) =>{
    return{
        type:SELL_WATCH,
        payload:number
    }
}

export const sellcomp = (number=1) =>{
    return{
        type:SELL_COMP,
        payload:number

    }
}









