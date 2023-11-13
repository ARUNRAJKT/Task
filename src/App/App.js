import React from 'react';
import Loginpage from '../Pages/loginPage';
import Search from '../Pages/productSearchPage';
import Suggest from '../Pages/suggestPage'
import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

function App() {
  return ( 
    <Router>
      <Routes>
          <Route path='/' element={<Loginpage/>}></Route>
          <Route path='/Search' element={<Search/>}></Route>
          <Route path='/Suggest' element={<Suggest/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
