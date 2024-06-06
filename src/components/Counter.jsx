import React from 'react';
import { decrementAction, incrementAction, incrementByValueAction, resetAction } from '../actions';
import { useDispatch, useSelector } from 'react-redux';

function Counter(props) {
    const dispatch = useDispatch()
    const count = useSelector((state)=> state.count)
    return (
        <div>
         <h2>{count}</h2> 
         <button onClick={()=>{dispatch(incrementAction())}}>Increment</button>  
         <button onClick={()=>{dispatch(decrementAction())}}>Decrement</button>  
         <button onClick={()=>{dispatch(resetAction())}}>Reset</button>  
         <button onClick={()=>{dispatch(incrementByValueAction())}}>Increment by value</button>  

        </div>
    );
}

export default Counter;