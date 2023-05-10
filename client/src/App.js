import './App.css';
import { useState } from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Login from './components/Login';
import Register from './components/Register';
import CreateGrocery from './components/GroceryBag';


function App() {
  const [grocery, setGrocery] = useState({
    groceryItem:'',
    quantity: 0
  })
  const [errors, setErrors] = useState({})
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/createGrocery' element={<CreateGrocery/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;