import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Addbook from './components/Addbook';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewBook from './components/ViewBook';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
     <Route path="/" exact element={<Login/>}/>
     <Route path="/register" exact element={<Register/>}/>
      <Route path="/add" exact element={<Addbook/>}/>
     
      <Route path="/view" exact element={<ViewBook/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
