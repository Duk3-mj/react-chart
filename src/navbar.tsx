import React, { Component, Fragment, useState } from 'react';
import "./navbar.css";

interface IProps{
    setChart(value:string):void
}

function Navbar (props:IProps): JSX.Element {

    const [chart, setChart] = useState<string>();

    const handleClick = (value :string) : void => {
        setChart(value);
        if(chart)
        props.setChart(chart)
    }

return(
    <nav>
            <div className="logo">
                Charts
            </div>
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
                <li onClick = {() => handleClick("Bubble")}>
                    Bubble
                </li>
            </ul>
            <div className="burger">
                <div></div>
                <div></div>
                <div></div>
            </div>
    </nav>
)
}
export default Navbar;
