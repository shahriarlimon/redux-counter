import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { counterDecrement, counterIncrement, counterReset } from '../../Services/counterAction';

export default function Counter() {
    const count = useSelector(state=>state.count);
    const dispatch = useDispatch();
    const handleIncremant = ()=>{
        dispatch(counterIncrement())
    }
    const handleReset = ()=>{
        dispatch(counterReset())
    };
    const handleDecrement = ()=>{
        dispatch(counterDecrement())
    }
  return (
    <div>
      <h2>Count: {count} </h2>
      <button onClick={ handleIncremant}>Increment</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}
