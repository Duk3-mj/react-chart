import React, { Fragment, FunctionComponentFactory, useState } from 'react';
import './App.css';
import SideDrawer from "./Components/SideDrawer/Sidedrawer"
import Showchart from './Showchart';
import Toolbar from './Components/Toolbar/Toolbar';

function App(): JSX.Element{
  
  const [isSideDrawer, setIsSideDrawer] = useState<boolean>(false);
  let sideDrawer:JSX.Element
  const [chart ,getChart] = useState<string>("Pie");
  const selectChart = (value: string):void => {
        getChart(value);
  }

  const sideDrawerHandle = () =>{
    setIsSideDrawer(!isSideDrawer);
    console.log("hi i am here" +isSideDrawer )
    
  }
  return (
  <Fragment>
    <Toolbar
    setChart = {selectChart}
    show = {sideDrawerHandle}
    ></Toolbar>
    <div className="container">
    <div className="sideDrawer">
    {isSideDrawer&&<SideDrawer 
      setChart = {selectChart}
      ></SideDrawer>}
    </div>    
    < div className ="chart">
    {chart&&<Showchart chartSelected = {chart}/>}
  </div>
    </div>
    
  
  
    
  </Fragment>
    
  ); 
}

export default App;
