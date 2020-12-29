import react, { Fragment } from 'react'
import AreaChart from './AreaChart';
import BarChart from './BarChart';
import Columnchart from './Columnchart';
import PieChart from './chart';
import LineChart from './LineChart';


interface IProps{
    chartSelected:string
}

function Showchart (props:IProps):JSX.Element{
const handleChart = () => {
    switch(props.chartSelected){
        case "Pie":
            return <PieChart></PieChart>
        case "Bar":
            return <BarChart></BarChart>
        case "Line":
            return <LineChart></LineChart>
        case "Area":
            return <AreaChart></AreaChart>
        case "Column":
            return <Columnchart></Columnchart>
    }
}
return(
<Fragment>
    <div>
    {handleChart()}
    </div>
    
</Fragment>
)
}





export default Showchart;