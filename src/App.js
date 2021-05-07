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
import { createContext, useContext, useEffect, useRef, useState } from 'react';
import userEvent from '@testing-library/user-event';
export const menuContext = createContext();
export const mouseScroll = createContext();

function App() {
  const [showMenu, setShowMenu] = useState({ display: "none" });
  const [mouseScrollY, setMouseScroll] = useState(0);
  document.body.style.backgroundColor = "var(--main-back-color)";
  const [showLoader, setShowLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      window.onscroll = () => {
        setMouseScroll(window.pageYOffset);
        console.log(window);
      }
    }, 100);
  })
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
