
import './App.css';
import { Input } from './component/Input';
import { Input2 } from './component/Input2';
import { Input3 } from './component/Input3';


function App() {
  return (
    <div className="App">
      <div className='input'>
        <h2>Прямой метод получения значения.</h2>
        <Input/> 
      </div>
      <div className='input'>
      <h2>Метод получения значения ключ-значение, т.е. в объект</h2>
        <Input2/>
      </div>
      <div className='input'>
      <h2>Метод получения с использованием Prev</h2>
        <Input3/>
      </div>
    </div>
  )
}

export default App;
