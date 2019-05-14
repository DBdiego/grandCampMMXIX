import React, { Component} from 'react'              ;
import { scaleLinear }     from 'd3-scale'           ;
import { select }          from 'd3-selection'       ;
import { max }             from 'd3-array'           ;
import * as d3             from 'd3'                 ;
import DataHandlers        from './DataHandlers.jsx' ;

/* DOCUMENTAION:
1) required inputs: 
    -> data  : the data to be plotted in the format described in 2)
    -> size  : the size of the svg block
    -> title : the plot title
    -> color : the color of the line

2) input-data format:
    [{datapoint: #CATEGORY#, count: #NUMBER#},
     {datapoint: #CATEGORY#, count: #NUMBER#},
     {datapoint: #CATEGORY#, count: #NUMBER#}]
*/


class RadarChart extends Component {
    constructor(props) {
        super(props);
        this.createRadarChart = this.createRadarChart.bind(this);
    };

    componentDidMount() {
        this.createRadarChart();
    };


    componentDidUpdate() {
        this.createRadarChart();
    };


    // ************************ CHART CONSTRUCTION ************************ 
    createRadarChart(){ 
        //console.log('RADAR CHART');

        //===================================  VARIABLES  =================================== 

        let data       = this.props.data  ;
        let screenSize = this.props.size  ;
        let chartTitle = this.props.title ;

        //Adapting size if smaller than allowed mimum:
        screenSize = [parseFloat(d3.select('#RadarChart_' + DataHandlers.TextNeutralizer(this.props.title)).style('width' ).replace('px', '')),
                      parseFloat(d3.select('#RadarChart_' + DataHandlers.TextNeutralizer(this.props.title)).style('height').replace('px', ''))
                     ];


        const node   = this.node   ;
        let thisNode = select(node);

        //Defining center of plot
        const plotCenterCoordinates = [Math.round(screenSize[0]*0.50), 
                                       Math.round(screenSize[1]*0.50)];
                                       
        
        //Defining grid properties
        let numCenterLines = 8;
        if (data[0] && data.length > 0){
            numCenterLines = data.length
        };

        //Radius of outer circumference of grid
        const maxRadius = Math.round(Math.min.apply(null, screenSize) / 3.5);

        //Parameters for scaling
        let counts = [];
        let total  = 0;
        data.forEach(function(element) {total += +element.count; counts.push(+element.count);});
        data.forEach(function(element) {element.total = total});



        const scaleStep = 0.20; // equivalent to 20%
        let numRadialLines = 3;
        let maxPercentage = 0;
        let scaleMax = 0;

        if (data.length > 0){
            maxPercentage  = Math.ceil(((max(counts)/total) * 5) + 0.5) * (scaleStep*10);
            if (maxPercentage > 10){
                maxPercentage = 10;
            };
            scaleMax       = (maxPercentage/10) * total;
            numRadialLines = Math.ceil(maxPercentage / (scaleStep*10));
        };


        //Defining Scale
        const rScale  = scaleLinear() //function accepting values between 0 and max_data. It maps these to the 'range'
            .domain([0, scaleMax])
            .range ([0, maxRadius]);


        // ============================================ STYLING =============================================
        // Fontsizes
        const fontSizeAxisTitle  = Math.round(0.040 * screenSize[1]);
        const fontSizeDataValues = Math.round(0.032 * screenSize[1]);

        // Colors
        const lineColor = this.props.color;

        //Transparancy
        const highlightOpacity    = 0.40;
        const nonHighlightOpacity = 0.25;




       // ============================================ CANVAS =============================================
       //Adding svg Background
        thisNode.selectAll('.componentBackground')
            .data([''])
            .enter().append('rect')
                .attr('class', 'componentBackground');

        thisNode.selectAll('.componentBackground')
            .attr('width' , screenSize[0])
            .attr('height', screenSize[1]);


        // ============================================= TITLE ==============================================            
        //Adding a title
        thisNode.selectAll('.plotTitle')
            .data([chartTitle])
            .enter().append('text')
                .attr('class', 'plotTitle')
                .text((d)=> d);

        //Adding a title
        thisNode.selectAll('.plotTitle')
            .attr('x', Math.round(screenSize[0] * 0.05))
            .attr('y', Math.round(screenSize[1] * 0.10));

        
        // ============================================ GRID ============================================

        //Creating a Grid component 
        thisNode.selectAll('#PlotGrid')
            .data([''])
            .enter().append('g')
                .attr('id', 'PlotGrid');

        //Defining variables for the positioning the grid elements tangential direciton
        let centerLineCoordinates = [];
        let axisTextCoordinates = [];
        let posAdditionFactorX = 1
        let posAdditionFactorY = 1;
        let textAnchorPoint = 'start';
        let addPixelsY = 0;
        let xText = 0;
        let yText = 0;
        let angle = 0;
        let x1 = 0;
        let y1 = 0;
        let x2 = 0;
        let y2 = 0;
        let i = 0;

        for (i = 0; i < numCenterLines; i++){

            if (data[i]){

                angle = Math.PI/2 + (i * (2 * Math.PI)/numCenterLines);

                // Center lines
                x1 = plotCenterCoordinates[0];
                y1 = plotCenterCoordinates[1];
                x2 = Math.round(x1 + maxRadius * Math.cos(angle));
                y2 = Math.round(y1 - maxRadius * Math.sin(angle));
                centerLineCoordinates.push({
                        x1: x1, 
                        y1: y1,
                        x2: x2,
                        y2: y2
                        });

                // Axis text
                posAdditionFactorX = 1;
                posAdditionFactorY = 1;
                addPixelsY = 0;

                // Value on top of the circle (if any)
                if ((0.99 * Math.PI/2) <= angle && angle <= (1.01 * Math.PI/2) ){
                    textAnchorPoint = 'middle';
                    posAdditionFactorX = 1;
                    posAdditionFactorY = 1.17;
                    addPixelsY = 0;

                // Value on bottom of the circle (if any)
                }else if ((0.99 * 3/2 * Math.PI) <= angle && angle <= (1.01 * 3/2* Math.PI)){
                    textAnchorPoint = 'middle';
                    posAdditionFactorX = 1;
                    posAdditionFactorY = 1.05 - fontSizeAxisTitle/(maxRadius * Math.sin(angle));
                    addPixelsY = 0;


                // Values on right half of circle
                }else if (!(Math.PI/2 <= angle && angle <= 3/2* Math.PI)) {
                    textAnchorPoint = 'start';
                    posAdditionFactorX = 1.05;
                    posAdditionFactorY = 1.13;
                    addPixelsY = fontSizeAxisTitle/2;

                // Other ones (values on left half of circle)
                }else{
                    textAnchorPoint = 'end';
                    posAdditionFactorX  = 1.10 ;
                    posAdditionFactorY  = 1.13 ;
                    addPixelsY = fontSizeAxisTitle/2;
                };


                xText = Math.round(plotCenterCoordinates[0] + posAdditionFactorX * maxRadius * Math.cos(angle) );
                yText = Math.round(plotCenterCoordinates[1] - posAdditionFactorY * maxRadius * Math.sin(angle) + addPixelsY);

                axisTextCoordinates.push({
                                'x': xText,
                                'y': yText,
                                'textAnchor':textAnchorPoint,
                                'text':data[i]['datapoint'] //+ '(' + Math.round(angle) + ')'
                                });

                data[i]['positionFactorX'] = posAdditionFactorX;
                data[i]['positionFactorY'] = posAdditionFactorY;
                data[i]['textAnchor'] = textAnchorPoint;
                data[i]['addPixelsY'] = addPixelsY;
                data[i]['angle'] = angle;
            };

        };


        //Defining variables for the positioning the grid elements radial direciton
        let ticksPositions = []        ;
        let xPositionTick  = 0         ;
        let yPositionTick  = 0         ;
        let circleRadius   = 0         ; 
        let circleRadii    = []        ;
        let angleTicks     = Math.PI/2 ;

        if (data.length === 1){
            angleTicks = data[0].angle - Math.PI/4;
        }else if (data.length > 1){
            angleTicks = data[data.length-1].angle + (data[1].angle - data[0].angle)/2;
        };

        for (i = 1; i <= numRadialLines ;i++ ){
            circleRadius = Math.round( i * (maxRadius/numRadialLines));

            circleRadii.push(circleRadius);

            xPositionTick = plotCenterCoordinates[0] + circleRadius * Math.cos(angleTicks) - 10;
            yPositionTick = plotCenterCoordinates[1] - circleRadius * Math.sin(angleTicks) ;
            ticksPositions.push({tickX: Math.floor(xPositionTick),
                                 tickY: Math.floor(yPositionTick)})            
        };


        const GridPlot = thisNode.selectAll('#PlotGrid');

        //Circumference lines
        //--> Adding new ones
        GridPlot.selectAll('#rad_line')
            .data(circleRadii)
            .enter().append('circle')
                .attr('id'  , 'rad_line')
                .attr('r' , (d) => 0)
                .style('fill', '#CDCDCD' )
                .style('fill-opacity'  , 0.4 / numRadialLines)
                .style('stroke-width'  , 1  )
                .style('stroke-opacity', 0.5)
                .style('stroke'        , '#CDCDCD');

        //--> Removing surplus ones
        GridPlot.selectAll('#rad_line')
            .data(circleRadii)
            .exit().remove();

        //--> updating the positions
        GridPlot.selectAll('#rad_line')
            .data(circleRadii)
            .transition()
            .duration(300)
            .ease(d3.easeLinear)
            .attr('r' , (d) => d)
            .attr('cx', plotCenterCoordinates[0])
            .attr('cy', plotCenterCoordinates[1]);



        //Lines from center to edge of plot
        //--> Adding new ones
        GridPlot.selectAll('#center_line')
            .data(centerLineCoordinates)
            .enter().append('line')
                .attr('id', 'center_line')
                .attr('x1', (d) => plotCenterCoordinates[0])
                .attr('y1', (d) => plotCenterCoordinates[1])
                .attr('x2', (d) => plotCenterCoordinates[0])
                .attr('y2', (d) => plotCenterCoordinates[1])
                .style('stroke', '#C0C0C0')
                .style('stroke-width', 0.5)
                .style('stroke-opacity', 0.5);


        //--> Removing surplus ones
        GridPlot.selectAll('#center_line')
            .data(centerLineCoordinates)
            .exit().remove();

        //--> updating the positions
        GridPlot.selectAll('#center_line')
            .data(centerLineCoordinates)
            .transition()
            .duration(300)
            .ease(d3.easeLinear)
            .attr('x1', (d) => d.x1)
            .attr('y1', (d) => d.y1)
            .attr('x2', (d) => d.x2)
            .attr('y2', (d) => d.y2);



        //Axis Titles
        //--> Adding new ones
        GridPlot.selectAll('#axis_title')
            .data(axisTextCoordinates)
            .enter().append('text')
                .attr('id', 'axis_title')
                .attr('x', (d) => plotCenterCoordinates[0])
                .attr('y', (d) => plotCenterCoordinates[1])
                .attr('text-anchor', (d)=> d.textAnchor)
                .style('font-weight', '100')
                .style('font-size', '1.5vmin')
                .text((d) => (d.text));

        //--> Removing surplus ones
        GridPlot.selectAll('#axis_title')
            .data(axisTextCoordinates)
            .exit().remove();

        //--> updating the positions
        GridPlot.selectAll('#axis_title')
            .transition()
            .duration(300)
            .ease(d3.easeLinear)
            .attr('x', (d) => d.x)
            .attr('y', (d) => d.y)
            .attr('text-anchor', (d) => d.textAnchor)
            .text((d) => d.text);



        //Axis Ticks
        //--> Adding new ones
        GridPlot.selectAll('#axis_ticks')
            .data(ticksPositions)
            .enter().append('text')
                .attr('id', 'axis_ticks')
                .attr('x', (d) => plotCenterCoordinates[0])
                .attr('y', (d) => plotCenterCoordinates[1])
                .attr('text-anchor', 'start')
                .style('font-weight', '150')
                .style('font-size', '1.3vmin')
                .style('opacity', 0.4)
                .text((d, i) => (i * 20).toString() + '%');

        //--> Removing surplus ones
        GridPlot.selectAll('#axis_ticks')
            .data(ticksPositions)
            .exit().remove();

        //--> updating the positions
        GridPlot.selectAll('#axis_ticks')
            .data(ticksPositions)
            .transition()
            .duration(300)
            .ease(d3.easeLinear)
            .attr('x', (d) => d.tickX)
            .attr('y', (d) => d.tickY)
            .text((d, i) => ((i+1) * 20).toString() + '%');



        //--> Add a tick line
        GridPlot.selectAll('#tick_line')
            .data(['tickline'])
            .enter().append('line')
                .attr('id', 'tick_line')
                .attr('x1', (d) => plotCenterCoordinates[0])
                .attr('y1', (d) => plotCenterCoordinates[1])
                .attr('x2', (d) => plotCenterCoordinates[0])
                .attr('y2', (d) => plotCenterCoordinates[1])
                .style('stroke', 'white')
                .style('font-weight', '100')
                .style('opacity', 0.25)
                .style('stroke-dasharray', ('2, 5'));

        GridPlot.selectAll('#tick_line')
            .transition()
            .duration(300)
            .ease(d3.easeLinear)
            .attr('x1', plotCenterCoordinates[0])
            .attr('y1', plotCenterCoordinates[1])
            .attr('x2', plotCenterCoordinates[0] + maxRadius * Math.cos(angleTicks))
            .attr('y2', plotCenterCoordinates[1] - maxRadius * Math.sin(angleTicks));



    // ============================================ DATALINE ============================================
        //Creating a Grid component 
        thisNode.selectAll('#data_line')
            .data([''])
            .enter().append('g')
                .attr('id', 'data_line');

        //Defining positions of data-points and data-text
        let polygonCoordinates = [];
        let polygonXPosition = 0;
        let polygonYPosition = 0;
        let dataRadius = 0;
        let xPosition = 0;
        let yPosition = 0;
        let textPad = 8;
        let count = 0;

        for (i in data){
            count = +data[i].count;
            dataRadius = rScale(count);
            angle = Math.PI/2 + (i * (2 * Math.PI)/data.length);

            xPosition = dataRadius * Math.cos(angle);
            yPosition = dataRadius * Math.sin(angle);

            //Datapoint positions
            polygonXPosition = plotCenterCoordinates[0] + xPosition
            polygonYPosition = plotCenterCoordinates[1] - yPosition


            //Text Positions
            data[i]['textX'] = plotCenterCoordinates[0] + xPosition + (Math.cos(angle) * textPad);
            data[i]['textY'] = plotCenterCoordinates[1] - yPosition - (Math.sin(angle) * textPad) + 5;

            polygonCoordinates.push(polygonXPosition.toString() + ',' + polygonYPosition.toString())

        };


        //Strokewidth when dependent on the number of inputs. 
        let strokeWidthDataLine = 0.8;
        if (!(data.length > 2)){
            strokeWidthDataLine = 4;
        };

        if (data.length < 2){
            polygonCoordinates.push(plotCenterCoordinates[0] + ',' + plotCenterCoordinates[1]);
        };

        //Converting array to string
        const polygonCoordinatesString = polygonCoordinates.join(' ');




        const DataLine = thisNode.selectAll('#data_line');

        DataLine.selectAll('#datapolygon')
            .data([plotCenterCoordinates[0] + ',' + plotCenterCoordinates[1]])
            .enter().append('polygon')
                .attr('id', 'datapolygon')
                .attr('points', (d) => d)
                .style('fill', lineColor)
                .attr('fill-opacity'  , nonHighlightOpacity)
                .attr('stroke', lineColor)
                .attr('stroke-width'  , strokeWidthDataLine)
                .attr('stroke-opacity', 0.80);


        DataLine.selectAll('#datapolygon')
            .data([data])
            .transition()
            .duration(300)
            .ease(d3.easeLinear)
            .attr('points', polygonCoordinatesString)
            

        DataLine.selectAll('#datapolygon')
            .attr('stroke-width'  , strokeWidthDataLine)
            .on('mouseover', mouseoverHandler)
            .on('mouseout', mouseoutHandler);



        function mouseoverHandler (d, i){

            thisNode.selectAll('#datapolygon').transition()
                .duration(400)
                .attr('fill-opacity'  , highlightOpacity);

            thisNode.selectAll('#DataTextValues').selectAll('#data_text')
                .text((d) => Math.round(d.count/total*100)+'%')

        };

        function mouseoutHandler (d, i){
            thisNode.selectAll('#datapolygon').transition()
                .duration(200)
                .attr('fill-opacity'  , 0.25);

            thisNode.selectAll('#DataTextValues').selectAll('#data_text')
                .text((d) => DataHandlers.textDisplay(d.count, '0'));
        };


        // ============================================ DATATEXT ============================================
        
        //Creating a group for texts 
        thisNode.selectAll('#DataTextValues')
            .data([''])
            .enter().append('g')
                .attr('id', 'DataTextValues');


        //Adding Text to data points
        const DataText = thisNode.selectAll('#DataTextValues');
        
        DataText.selectAll('#data_text')
            .data(data)
            .enter().append('text')
                .attr('id', 'data_text')
                .attr('x', (d) => plotCenterCoordinates[0])
                .attr('y', (d) => plotCenterCoordinates[1])
                .attr('text-anchor', (d)=> d.textAnchor)
                .style('font-weight', '100')
                .style('font-size', fontSizeDataValues+'px')

        DataText.selectAll('#data_text')
            .data(data)
            .exit().remove();

        DataText.selectAll('#data_text')
            .transition()
            .duration(300)
            .ease(d3.easeLinear)
            .attr('x', (d) => d.textX)
            .attr('y', (d) => d.textY)
            .style('font-size', fontSizeDataValues+'px')
            .text((d) => DataHandlers.textDisplay(d.count, '0'));;
    };



    // ************************ RENDERING ************************ 
    render() {
        return (
            <svg ref = { node => this.node = node } 
                 id  = {'RadarChart_' + DataHandlers.TextNeutralizer(this.props.title)}
                 className = {'BackgroundSVG'}
                 >
            </svg>
        )
                
    };

};

export default RadarChart






