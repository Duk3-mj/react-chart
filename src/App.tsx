import React, { Fragment, FunctionComponentFactory, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from "./chart"
import Navbar from './navbar';
import Showchart from './Showchart';

function App(): JSX.Element{

  const [chart ,getChart] = useState<string>("Pie");
  const selectChart = (value: string):void => {
        getChart(value);
  }
  return (
  <Fragment>
    <div>
    <Navbar
      setChart = {selectChart}
    ></Navbar>
    </div>
    
  < div>
    <Showchart 
      chartSelected = {chart}
    />
  </div>
  </Fragment>
    
  ); 
}

export default App;
