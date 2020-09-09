import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import Navigation from './Navigation';
import Routes from './Routes';

/** Renders App component
 * 
 * Prop
 * 
 * State
 * 
 * App -> {Navbar/Header, Routes}
 */


function App() {

  function addBlogPost(formData) {
    // submit data
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
