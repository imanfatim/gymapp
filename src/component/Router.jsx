  import React from 'react'
  import Home from './home';
  import Courses from './courses'
  import Services from './services'
  import {
    createBrowserRouter,
    Route,
    Routes,
    BrowserRouter,
  } from "react-router-dom";
  
  const Router = () => {
    return (
     <BrowserRouter>
     <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/courses" element={<Courses />}/>
        <Route path="/Services" element={<Services />}/>
     </Routes>
     </BrowserRouter>
    )
  };
  
  export default Router
  