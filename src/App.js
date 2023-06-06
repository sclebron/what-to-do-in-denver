import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.js';
import Questionnaire from './pages/questionnaire/questionnaire.js';
import All from './pages/all/all.js';
import Random from './pages/random/random.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/questionnaire' element={<Questionnaire/>}/>
          <Route path='/all' element={<All/>}/>
          <Route path='/random' element={<Random/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
