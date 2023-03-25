import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { get_numbers } from './numbers';
import './App.css';
import { reset, showExpre, resetViewNum,changeViewNum} from './redux/calcSlice';



function App() {
  const dispatch=useDispatch();
  const newNumber=useSelector((state)=>state.calc.viewNum)
  const newDisplay=useSelector((state)=>state.calc.showDisplay)
 // function on click
 let addToExpre=(x)=>{
 dispatch(changeViewNum(x))  
 }
 
 let addToExpre2=(x)=>{
  dispatch(changeViewNum(x));
  dispatch(resetViewNum(x)) 
 }

 let showResult=()=>{
  dispatch(resetViewNum());
  dispatch(showExpre());
    
 }
//New_feature

useEffect(()=>{
 get_numbers(addToExpre, addToExpre2,showResult);
 },[])


  return (
    <div className="App">
      
        <h1>Calculator</h1>
        <button id="all">
        <div id="head">
        <p id="smallDisplay">{newNumber}</p>
        <h2 id="display" >{newDisplay}</h2>
        </div>
      
      <div className='App-main' >
        <div id="numbers">
          <button id="zero" className='num' onClick={()=>addToExpre("0")}>0</button>
          <button id="one" className='num' onClick={()=>addToExpre("1")}>1</button>
          <button id="two" className='num'onClick={()=>addToExpre("2")}>2</button>
          <button id="three" className='num' onClick={()=>addToExpre("3")}>3</button>
          <button id="four" className='num' onClick={()=>addToExpre("4")}>4</button>
          <button id="five" className='num' onClick={()=>addToExpre("5")}>5</button>
          <button id="six"  className='num'onClick={()=>addToExpre("6")}>6</button>
          <button id="seven" className='num' onClick={()=>addToExpre("7")}>7</button>
          <button id="eight"  className='num' onClick={()=>addToExpre("8")}>8</button>
          <button id="nine" className='num'onClick={()=>addToExpre("9")}>9</button>
          </div>
          <div id="operation">
        <button id ="add" className='oper'onClick={()=>addToExpre2("+")}>+</button>
        <button id="subtract" className='oper' onClick={()=>addToExpre2("-")}>-</button>
        <button id ="divide" className='oper' onClick={()=>addToExpre2("/")}>/</button>
        <button id="multiply" className='oper' onClick={()=>addToExpre2("*")}>X</button>
        <button id="decimal" className='oper' onClick={()=>addToExpre(".")}>.</button>
        <button id="equals" className='oper' onClick={showResult}>=</button>
        <button id="clear" className='oper'onClick={()=>dispatch(reset())}>AC</button>
        </div>
        </div>
        </button>
  </div>
  );
}

export default App;
