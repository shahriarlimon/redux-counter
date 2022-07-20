import { DECREMENT, INCREMENT, RESET } from "./Constants"

export const counterIncrement = ()=>{
    return{
        type:INCREMENT
    }
};
export const counterReset = ()=>{
    return{
        type:RESET
    }
};
export const counterDecrement = ()=>{
    return{
        type:DECREMENT
    } 
};
