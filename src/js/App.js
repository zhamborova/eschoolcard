import React from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import Home from "./Home";


function App() {
  return (
    <Router>
     <Route path='/'  component={home}/>

    </Router>

  );
}


const home =() => <Home/>;
export default App;
