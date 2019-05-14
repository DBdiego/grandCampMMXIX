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
    -> color : the color of the bars

    -> bounds : if applicable bounds can be inserted. This feature only works with numerical categories

2) input-data format:
    [{datapoint: #CATEGORY#, count: #NUMBER#},
     {datapoint: #CATEGORY#, count: #NUMBER#},
     {datapoint: #CATEGORY#, count: #NUMBER#}]
*/



class HorizontalBarChart extends Component {
    constructor(props) {
        super(props);
        this.createHorizontalBarChart = this.createHorizontalBarChart.bind(this);
    };

    componentDidMount() {
        this.createHorizontalBarChart();
    };


    componentDidUpdate() {
        this.createHorizontalBarChart();
    };


    createHorizontalBarChart() {
        //console.log('HORIZONTAL BAR CHART');



        //===================================  GENERAL  =================================== 
        let screenSize = this.props.size   ;
        const chartTitle = this.props.title  ;
        const bounds     = this.props.bounds ;
        let inputData    = this.props.data   ;

        //Adapting screen size
        screenSize = [parseFloat(d3.select('#HorizontalBarChart_' + DataHandlers.TextNeutralizer(this.props.title)).style('width' ).replace('px', '')),
                      parseFloat(d3.select('#HorizontalBarChart_' + DataHandlers.TextNeutralizer(this.props.title)).style('height').replace('px', ''))
                     ];
        if (screenSize[0] < 0){//400){
            screenSize[0] = 400;
        };
        if (screenSize[1] < 0){//300){
            screenSize[1] = 300;
        };

        const node   = this.node;
        let thisNode = select(node);

        const PlotGridBackgroundWidth = Math.round(0.85 * screenSize[0]);  // Width of the grid background
        const maxBlockSize = Math.round(screenSize[1] * 0.70);            // Percentual maximum height of the bars
        const bottomBlocks = Math.round(screenSize[1] * 0.90);            // Bootm position of the bars
        const barHeight    = Math.round(screenSize[1] * 0.04);               // Width of the bars
        const xStart = 0.10 ;                                             // Percentual distance from the left side of the first bar


        
        // =========================================== STYLING ===========================================
        //Fontsizes
        const fontSizeBarText  = Math.round(0.040 * screenSize[1]);
        const fontSizeAxisText = Math.round(0.045 * screenSize[1]);
        

        //Colors
        const barColor = this.props.color;


        //Transparancy
        const nonHighlightOpacity = 0.3;
        const noUserInputOpacity  = 0.5;
        const highlightOpacity    = 0.7;        


        // ========================================== DATA HANDLING =========================================

        let dataArray = [];


        // Category population in case of bounds
        if (bounds){
            dataArray.push('-');
            for (let i = bounds[0]; i <= bounds[1]; i ++ ){
                dataArray.push(i)
            };
            dataArray.push('+');
        

        // Category population in case no bounds are specified
        }else {
            inputData.forEach((element) => dataArray.push(element.datapoint));
        };

        dataArray.sort((a, b) => a - b);


        let sumAllCategories = 0;
        let category = '';
        let data = [];
        let count = 0;
        
        dataArray.forEach((element) => {
            let name = element;
            if (element === '-'){
                name = 'min'
            }else if (element === '+'){
                name = 'plus'
            };

            data.push({datapoint: element, count: 0, name:name})
        })

        inputData.forEach( (element, k) => {

            count    = element.count     ;
            category = element.datapoint ;


            sumAllCategories += count ;

            if (bounds){
                if (category < bounds[0]){
                    data[data.indexOf(data.filter((element) => element.datapoint === '-')[0])]['count'] += count;
                }else if (category > bounds[1]){
                    data[data.indexOf(data.filter((element) => element.datapoint === '+')[0])]['count'] += count;
                }else{
                    data[data.indexOf(data.filter((element) => element.datapoint === category)[0])]['count'] += count;
                };

            }else {
                data[data.indexOf(data.filter((element) => element.datapoint === category)[0])]['count'] += count;
            };
        });

        data.forEach((element) => {element.total = sumAllCategories});

        let Average = 0;
        inputData.forEach((element) => Average += element.datapoint * element.count/sumAllCategories);

        
        let counts = [];
        data.forEach(function(element) {
            counts.push(element.count);
        });

        const dataMax = max(counts);
        const xScale  = scaleLinear()
            .domain([0, dataMax])
            .range ([0, Math.round(PlotGridBackgroundWidth * 0.90)]);




        // ============================================= CANVAS =============================================
        //Adding svg Background
        thisNode.selectAll('.componentBackground')
            .data([''])
            .enter().append('rect')
                .attr('class', 'componentBackground')

        thisNode.select('.componentBackground')
            .attr('width' , screenSize[0])
            .attr('height', screenSize[1]);



        // ============================================= TITLE ==============================================            
        //Adding a title
        thisNode.selectAll('.plotTitle')
            .data([chartTitle])
            .enter().append('text')
                .attr('class', 'plotTitle')
                .text((d)=> d)

        thisNode.select('.plotTitle')
            .attr('x', Math.round(screenSize[0] * 0.05))
            .attr('y', Math.round(screenSize[1] * 0.10));


        // ========================================= ADDITIONAL INFO =========================================
        let PositionAverage = [0.85, 0.10];
        // Add percentages in the center
        thisNode.selectAll('#AverageNumberTop')
            .data([''])
            .enter().append('text')
                .attr('id', 'AverageNumberTop')
                .attr('text-anchor', 'start')
                .style('fill', '#D5D5D5');
                
        thisNode.selectAll('#AverageNumberTop')
            .attr('x', Math.round(PositionAverage[0] * screenSize[0]))
            .attr('y', Math.round(PositionAverage[1] * screenSize[1]))
            .style('font-size', '2.8vmin')
            .text(parseFloat(Average).toFixed(0));


        // Add percentages in the center
        thisNode.selectAll('#AverageTextTop')
            .data([''])
            .enter().append('text')
                .attr('id', 'AverageTextTop')
                .attr('text-anchor', 'start')
                .style('fill', '#A5A5A5');
                
        thisNode.selectAll('#AverageTextTop')
            .attr('x', Math.round(PositionAverage[0] * screenSize[0]))
            .attr('y', Math.round(PositionAverage[1] * screenSize[1]) + 15)
            .style('font-size', '1.7vmin')
            .text('Average');

        // ============================================ GRID ============================================
        let GridLineValues = [];
        let numGridLines   = 7 ;


        const yPositionGridLines = [Math.round(bottomBlocks - 0.97 * maxBlockSize),
                                    Math.round(bottomBlocks - 0.03 * maxBlockSize)];

        for (let i = 0; i < (numGridLines + 1); i++){
            GridLineValues.push(i * PlotGridBackgroundWidth/(numGridLines+1));
        }

        //translation coordinates
        const xTranslation = Math.round(xStart * screenSize[0]).toString();
        const yTranslation = (bottomBlocks - maxBlockSize).toString();
        const plotBackgroundTranslation = 'translate(' + xTranslation + ',' + yTranslation + ')';

        //Creating a Grid component 
        thisNode.selectAll('#PlotGrid')
            .data([''])
            .enter().append('g')
                .attr('id', 'PlotGrid')


        const GridPlot = thisNode.selectAll('#PlotGrid');


        //Adding plot background
        GridPlot.selectAll('.plotBackground')
            .data([''])
            .enter().append('rect')
                .attr('class', 'plotBackground')
                .attr('rx', 2)
                .attr('ry', 2)
                .attr('width' , PlotGridBackgroundWidth)
                .attr('height', maxBlockSize)
                .attr('transform', plotBackgroundTranslation);


        GridPlot.selectAll('.plotBackground')
            .attr('width' , PlotGridBackgroundWidth)
            .attr('height', maxBlockSize)
            .attr('transform', plotBackgroundTranslation);



        //Adding Grid lines
        GridPlot.selectAll('line')
            .data(GridLineValues)
            .enter().append('line')
                .attr('id', 'HorizontalGridLine')
                .attr('x1' , (d) => Math.round(xStart * screenSize[0]) + d)
                .attr('x2' , (d) => Math.round(xStart * screenSize[0]) + d)
                .attr('y1' , yPositionGridLines[0])
                .attr('y2' , yPositionGridLines[1])
                .style('stroke', '#D0D0D0')
                .style('stroke-width', 1)
                .style('stroke-opacity', 0.15);

        GridPlot.selectAll('line')
            .data(GridLineValues)
            .exit().remove();

        GridPlot.selectAll('line')
                .attr('x1' , (d) => Math.round(xStart * screenSize[0]) + d)
                .attr('x2' , (d) => Math.round(xStart * screenSize[0]) + d)
                .attr('y1' , yPositionGridLines[0])
                .attr('y2' , yPositionGridLines[1]);




        // =========================================== RECTANGLES ===========================================
        thisNode.selectAll('#Bars')
            .data([''])
            .enter().append('g')
                .attr('id', 'Bars')

        let Bars = thisNode.selectAll('#Bars')

        Bars.selectAll('.horizontalBars')
            .data(data)
            .enter().append('rect')
                .attr('id'    , (d) => 'bar_'+ d.name)
                .attr('class', 'horizontalBars')
                .attr('x'     , Math.round(xStart * screenSize[0]))
                .attr('y'     , Math.round(bottomBlocks - 0.5 * maxBlockSize))
                .style('fill' , barColor)
                .style('fill-opacity', noUserInputOpacity);


        Bars.selectAll('.horizontalBars')
            .data(data)
            .exit().remove();


        Bars.selectAll('.horizontalBars').transition()
            .duration(300)
            .attr('x'     , Math.round(xStart * screenSize[0]))
            .attr('y'     , (d, i) => Math.round(i * ((0.90 * maxBlockSize)/(data.length)) + (bottomBlocks - 0.93*maxBlockSize)))
            .attr('width' , (d) => xScale(d.count))
            .attr('height', barHeight);

        Bars.selectAll('.horizontalBars')
            .on('mouseover', MouseoverHandler)
            .on('mouseout' , MouseoutHandler );


        function MouseoverHandler (d, i){
            const percentage = Math.round((d.count/d.total) * 100);
            const heightFactorSelected   = 1.5;
            const heightFactorUnselected = 0.7;

            const yPositionCorrectionSelected   = (0.5 - (0.5 / heightFactorSelected  )) * barHeight;
            const yPositionCorrectionUnselected = (0.5 - (0.5 / heightFactorUnselected)) * barHeight;


            //Making non-highlighted bars smaller
            thisNode.selectAll('#Bars').selectAll('rect')
                .transition()
                .duration(300)
                .attr('height', barHeight * heightFactorUnselected)
                .attr('y'     , (d, i) => Math.round(i * ((0.90 * maxBlockSize)/(data.length)) + (bottomBlocks-0.93*maxBlockSize) - yPositionCorrectionUnselected) )
                .style('fill-opacity', nonHighlightOpacity);


            //Fading text of  non-highlighted bars
            thisNode.selectAll('#Bars').selectAll('text:not(#bar_text_' + d.name + ')' )
                .transition()
                .duration(300)
                .style('fill-opacity', nonHighlightOpacity);



            //Giving text of highlighted bar a bigger font size & changing to percentual value
            thisNode.selectAll('#bar_text_' + d.name)
                .attr('y', Math.round(i * ((0.90 * maxBlockSize)/(data.length)) + (bottomBlocks - 0.93*maxBlockSize)+barHeight/2 + (heightFactorSelected*fontSizeBarText)/3 - yPositionCorrectionSelected))
                .attr('font-size', Math.round(fontSizeBarText * heightFactorSelected) + 'px')
                .text(percentage + '%');

            //Changing dimensions of highlighted bar
            d3.select(this).transition()
                .duration(300)
                .attr('height', barHeight * heightFactorSelected)
                .attr('y'     , Math.round(i * ((0.90 * maxBlockSize)/(data.length)) + (bottomBlocks-0.93*maxBlockSize) - yPositionCorrectionSelected))
                .style('fill-opacity', highlightOpacity);
        };



        function MouseoutHandler (d, i){

            //Setting all textst back to the counts
            thisNode.selectAll('#bar_text_' + d.name)
                .text(DataHandlers.textDisplay(d.count, '0'));
            
            //Setting all textst back to the counts
            thisNode.selectAll('#Bars').selectAll('rect')
                .transition()
                .duration(300)
                .attr('height', barHeight)
                .attr('y'     , (d, i) => Math.round(i * ((0.90 * maxBlockSize)/(data.length)) + (bottomBlocks-0.93*maxBlockSize)))
                .style('fill-opacity', noUserInputOpacity);

            thisNode.selectAll('#Bars').selectAll('text').transition()
                .duration(300)
                .attr('y', (d, i) => Math.round(i * ((0.90 * maxBlockSize)/(data.length)) + (bottomBlocks-0.93*maxBlockSize)+barHeight/2 + fontSizeBarText/3))
                .attr('font-size', fontSizeBarText)
                .style('fill-opacity', 1);
        };



        //Bar text
        Bars.selectAll('text')
            .data(data)
            .enter().append('text')
                .attr('id', (d) => 'bar_text_' + d.name)
                .attr('x' , Math.round(xStart * screenSize[0])+ 0.01 * PlotGridBackgroundWidth)
                .attr('y' , Math.round(bottomBlocks - 0.5 * maxBlockSize))
                .attr('text-anchor', 'start')
                .style('font-size', fontSizeBarText+'px')

        Bars.selectAll('text')
            .data(data)
            .exit().remove();

        Bars.selectAll('text').transition()
            .duration(300)
            .attr('x' , (d)    => Math.round(xStart * screenSize[0]+ xScale(d.count) + 0.01 * PlotGridBackgroundWidth))
            .attr('y' , (d, i) => Math.round(i * ((0.90 * maxBlockSize)/(data.length)) + (bottomBlocks-0.93*maxBlockSize)+barHeight/2 + fontSizeBarText/3))
            .style('font-size', fontSizeBarText+'px')
            .text((d) => DataHandlers.textDisplay(d.count, '0'))


        // =========================================== Y-AXIS ===========================================
        thisNode.selectAll('#yAxis')
            .data([''])
            .enter().append('g')
                .attr('id', 'yAxis')

        let yAxis = thisNode.selectAll('#yAxis')


        yAxis.selectAll('text')
            .data(data)
            .enter().append('text')
                .attr('id', 'yAxis_label')
                .attr('text-anchor', 'end')
                .text((d) => d.datapoint);


        yAxis.selectAll('text')
            .data(data)
            .exit().remove();


        yAxis.selectAll('text')
            .data(data)
            .attr('x', Math.round(0.9 * xStart * screenSize[0]))
            .attr('y', (d, i) => Math.round(i * ((0.90 * maxBlockSize)/(data.length)) + (bottomBlocks-0.93*maxBlockSize)+barHeight*2/3))
            .style('font-size', fontSizeAxisText+'px');
            
    };



    //===================================  RENDERING  =================================== 
    render() {
        return (
            <svg ref = { node => this.node = node } 
                 id  = {'HorizontalBarChart_' + DataHandlers.TextNeutralizer(this.props.title)}
                 className = {'BackgroundSVG'}
                >

            </svg>
            )
        
    }

}
export default HorizontalBarChart

