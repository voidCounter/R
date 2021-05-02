import logo from './logo.svg';
import './App.css';
import Loader from './components/Loader/Loader';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useEffect, useState } from 'react';

function App() {
  const [showLoader, setShowLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowLoader(false);
    }, 3000);
  }, []);
  return (
    <div className="App">
      {
        showLoader ?
          <Loader></Loader>
          :
          <Home></Home>
      }
    </div>
  );
}

export default App;
