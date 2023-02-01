import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import './App.css';
import { reset, showExpre, resetViewNum,changeViewNum} from './redux/calcSlice';



function App() {
  const dispatch=useDispatch();
  
const newNumber=useSelector((state)=>state.calc.viewNum)
  const newDisplay=useSelector((state)=>state.calc.showDisplay)
 


  

 let addToExpre=(x)=>{
 dispatch(changeViewNum(x))  
 }
 
 let addToExpre2=(x)=>{

  dispatch(changeViewNum(x));
  dispatch(resetViewNum(x))
  
 }

 let showResult=()=>{
  dispatch(resetViewNum());
  ;
  dispatch(showExpre())
  
  
 }

  return (
    <div className="App">
      
        <h1>Calculator</h1>
        <span  id="display"  >
        
        <h2>{newDisplay}</h2>
        </span>
        
        <div >
        
        
        <p>{newNumber}</p>
          
        </div>
      <div className='App-main'>
          <button id="zero" onClick={()=>addToExpre("0")}>0</button>
          <button id="one" onClick={()=>addToExpre("1")}>1</button>
          <button id="two" onClick={()=>addToExpre("2")}>2</button>
          <button id="three" onClick={()=>addToExpre("3")}>3</button>
          <button id="four" onClick={()=>addToExpre("4")}>4</button>
          <button id="five" onClick={()=>addToExpre("5")}>5</button>
          <button id="six" onClick={()=>addToExpre("6")}>6</button>
          <button id="seven" onClick={()=>addToExpre("7")}>7</button>
          <button id="eight" onClick={()=>addToExpre("8")}>8</button>
          <button id="nine" onClick={()=>addToExpre("9")}>9</button>
        <button id ="add" onClick={()=>addToExpre2("+")}>+</button>
        <button id="subtract" onClick={()=>addToExpre2("-")}>-</button>
        <button id ="divide" onClick={()=>addToExpre2("/")}>/</button>
        <button id="multiply" onClick={()=>addToExpre2("*")}>X</button>
        <button id="decimal" onClick={()=>addToExpre(".")}>.</button>
        <button id="equals"onClick={showResult}>=</button>
        <button id="clear"onClick={()=>dispatch(reset())}>Reset</button>
        </div>
    </div>
  );
}

export default App;
