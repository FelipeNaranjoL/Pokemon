import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router';
import Listado from './pages/listado';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Listado />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
