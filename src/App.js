import React from 'react';
import {BrowserRouter ,Routes,Route} from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import Contact from './home/Contact';
import {HomePage }from './home/HomePage';        
import Movies from './home/Movies';
import Pages from './home/Pages';
import Pricing from './home/Pricing';
import Series from './home/Series';
import { homeData } from './dummyData'
import { HomeCard } from './components/homes/HomeCard';
export const Fulldata=React.createContext()
function App() {

  return (
  
<BrowserRouter>
<Fulldata.Provider value={homeData} >
<Header/>

<Routes>
 
  <Route path="/" element={<HomePage/>}/>
 
  <Route path="/series" element={<Series/>}/>
  <Route path="/movies" element={<Movies/>}/>
  <Route path="/pages" element={<Pages/>}/>
  <Route path="/pricing" element={<Pricing/>}/>
  <Route path="/contact" element={<Contact/>}/>
 
</Routes>
</Fulldata.Provider>
</BrowserRouter>


  );
}

export default App;
