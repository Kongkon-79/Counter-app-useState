import React, { useState } from 'react'


const CounterApp = () => {
    const[count, setCount] = useState(0);
    const Increment = ()=>{
        setCount((count)=>count+1);
    };
  return (
    <div>
        <h1>Counter App</h1>
        <div className="card">
            <h1 className='heading'>Count : {count}</h1>
            <button onClick={Increment} disabled={count===10? true:false}>+</button>
            <button onClick={()=> setCount((count)=> count-1)} disabled={count===-10? true:false}>-</button>
            <button className='btn3' onClick={()=> setCount((count)=> 0)}>Reset</button>
        </div>
    </div>
  )
}

export default CounterApp
