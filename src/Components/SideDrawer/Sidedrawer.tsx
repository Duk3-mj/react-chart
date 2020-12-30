import React, { Component, Fragment ,useState } from 'react'
import "./SideDrawer.css"

interface IProps{
    setChart(value:string):void
}


function SideDrawer (props:IProps):JSX.Element{

    const [chart, setChart] = useState<string>();

    const handleClick = (value :string) : void => {
        setChart(value);
        if(chart)
        props.setChart(chart)
    }
return(
    <Fragment>
        <nav className = "nav-links-sideDrawer">
            <ul >
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
    </Fragment>
)
}

export default SideDrawer;