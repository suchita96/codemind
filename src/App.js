import './App.css';
import React, {useState} from 'react';
import ClassComponent from './components/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent';
import Greet from './components/Greet';
import {Hooks} from './components/Hooks';
import {RefHook} from './components/RefHooks'
import ParentComponent from './components/ParentComponent';
import MyContext from './utils/MyContext';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import { Outlet } from "react-router";
// import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  const [isAuth, setIsAuth] = useState(10);
  const [showMessage, setShowMessage] = useState('');
  const [user,setUser] = useState('abc');
  const data = ["akash","aditi","anshu","ajay"];
  const [count, setCount] = useState(0);
  //conditional rendering
  //1.if else 2.switch case 3.logical && 4.ternary operato

  return (
    <div>
    {/* <div>App component</div> */}
    
    {/* <button onClick={() => {setUser(data[count] ? data[count].toUpperCase() : data[0].toUpperCase()); setCount(count+1);}}>Change user</button>
    <MyContext.Provider value={{user, setUser, count, setCount}}>
    <ParentComponent/>
    </MyContext.Provider> */}
    {/* <RefHook /> */}
    {/* <createBrowserRouter> */}
    <header>
    <NavBar />
    </header>
    <main>
    <Outlet />
    </main>
    {/* </createBrowserRouter> */}
    </div>
  );
}

export default App;
