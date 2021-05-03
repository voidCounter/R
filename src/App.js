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
import { createContext, useContext, useEffect, useState } from 'react';
export const menuContext = createContext();

function App() {
  const [showMenu, setShowMenu] = useState({ display: "none" });
  document.body.style.backgroundColor = "var(--main-back-color)";
  const [showLoader, setShowLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowLoader(false);
    }, 3300);
  }, []);
  return (
    <div className="App">
      <menuContext.Provider value={[showMenu, setShowMenu]}>
        {
          showLoader ?
            <Loader></Loader>
            :
            <Home></Home>
        }
      </menuContext.Provider>
    </div>
  );
}

export default App;
