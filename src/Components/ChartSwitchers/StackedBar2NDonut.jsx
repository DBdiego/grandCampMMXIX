import React, {Component}  from 'react';
import NDonutChart         from '../Charts/nDonutChart.jsx'         ;
import StackedBarChartTime from '../Charts/StackedBarChartTime.jsx' ;


/*
Property       | Chart |  Explanation
---------------|-------|--------------------------------------
title          | BOTH  | chart title 
data           | BOTH  | data for the plots (for formatting check respective charts)
legend         | BOTH  | possible values per plot 
color          | BOTH  | base color for the scale
filter         | NONE  | [value, if includes -> switch1, if includes -> switch2]
startEndAngles | DONUT | start and end angles of the plots
unit           | DONUT | unit to appear next to absolute numbers inside the plot
dates          | STACK | Used for timeaxis generation
resData        | STACK | resolution data for switching between grouping modes
now            | STACK | for the schedule rectangle
*/


class StackedBar2NDonut extends Component{

	render(){
    if (this.props.filter[1].includes(this.props.filter[0]) ){
        return(
                <StackedBarChartTime 
                  title     = {this.props.title}
                  data      = {this.props.data} 
                  size      = {this.props.size} 
                  dates     = {this.props.dates}
                  color     = {this.props.color}
                  legend    = {this.props.legend['switch1']}
                  resData   = {this.props.resData}
                  now       = {this.props.currentTime}
                  showKPIs  = {this.props.showKPIs}
                />
        )
    } else if (this.props.filter[2].includes(this.props.filter[0]) ){
        return(
                <NDonutChart 
                  title     = {this.props.title}
                  data      = {this.props.data}
                  size      = {this.props.size}
                  color     = {this.props.color}
                  unit      = {this.props.unit}
                  legend    = {this.props.legend['switch2']}
                  startEndAngles = {this.props.startEndAngles}
                  showKPIs  = {this.props.showKPIs}
                />
        )
    };

	}
}

export default StackedBar2NDonut