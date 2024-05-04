import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingView from './views/LandingView';
import HomeView from './views/HomeView';
import DetailView from './views/DetailView';
import FormView from './views/FormView';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<LandingView />} />
          <Route path='/home' element={<HomeWithNavbar />} />          
          <Route path='/detail/:id' element={<DetailWithNavbar />} />
          <Route path='/form' element={<FormWithNavbar />} />
        </Routes>
      </div>
    </>
  );
}

// Define un componente que envuelve Navbar y HomeView
function HomeWithNavbar() {
  return (
    <>
      <Navbar />
      <HomeView />
    </>
  );
}

// Define un componente que envuelve Navbar y FormView
function FormWithNavbar() {
  return (
    <>
      <Navbar />
      <FormView />
    </>
  );
}

// Define un componente que envuelve Navbar y DetailView
function DetailWithNavbar() {
  return (
    <>
      <Navbar />
      <DetailView />
    </>
  );
}

export default App;
