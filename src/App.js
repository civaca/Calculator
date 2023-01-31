import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import './App.css';
import { showValue } from './redux/calcSlice';


function App() {
  const dispatch=useDispatch();
  const value=useSelector((state)=>state.calc.value)

  let handleClick=()=>{
    dispatch(showValue("Dios es bueno"))
    console.log(value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Calculator</h1>
        <button onClick={handleClick}>Sum 1</button>
        <h2>{value}</h2>
        <p>Loja</p>
      </header>
    </div>
  );
}

export default App;
