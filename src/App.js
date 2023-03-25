import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Footer from './components/Footer';
import Confessional from './components/pages/Confessional';
import TopMoments from './components/pages/TopMoments';
import Gallery from './components/pages/Gallery';
import Calendar from './components/pages/Calendar';


function App() {
  return (
    <>
      {/* Router holds all routes/pages/paths */}
      <Router> 
        <Navbar/>
        <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='/gallery' Component={Gallery}/>
          <Route path='/top-moments' Component={TopMoments}/>
          <Route path='/confessional' Component={Confessional}/>
          <Route path='/calendar' Component={Calendar}/>
        </Routes>

        <Footer />

      </Router>
    </>
  );
}

export default App;
