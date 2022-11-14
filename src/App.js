
import './App.css';
import Home from './components/home';
import { useState, useEffect } from 'react';
import { MainContext } from './context';
function App() {
  const homeData ="Elit culpa nulla laborum ea voluptate dolore et excepteur amet elit nisi qui tempor aliqua. Ea voluptate tempor irure in magna incididunt minim dolore culpa tempor amet. Voluptate non ea nostrud mollit consectetur fugiat occaecat anim mollit aute enim ipsum minim consequat. Aliquip sunt officia do laborum est mollit proident magna commodo. Velit minim deserunt tempor deserunt aliqua est qui cupidatat anim in. Culpa aliquip dolore in ipsum quis. Incididunt fugiat id voluptate ut.";
  const contactData ="contact me at akashram006@gmail.com"
  const serviceData="Services not available";
  const[componentToShow,setComponentToShow] = useState(1);
  const[data,setData] = useState("");
  
    useEffect(() => {
     if(componentToShow === 2){
     setData(contactData);
  }else if(componentToShow === 3){
    setData(serviceData)
  }else{
     setData(homeData);
  }
  },([componentToShow]))
  console.log(componentToShow);
  const [isLight,setLight] = useState(true);
  const changeBackground = _ => {
      if(isLight === true){
       setLight(false);
      }
      else{
       setLight(true);
      }
  }
  return (
    <div className={isLight === true ? "white-container": "black-container"}>
       <p>I have changed theme to {isLight===true?"Light":"Dark"}</p>
       <h1>Context API</h1>
       
      <button onClick={() => {setComponentToShow(1)}}>Home</button>
      <button onClick={() => {setComponentToShow(2)}}>Contact</button>
      <button onClick={() => {setComponentToShow(3)}}>Service</button>
      <button onClick={changeBackground}>toggle theme to dark</button>
      <MainContext.Provider  value={data}>
         <Home />
      </MainContext.Provider>
    </div>
  );
}

export default App;
