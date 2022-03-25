import React,{useState} from 'react';
import './App.css';
const Hello = () => {
  const [input,setInput]=useState('');
  const [result,setResult]=useState(0);
  const changeHandler = e=>{
    setInput(e.target.value);
  }
  return (
    <div className='div'>
      <center>
        <input type="text" value={input} name="input" onChange={changeHandler} size="40" /><br />
        <button onClick={()=>setResult(eval(input))}>Result</button><br />
        <h2>The result is <u>{result}</u></h2>
        <button onClick={()=>setInput(input+'1')}>1</button>
        <button onClick={()=>setInput(input+'2')}>2</button>
        <button onClick={()=>setInput(input+'3')}>3</button>
        <button onClick={()=>setInput(input+'4')}>4</button>
        <button onClick={()=>setInput(input+'5')}>5</button><br />
        <button onClick={()=>setInput(input+'6')}>6</button>
        <button onClick={()=>setInput(input+'7')}>7</button>
        <button onClick={()=>setInput(input+'8')}>8</button>
        <button onClick={()=>setInput(input+'9')}>9</button>
        <button onClick={()=>setInput(input+'0')}>0</button><br />
        <button onClick={()=>setInput(input+'+')}>+</button>
        <button onClick={()=>setInput(input+'-')}>-</button>
        <button onClick={()=>setInput(input+'/')}>/</button>
        <button onClick={()=>setInput(input+'*')}>*</button>
        <button onClick={()=>setInput('')}>clr</button>
      </center>
    </div>
  )
}

export default Hello