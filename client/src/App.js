import './App.css';
import { useState } from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Login from './components/Login';
import Register from './components/Register';
import EditGrocery from './components/EditGrocery';
import GroceryBag from './views/GroceryBag';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/' element={<GroceryBag/>}/>
          <Route path='/updateGrocery/:id' element={<EditGrocery/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;