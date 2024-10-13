import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import CustomerReg from './Pages/CustReg';
import CustomerView from './Pages/CustView';
import CustomerEdit from './Pages/CustEdit';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/CustomerReg' element={<CustomerReg/>}></Route>
          <Route path='/CustomerView' element={<CustomerView/>}></Route>
          <Route path='/CustomerEdit/:id' element={<CustomerEdit/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
