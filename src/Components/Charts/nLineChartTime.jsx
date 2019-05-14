import React, { Component} from 'react'              ;
import { scaleLinear }     from 'd3-scale'           ;
import { select }          from 'd3-selection'       ;
import { max }             from 'd3-array'           ;
import * as d3             from 'd3'                 ;
import DataHandlers        from './DataHandlers.jsx' ;

/* DOCUMENTAION:
1) required inputs: 
    -> data   : the data to be plotted in the format described in 2)
    -> size   : the size of the svg block
    -> dates  : the date range of the data
    -> title  : the plot title
    -> colors : the color scale to be used (Ordinal scale!!!)
    -> legend : all te possible legend elements

2) input-data format:
    [{#TIMECATEGORY#: #NUMBER#, stack: #CATEGORY#, count: #NUMBER#},
     {#TIMECATEGORY#: #NUMBER#, stack: #CATEGORY#, count: #NUMBER#},
     {#TIMECATEGORY#: #NUMBER#, stack: #CATEGORY#, count: #NUMBER#}]
*/


class nLineChartTime extends Component {
    constructor(props) {
        super(props);
        this.createStackedBarChart = this.createStackedBarChart.bind(this);
    };

    componentDidMount() {
        this.createStackedBarChart();
    };

    componentDidUpdate() {
        this.createStackedBarChart();
    };



    createStackedBarChart(){
        //console.log('STACKED AREA CHART - TIME' + chartTitle);     

        //===================================  GENERAL  =================================== 
        let dates          = this.props.dates    ;
        let inputData      = this.props.data     ;
        let chartTitle     = this.props.title    ;
        let screenSize     = this.props.size     ;
        let resolutionData = this.props.resData  ;
        let currentTime    = this.props.now      ;
        let inputColor     = this.props.color    ;
        let showKPIs       = this.props.showKPIs ;




        //Adapting screen size
        screenSize = [parseFloat(d3.select('#nLineChartTime_' + DataHandlers.TextNeutralizer(this.props.title)).style('width' ).replace('px', '')),
                      parseFloat(d3.select('#nLineChartTime_' + DataHandlers.TextNeutralizer(this.props.title)).style('height').replace('px', ''))
                     ];

        const node   = this.node;
        let thisNode = select(node);

        const startLabels = chartTitle.replace(' ', '_');


        // =========================================== STYLING ===========================================

        // Colors
        let colorRange = DataHandlers.ColorScaleComputer(inputColor, (this.props.legend).length, 'D2L')
        const color = d3.scaleOrdinal()
                            .range (colorRange)
                            .domain(this.props.legend);

        //Transparancy
        const noUserInputOpacity  = 0.5;
        const highlightOpacity    = 0.8;


        
        // =========================================== DATAHANDLING ===========================================


        //Getting the filled in array of times that need to be filled
        let [completedTimeStamps, timeStampName, tickFormat] = DataHandlers.DateDataPopulator(dates, resolutionData);

        let [data, stackOptions] = DataHandlers.StackedDataHandler(inputData, completedTimeStamps, timeStampName);

        


        // ===================================== GEOMETRICAL CONSTANTS ========================================

        const xStart = 0.10 ; // percentual distance from the left side of the first bar
        const bottomBlocks = Math.round(screenSize[1] * 0.75); // Bootm position of the bars
        const maxBlockSize = Math.round(screenSize[1] * 0.50); // Percentual maximum height of the bars

        // Width of Plot background
        const plotBackgroundWidth = Math.round(0.84 * screenSize[0]);

        //translation coordinates
        const xTranslation = Math.round( xStart * screenSize[0]);
        const yTranslation = Math.round((bottomBlocks - 1.15 * maxBlockSize));
        const backgroundTranslation = 'translate(' + xTranslation.toString() + ',' + yTranslation.toString() + ')';

        const linewidth = 2; // [px]

        //Legend Component Sizes
        const legendRectWidth  = Math.round(0.06 * screenSize[1]  );
        const legendRectHeight = linewidth;
        const bottomLegend     = Math.round(0.93 * screenSize[1]  );






        // =========================================== GRID COORDINATES ===========================================

        //Getting all totals of the data
        let totals = [];
        data.forEach(function(element) { totals.push(element.total) });

        let dataMax = 1;
        if (totals.length > 0){
            dataMax = max(totals); 
        };

        // Y-AXIS -- Mapping Scale for block height
        const yScale  = scaleLinear() 
            .domain([0, dataMax])
            .range ([0, maxBlockSize]);

        const numGridLines = 4 ;

        //y-position of grid lines
        let GridLineValues = [];
        for (let i = 0; i < numGridLines + 1 ; i++){
            GridLineValues.push(i * dataMax/numGridLines);
        };

        // Defining xAxisScale
        let startPositionScale = xStart * screenSize[0] + 0.01 * plotBackgroundWidth ;
        let endPositionScale   = xStart * screenSize[0] + 0.99 * plotBackgroundWidth ;

        let xAxisScale = d3.scaleTime()
                           .range([startPositionScale, endPositionScale])
                           .domain(d3.extent(completedTimeStamps));



        // =========================================== LINE COORDINATES ===========================================
        let averages  = {totals:[0, 0]};
        let bests     = {totals:{count:0, time:''}};
        let totalText = {};
        let format    = d3.timeFormat(tickFormat);
        stackOptions.forEach( (element) => {averages[element] = [0, 0];bests[element] = {count:0, time:''};})

        //Defining y-positions of blocks
        data.forEach(function(d) {
            
            averages['totals'][0] += d.total;
            averages['totals'][1] += 1;

            if (bests['totals']['count'] < d.total){
                bests['totals']['count'] = d.total ;
                bests['totals']['time']  = format(d.stackInfo[0].bar);
            };

            let y1Previous = 0;
            for (let stackIndex in stackOptions){
                for (let i in d.stackInfo) {
                    if (d.stackInfo[i].stack === stackOptions[stackIndex]){
                        d.stackInfo[i]['y0'] = y1Previous;
                        d.stackInfo[i]['y1'] = y1Previous + yScale(d.stackInfo[i]['count']);
                        y1Previous           = y1Previous + yScale(d.stackInfo[i]['count']);

                        averages[d.stackInfo[i].stack][0] += d.stackInfo[i].count;
                        averages[d.stackInfo[i].stack][1] += 1;

                        if (bests[d.stackInfo[i].stack]['count'] < d.stackInfo[i].count){
                            bests[d.stackInfo[i].stack]['count'] = d.stackInfo[i].count            ;
                            bests[d.stackInfo[i].stack]['time']  = format(d.stackInfo[i].bar) ;
                        };
                    };
                };
            };
        });


        (Object.keys(averages)).forEach((key) => {
            totalText[key] = averages[key][0];
            averages[key] = averages[key][0]/averages[key][1];
        });




        let lineCoordinates= {};
        let textInfo = [];

        //Creating & Updating stacks in each bar
        data.forEach(function(dayData, k) {

            // Updating stack-rectangles
            let xCoorRect = xAxisScale(new Date(dayData.stackInfo[0].bar))

            let textInfoObject = {
                time : ''           ,
                total: dayData.total, 
            };

            for (let i in dayData.stackInfo){

                if (lineCoordinates[dayData.stackInfo[i].stack]){
                    lineCoordinates[dayData.stackInfo[i].stack]['x'].push(xCoorRect);
                    lineCoordinates[dayData.stackInfo[i].stack]['y'].push(dayData.stackInfo[i].y1);

                }else{
                    lineCoordinates[dayData.stackInfo[i].stack]={
                            x : [xCoorRect],
                            y : [dayData.stackInfo[i].y1]}
                };


                textInfoObject[dayData.stackInfo[i].stack] = dayData.stackInfo[i].count;
                textInfoObject['time'] = dayData.stackInfo[i].bar;
            };

            textInfo.push(textInfoObject);
        });

        
        let allKeys = Object.keys(lineCoordinates);
        let lines = [];
        allKeys.forEach((key) => {
            let coordinates = [];

            lineCoordinates[key]['x'].forEach((xCoordinate, k) => coordinates.push([xCoordinate, bottomBlocks-lineCoordinates[key]['y'][k]]))
            
            lines.push({stack : key,
                        data  : coordinates
                        });
        });


        // =========================================== CANVAS ===========================================
        //Adding svg Background
        thisNode.selectAll('.componentBackground')
            .data([''])
            .enter().append('rect')
                .attr('class', 'componentBackground');

        //Updating svg Background
        thisNode.selectAll('.componentBackground')
            .attr('width' , 1.1 * screenSize[0])
            .attr('height', 1.1 * screenSize[1]);


        // ============================================= TITLE ==============================================            
        //Adding a title
        thisNode.selectAll('.plotTitle')
            .data([chartTitle])
            .enter().append('text')
                .attr('class', 'plotTitle')
                .text((d)=> d);

        //Updating the title
        thisNode.selectAll('.plotTitle')
                .attr('x', Math.round(screenSize[0] * 0.05))
                .attr('y', Math.round(screenSize[1] * 0.10));

        // ========================================= ADDITIONAL INFO =========================================
        const PosAverage = [0.85, 0.10];
        const PosBest    = [0.57, 0.10];
        const PosTot     = [0.35, 0.10];
        const minScreenSize =  Math.min.apply(null,screenSize);
        
        // Adding Average if wanted
        if (showKPIs.includes('average')){
            thisNode.selectAll('#AverageNumberSide')
                .data([averages])
                .enter().append('text')
                    .attr('id', 'AverageNumberSide')
                    .attr('text-anchor', 'start');

            thisNode.selectAll('#AverageNumberSide')
                .attr('x', Math.round(PosAverage[0] * screenSize[0]))
                .attr('y', Math.round(PosAverage[1] * screenSize[1]))
                .style('font-size', '2.8vmin')
                .text((d) => DataHandlers.textDisplay(d.totals, '--'));


            thisNode.selectAll('#AverageTextSide')
                .data([''])
                .enter().append('text')
                    .attr('id', 'AverageTextSide')
                    .attr('text-anchor', 'start')
                    .style('fill', '#A5A5A5');

            thisNode.selectAll('#AverageTextSide')
                .attr('x', Math.round(PosAverage[0] * screenSize[0]))
                .attr('y', Math.round(PosAverage[1] * screenSize[1]) + 0.05 * minScreenSize)
                .style('font-size', '1.7vmin')
                .text((d) => 'Average');
        };

        
        
        // Adding Best if wanted
        if (showKPIs.includes('best')){
            thisNode.selectAll('#BestNumberSide')
                .data([bests])
                .enter().append('text')
                    .attr('id', 'BestNumberSide')
                    .attr('text-anchor', 'start');

            thisNode.selectAll('#BestNumberSide')
                .attr('x', Math.round(PosBest[0] * screenSize[0]))
                .attr('y', Math.round(PosBest[1] * screenSize[1]))
                .style('font-size', '2.8vmin')
                .text((d) => {
                        let textToReturn = '--' ;
                        if (d.totals.count !== 0){
                            textToReturn = DataHandlers.textDisplay(d.totals.count, '0');
                        };
                        return textToReturn;
                    });


            thisNode.selectAll('#BestTextSide')
                .data([bests])
                .enter().append('text')
                    .attr('id', 'BestTextSide')
                    .attr('text-anchor', 'start')
                    .style('fill', '#A5A5A5');

            thisNode.selectAll('#BestTextSide')
                .attr('x', Math.round(PosBest[0] * screenSize[0]))
                .attr('y', Math.round(PosBest[1] * screenSize[1]) + 0.05 * minScreenSize)
                .style('font-size', '1.7vmin')
                .text((d) => {
                        let textToReturn = 'Best (--)'  ;
                        if (d.totals.count !== 0){
                            textToReturn = 'Best (' + d.totals.time + ')';
                        };
                        return textToReturn;
                    });
        };


        // Adding Total if wanted
        if (showKPIs.includes('total')){
            thisNode.selectAll('#TotalNumberSide')
                .data([totalText])
                .enter().append('text')
                    .attr('id', 'TotalNumberSide')
                    .attr('text-anchor', 'start');

            thisNode.selectAll('#TotalNumberSide')
                .attr('x', Math.round(PosTot[0] * screenSize[0]))
                .attr('y', Math.round(PosTot[1] * screenSize[1]))
                .style('font-size', '2.8vmin')
                .text((d) => {
                        let textToReturn = '--' ;
                        if (d.totals !== 0){
                            textToReturn = DataHandlers.textDisplay(d.totals, '0');
                        };
                        return textToReturn;
                    });


            thisNode.selectAll('#TotalTextSide')
                .data([totalText])
                .enter().append('text')
                    .attr('id', 'TotalTextSide')
                    .attr('text-anchor', 'start')
                    .style('fill', '#A5A5A5');

            thisNode.selectAll('#TotalTextSide')
                .attr('x', Math.round(PosTot[0] * screenSize[0]))
                .attr('y', Math.round(PosTot[1] * screenSize[1]) + 0.05 * minScreenSize)
                .style('font-size', '1.7vmin')
                .text('Total');
        };

        // ============================================ GRID ============================================

        //Creating a Grid component 
        thisNode.selectAll('#PlotGrid')
            .data([''])
            .enter().append('g')
                .attr('id', 'PlotGrid');

        let GridPlot = thisNode.selectAll('#PlotGrid');

        //Adding plot background
        GridPlot.selectAll('.plotBackground')
            .data([''])
            .enter().append('rect')
                .attr('class', 'plotBackground')
                .attr('rx', 2)
                .attr('ry', 2);

        //Updating plot background
        GridPlot.selectAll('.plotBackground')
            .attr('width' , plotBackgroundWidth)
            .attr('height', Math.round(maxBlockSize * 1.15))
            .attr('transform', backgroundTranslation)



        //Adding Grid lines
        GridPlot.selectAll('line')
            .data(GridLineValues)
            .enter().append('line')
                .attr('id', 'horizontalGridLine')
                .attr('x1', startPositionScale)
                .attr('x2', endPositionScale)
                .attr('y1', bottomBlocks)
                .attr('y2', bottomBlocks)
                .style('stroke', '#D0D0D0')
                .style('stroke-width', 1)
                .style('stroke-opacity', 0.15);

        //Updating Grid lines
        GridPlot.selectAll('#horizontalGridLine')
            .data(GridLineValues)
            .attr('x1' , startPositionScale)
            .attr('x2' , endPositionScale)
            .attr('y1' , (d) => bottomBlocks - yScale(d))
            .attr('y2' , (d) => bottomBlocks - yScale(d))  


        // Adding Y-axis ticks
        GridPlot.selectAll('.y_axis_ticks')
            .data(GridLineValues)
            .enter().append('text')
                .attr('class', 'y_axis_ticks')
                .attr('x', startPositionScale)
                .attr('y', bottomBlocks)
                .attr('text-anchor','end')
                .style('font-size', '1.7vmin')

        // Adding Y-axis ticks
        GridPlot.selectAll('.y_axis_ticks')
            .data(GridLineValues)
            .attr('x', 0.8 * startPositionScale)
            .attr('y', (d) => bottomBlocks - yScale(d))
            .text((d) => DataHandlers.textDisplay(d, ''))


        // ======================================== SCHEDULE TIMER ==========================================
        if (typeof(currentTime) !== 'undefined'){
            let scheduleRectangeData = []

            const now      = (new Date()).getTime()
            const fromDate = (new Date(dates[0])).setHours(0 ,0 ,0);
            const toDate   = (new Date(dates[1])).setHours(23,59,59);
            if ((timeStampName === 'hour') &&  ( now >= fromDate)  && (now <= toDate )){
                scheduleRectangeData = [fromDate.toString() + toDate.toString()]
            };
            
            

            thisNode.selectAll('#scheduleTimer')
                .data(scheduleRectangeData) 
                .enter().append('rect')
                    .attr('id', 'scheduleTimer')
                    .attr('rx', 2)
                    .attr('ry', 2)
                    .attr('width' , 0)
                    .attr('x', xTranslation + plotBackgroundWidth)
                    .style('fill', 'black')
                    .style('opacity', 0.4)
                    .style('z-index', -20);

            thisNode.selectAll('#scheduleTimer')
                .data(scheduleRectangeData) 
                .exit().remove()

            thisNode.selectAll('#scheduleTimer')
                .data(scheduleRectangeData)
                .transition()
                .duration(1000)
                .ease(d3.easeLinear)
                .attr('height', Math.round(maxBlockSize * 1.15))
                .attr('width' , (xTranslation + plotBackgroundWidth) - xAxisScale(currentTime.getTime()))
                .attr('x', xAxisScale(currentTime.getTime() ))
                .attr('y', yTranslation);
        };


        // =========================================== Lines ===========================================


        //Creating group for all the lines
        thisNode.selectAll('#' + startLabels + '_dataLineGroup')
            .data([''])
            .enter().append('g')
                .attr('id', startLabels + '_dataLineGroup');

        let dataLines = thisNode.selectAll('#' + startLabels + '_dataLineGroup');

        function LinePath(d){
            let line =  d3.line()
                          .x(function(d) { return d[0] })
                          .y(function(d) { return d[1] })
                          .curve(d3.curveMonotoneX);
            return line(d);
        };

    

        // Adding new lines
        dataLines.selectAll('.dataline')
            .data(lines, (d) => d.stack)
            .enter().append('path')
                .attr('id', (d) => startLabels + '_dataline_' + DataHandlers.TextNeutralizer(d.stack))
                .attr('class', 'dataline')
                .attr('d', (d) => LinePath(d.data) )
                .attr('fill', 'none')
                .attr('stroke', (d) => color(d.stack))
                .attr('stroke-linejoin', 'round')
                .attr('stroke-linecap', 'round')
                .attr('stroke-width', linewidth);
                

        // Removing surplus lines
        dataLines.selectAll('.dataline')
            .data(lines, (d) => d.stack)
            .exit().remove();

        // Updating lines
        dataLines.selectAll('.dataline')
            .data(lines, (d) => d.stack)
            .attr('stroke', (d) => color(d.stack))

        dataLines.selectAll('.dataline')
            .transition()
            .duration(300)
            .ease(d3.easeLinear)
            .attr('d', (d) => LinePath(d.data) )





        // =========================================== X-AXIS ===========================================

        //Number of ticks to put
        let tickValues = [];
        data.forEach((element) => tickValues.push( new Date(element.stackInfo[0].bar) ) )

        let divider = 2;
        let originalTicks = tickValues;
        while (tickValues.length > 13){
            // eslint-disable-next-line
            tickValues = originalTicks.filter((value, index) => index % divider === 0);
            divider += 1
        };


        let xaxis = d3.axisBottom(xAxisScale)
                        .tickValues(tickValues)
                        .tickFormat(d3.timeFormat(tickFormat));


        thisNode.selectAll('.' + startLabels +'_timeAxis')
            .data([''])
            .enter().append('g')
                .attr('class', startLabels +'_timeAxis')
                

        thisNode.selectAll('.' + startLabels +'_timeAxis')
            .attr('transform', 'translate(0,' + bottomBlocks + ')')
            .call(xaxis)
            .selectAll('text')
                .style('text-anchor', 'end')
                .attr('dy', '.7em')
                .style('font-size', '1.4vmin')
                .attr('transform', 'rotate(-25)')

        thisNode.selectAll('.' + startLabels +'_timeAxis').selectAll('path')
            .attr('stroke', '#E5E5E5')

        thisNode.selectAll('.' + startLabels +'_timeAxis').selectAll('line')
            .attr('stroke', '#E5E5E5')



        // =========================================== LEGEND ===========================================
        // Creating Legend
        thisNode.selectAll('#' + startLabels +'_Legend')
            .data([''])
            .enter().append('g')
                .attr('id', startLabels +'_Legend');

        let Legend = thisNode.selectAll('#' + startLabels +'_Legend');



        // Addin Color Blocks
        Legend.selectAll('.' + startLabels +'_LegendBlock')
            .data(stackOptions, (d, i) => d)
            .enter().append('rect')
                .attr('id', (d) => startLabels +'_LegendBlock' + DataHandlers.TextNeutralizer(d))
                .attr('class', startLabels +'_LegendBlock')
                .style('fill'  , (d) => color(d))
                .style('stroke', (d) => color(d))
                .style('stroke-width', 0.7)
                .style('stroke-opacity', highlightOpacity)
                .style('fill-opacity'  , noUserInputOpacity)

        // Removing surplus color blocks
        Legend.selectAll('.'+ startLabels +'_LegendBlock')
            .data(stackOptions, (d, i) => d)
            .exit().remove()

        //Updating Color Blocks
        Legend.selectAll('.' + startLabels +'_LegendBlock')
            .data(stackOptions, (d, i) => d)
            .attr('x', (d, i) => Math.round(((i) * 1 / (stackOptions.length+1) * screenSize[0]) + legendRectWidth))
            .attr('y', bottomLegend)
            .attr('width' , legendRectWidth)
            .attr('height', legendRectHeight)


        // Adding Legend Names
        Legend.selectAll('.' + startLabels +'_LegendName')
            .data(stackOptions, (d, i) => d)
            .enter().append('text')
                .attr('class', startLabels +'_LegendName')
                .attr('id', (d) => startLabels +'_LegendName' + DataHandlers.TextNeutralizer(d) )
                .attr("text-anchor", "start")
                .text((d) => {let name = d.replace(/([A-Z]+)/g, " $1").replace(/([A-Z][a-z])/g, " $1");
                                  return name[0].toUpperCase() + name.slice(1)});


        // Removing Surplus Legend Names
        Legend.selectAll('.'+ startLabels +'_LegendName')
            .data(stackOptions, (d, i) => d)
            .exit().remove();

        // Updating Legend Names
        Legend.selectAll('.' + startLabels +'_LegendName')
            .data(stackOptions, (d, i) => d)
            .attr('x', (d, i) => Math.round(((i) * 1 / (stackOptions.length+1) * screenSize[0]) + 2.3 * legendRectWidth))
            .attr('y', Math.round(bottomLegend + 0.85 * legendRectHeight))
            .style('font-size', '1.5vmin')

    };




    //===================================  RENDERING  =================================== 
    render() {
        return (
            <svg ref = { node => this.node = node } 
                 id  = {'nLineChartTime_' + DataHandlers.TextNeutralizer(this.props.title)}
                 className = {'BackgroundSVG'}
                 >
            </svg>
        )
        
    }

}
export default nLineChartTime

