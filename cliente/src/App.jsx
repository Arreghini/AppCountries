import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingView from './views/LandingView';
import HomeView from './views/HomeView';
import DetailView from './views/DetailView' ;
import FormView from './views/FormView';

function App() {
  return (
    <>
      <div className='App'>
           <Routes>
             <Route path='/' element={<LandingView />} />
             <Route path='/home' element={<HomeView />} />
             <Route path='/detail/:id' element={<DetailView />} />
             <Route path='/form' element={<FormView />} />
            </Routes>
      </div>
    </>
  );
}

export default App;
