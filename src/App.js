import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import rmnp from './images/rmnp.png';
import Homepage from './pages/homepage/homepage.js';
import Questionnaire from './pages/questionnaire/questionnaire.js';
import All from './pages/all/all.js';
import Random from './pages/random/random.js';
import './App.css';

function App() {

  return (
    <div className="App">
      <div style={{ backgroundImage: `url(${rmnp})` }} className="backgroundImg">
        <Router>
          <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/questionnaire' element={<Questionnaire/>}/>
            {/* <Route path='/all' element={<All/>}/> */}
            <Route path='/all' render={(props) => <All {...props} allActivities={props.location.state.allActivities} />}/>
            <Route path='/random' element={<Random/>}/>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;


            {/* <Route path='/all' element={<All allActivities={allActivities} />} /> */}
            {/* <Route path='/all' render={(props) => <All {...props} allActivities={props.location.state.allActivities} />} /> */}
            {/* <Route path='/all' render={(props) => <All {...props} allActivities={props.allActivities} />} /> */}
