import React, { Component, Fragment, useState } from 'react';
import "./Toolbar.css";

interface IProps{
    setChart(value:string):void
    show():void
}

function Toolbar (props:IProps): JSX.Element {

    const [chart, setChart] = useState<string>();

    const handleClick = (value :string) : void => {
        setChart(value);
        if(chart)
        props.setChart(chart)
    }

return(
    <nav>
        <button className="burger" onClick = {props.show}>
                <div></div>
                <div></div>
                <div></div>
            </button>
            <div className="logo">
               <h4>Charts</h4> 
            </div>
            <div className="space"></div>
            <ul className = "nav-links">
                <li onClick = {() => handleClick("Pie")}>
                    Pie
                </li>
                <li onClick = {() => handleClick("Bar")}>
                    Bar
                </li>
                <li onClick = {() => handleClick("Line")}>
                    Line
                </li>
                <li onClick = {() => handleClick("Area")}>
                    Area
                </li>
                <li onClick = {() => handleClick("Column")}>
                    Column
                </li>
            </ul>
    </nav>
)
}
export default Toolbar;
