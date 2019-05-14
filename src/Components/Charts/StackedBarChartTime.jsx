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


class StackedBarChartTime extends Component {
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
        //console.log('STACKED BAR CHART - TIME' + chartTitle);        

        //===================================  GENERAL  =================================== 
        let dates          = this.props.dates   ;
        let inputData      = this.props.data    ;
        let chartTitle     = this.props.title   ;
        let screenSize     = this.props.size    ;
        let resolutionData = this.props.resData ;
        let currentTime    = this.props.now     ;
        let showKPIs       = this.props.showKPIs;


        //Adapting screen size
        screenSize = [parseFloat(d3.select('#StackedBarChartTime_' + DataHandlers.TextNeutralizer(this.props.title)).style('width' ).replace('px', '')),
                      parseFloat(d3.select('#StackedBarChartTime_' + DataHandlers.TextNeutralizer(this.props.title)).style('height').replace('px', ''))
                     ];

        const node   = this.node    ;
        let thisNode = select(node) ;

        //Animation Variables
        const highligtAnimationDuration = 250 ; // Duration of animation when stack is selected
        const selectedAnimationDuration = 500 ; // Duration of animation when stack is selected

        //State Variables
        let stackCategoryIsSelected = false ;
        let selectedStackCategory   = null  ;

        const startLabels = chartTitle.replace(' ', '_');


        // =========================================== STYLING ===========================================
        // Fontsizes
        const fontSizeBarText = Math.round(0.035 * screenSize[1]);

        //Colors
        let colorRange = DataHandlers.ColorScaleComputer(this.props.color, (this.props.legend).length, 'D2L')
        const color = d3.scaleOrdinal()
                            .range (colorRange)
                            .domain(this.props.legend);


        //Transparancy
        const nonHighlightOpacity = 0.2;
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


        //Plot Size constants
        const barWidth = Math.round(0.65 * plotBackgroundWidth/(data.length + 1))//Math.round(screenSize[0] * 0.06); // Width of the bars


        //Legend Component Sizes
        const legendRectWidth  = Math.round(5.8  * Math.min.apply(null, screenSize)/100);//Math.round(0.06 * screenSize[1]  );
        const legendRectHeight = Math.round(3.0  * Math.min.apply(null, screenSize)/100);
        const bottomLegend     = Math.round(0.93 * screenSize[1]  );




        // =========================================== GRID COORDINATES ===========================================
        const numGridLines = 4 ;

        //x-position of grid lines
        const xPosGridlines = [Math.round( (xStart * screenSize[0]) + 0.01 * plotBackgroundWidth),
                               Math.round( (xStart * screenSize[0]) + 0.99 * plotBackgroundWidth)];

        //y-position of grid lines
        let GridLineValues = [];
        for (let i = 0; i < numGridLines + 1 ; i++){
            GridLineValues.push(Math.round(i * maxBlockSize/numGridLines));
        };


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




        // Defining xAxisScale
        let startPositionScale = xStart * screenSize[0] + 1.5 * (barWidth / 2)                   ;
        let endPositionScale   = startPositionScale     + plotBackgroundWidth - 1.5 * (barWidth) ;

        let xAxisScale = d3.scaleTime()
                           .range([startPositionScale, endPositionScale])
                           .domain(d3.extent(completedTimeStamps));

        let averages  = {totals:[0, 0]};
        let bests     = {totals:{count:0, time:''}};
        let totalText = {};
        let format    = d3.timeFormat(tickFormat);
        stackOptions.forEach( (element) => {averages[element] = [0, 0];bests[element] = {count:0, time:''};})

        //Defining y-positions of blocks
        data.forEach(function(d) {
            let y1Previous = 0;
            averages['totals'][0] += d.total;
            averages['totals'][1] += 1;

            if (bests['totals']['count'] < d.total){
                bests['totals']['count'] = d.total ;
                bests['totals']['time']  = format(d.stackInfo[0].bar);
            };
            for (let stackIndex in stackOptions){
                for (let i in d.stackInfo) {
                    if (d.stackInfo[i].stack === stackOptions[stackIndex]){
                        d.stackInfo[i]['y0'] = y1Previous;
                        d.stackInfo[i]['y1'] = y1Previous + yScale(d.stackInfo[i]['count']);
                        y1Previous           = y1Previous + yScale(d.stackInfo[i]['count']);

                        averages[d.stackInfo[i].stack][0] += d.stackInfo[i].count;
                        averages[d.stackInfo[i].stack][1] += 1;

                        if (bests[d.stackInfo[i].stack]['count'] < d.stackInfo[i].count){
                            bests[d.stackInfo[i].stack]['count'] = d.stackInfo[i].count       ;
                            bests[d.stackInfo[i].stack]['time' ] = format(d.stackInfo[i].bar) ;
                        };
                    };
                };
            };
        });

        (Object.keys(averages)).forEach((key) => {
            totalText[key] = averages[key][0];
            if (averages[key][1] !== 0){
                averages[key]  = averages[key][0]/averages[key][1];
            }else{
                averages[key] = null;
            };
        });


        // =========================================== CANVAS ===========================================
        //Adding svg Background
        thisNode.selectAll('.componentBackground')
            .data([''])
            .enter().append('rect')
                .attr('class', 'componentBackground')

        //Updating svg Background
        thisNode.selectAll('.componentBackground')
            .attr('width' , 1.1 * screenSize[0])
            .attr('height', 1.1 * screenSize[1])
            .on('click', StackUnSelected);


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
                .attr('y', Math.round(screenSize[1] * 0.10))
                .on('click', StackUnSelected);


        // ========================================= ADDITIONAL INFO =========================================
        const PosAverage = [0.85, 0.10];
        const PosBest    = [0.57, 0.10];
        const PosTot     = [0.35, 0.10];
        const minScreenSize =  Math.min.apply(null,screenSize);

        // Adding Average if wanted
        if (showKPIs.includes('average')){
            // add majority text
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
            // Add Best text
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
                        let textToReturn = 'Best' ;
                        if (d.totals.count !== 0){
                            textToReturn += ' (' + d.totals.time + ')';
                        };
                        return textToReturn;
                    });
        };

        // Adding Total if wanted
        if (showKPIs.includes('total')){
            // add total text
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
            .on('click', StackUnSelected);



        //Adding Grid lines
        GridPlot.selectAll('line')
            .data(GridLineValues)
            .enter().append('line')
                .attr('id', 'horizontalGridLine')
                .attr('x1', xPosGridlines[0])
                .attr('x2', xPosGridlines[1])
                .attr('y1', (d) => bottomBlocks)
                .attr('y2', (d) => bottomBlocks)
                .style('stroke', '#D0D0D0')
                .style('stroke-width', 1)
                .style('stroke-opacity', 0.15);

        //Updating Grid lines
        GridPlot.selectAll('#horizontalGridLine')
            .data(GridLineValues)
            .attr('x1' , xPosGridlines[0])
            .attr('x2' , xPosGridlines[1])
            .attr('y1' , (d) => bottomBlocks - d)
            .attr('y2' , (d) => bottomBlocks - d)
            .on('click', StackUnSelected);      


        // ======================================== SCHEDULE TIMER ==========================================
        if (typeof(currentTime) !== 'undefined'){

            let scheduleRectangeData = [];

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




        // =========================================== RECTANGLES ===========================================
        //Creating group for all the bars
        thisNode.selectAll('#' + startLabels + '_bar_groups')
            .data([''])
            .enter().append('g')
                .attr('id', startLabels + '_bar_groups');



        // Create subgroups for all the stacks in each bar
        let Bars = thisNode.selectAll('#' + startLabels + '_bar_groups');

        Bars.selectAll('#' + startLabels + '_bar_group')
            .data(data)
            .enter().append('g')
                .attr('id', startLabels + '_bar_group')
                .attr('class', (d, i) => startLabels + '_bar_group_' + i);

        Bars.selectAll('#' + startLabels + '_bar_group')
            .data(data)
            .exit().remove();


        let OriginalYPositionText = [];
        //Creating & Updating stacks in each bar
        data.forEach(function(dayData, k) {
            let Grouper = Bars.selectAll('.' + startLabels + '_bar_group_' + k);

            //Adding stack-rectangles
            Grouper.selectAll('rect')
                .data(dayData.stackInfo, (d, i) =>  DataHandlers.TextNeutralizer(d.stack) + '_' + DataHandlers.TextNeutralizer(d.bar))
                .enter().append('rect')
                    .attr('id'    , (d) => startLabels + '_bar_' + DataHandlers.TextNeutralizer(d.bar) + '_' + DataHandlers.TextNeutralizer(d.stack))
                    .attr('class' , (d) => startLabels + '_bar_' + DataHandlers.TextNeutralizer(d.stack))
                    .attr('y'     , bottomBlocks)
                    .style('fill' , (d) => color(d.stack))
                    .style('stroke', (d) => color(d.stack))
                    .style('stroke-width', 0.7)
                    .style('fill-opacity', noUserInputOpacity)
                    .style('stroke-opacity', highlightOpacity);

            // Removing surplus stack-rectangles
            Grouper.selectAll('rect')
                .data(dayData.stackInfo, (d, i) => DataHandlers.TextNeutralizer(d.stack) + '_' + DataHandlers.TextNeutralizer(d.bar))
                .exit().remove();

            // Updating stack-rectangles
            let xCoorRect = xAxisScale(new Date(dayData.stackInfo[0].bar)) - barWidth/2

            Grouper.selectAll('rect')
                .data(dayData.stackInfo, (d, i) => DataHandlers.TextNeutralizer(d.stack) + '_' + DataHandlers.TextNeutralizer(d.bar))
                .attr('x'     , xCoorRect)
                .attr('width' , barWidth);

            Grouper.selectAll('rect')
                .transition()
                .duration(300)
                .ease(d3.easeLinear)
                .attr('y'     , (d) => (bottomBlocks - d.y1))
                .attr('height', (d) => (d.y1 - d.y0));

            // Adding interactivity
            Grouper.selectAll('rect') 
                .on('mouseover' , mouseoverHandler )
                .on('mouseout'  , mouseoutHandler  )
                .on('click'     , (d) => StackSelected(d.stack));


            //Adding Bar Text
            Grouper.selectAll('text')
                .data([dayData.stackInfo[0]], (d) => d.bar)
                .enter().append('text')
                    .attr('id', (d) => startLabels + '_bar_text_' + DataHandlers.TextNeutralizer(d.bar))
                    .attr('class', startLabels + '_Bar_Number_text')
                    .attr('x' , xCoorRect)
                    .attr('y' , bottomBlocks - 4)
                    .attr('text-anchor', 'middle')
                    .style('opacity', 1);

            // Removing Surplus Bar Text
            Grouper.selectAll('.'+ startLabels + '_Bar_Number_text')
                .data([dayData.stackInfo[0]], (d) => d.bar)
                .exit().remove()

            // Updating Bar Text
            Grouper.selectAll('.'+ startLabels + '_Bar_Number_text')
                .data([dayData.stackInfo[0]], (d) => d.bar)
                .transition()
                .duration(300)
                .ease(d3.easeLinear)
                .attr('y' , (d) => Math.round( bottomBlocks - yScale(d.total) - 4) )
                .text((d) => DataHandlers.textDisplay(d.total, '0'));

            Grouper.selectAll('.' + startLabels + '_Bar_Number_text')
                .style('font-size' , fontSizeBarText +'px')
                .attr('x' , xCoorRect + barWidth/2)
                .on('click', StackUnSelected);


            OriginalYPositionText.push(Math.round(bottomBlocks - yScale(dayData.total) - 4));
        });
        


        // =========================================== INTERACTIVITY ===========================================

        function StackSelected(stack){

            if (!stackCategoryIsSelected || selectedStackCategory !== stack){

                //Changing state variables
                stackCategoryIsSelected = true;
                selectedStackCategory = stack;

                //Variables to pass on data from blocks to bar-texts
                let BartopValues = [];
                let TextYPosition  = [];

                //Animate the non-highlighted stacks out of the plot
                thisNode.selectAll('#' + startLabels + '_bar_group').selectAll('rect:not(.' + startLabels + '_bar_' + DataHandlers.TextNeutralizer(stack) +')').transition()
                    .duration(selectedAnimationDuration)
                    .attr('height', 0)
                    .attr('y', bottomBlocks);


                //Animate the highlighted stacks to the bottom of the plot
                thisNode.selectAll('.'+ startLabels +'_bar_' + DataHandlers.TextNeutralizer(stack)).transition()
                    .duration(selectedAnimationDuration)
                    .attr('y'     , (d) => bottomBlocks - (d.y1-d.y0))
                    .attr('height', (d) => (d.y1-d.y0))   //Making sure to keep the original height in case of fast clicking
                    .style('fill-opacity', highlightOpacity)
                    .each(function(d){
                        BartopValues.push(d.count);
                        TextYPosition.push(bottomBlocks - (d.y1 - d.y0)-4);
                    });

                //Animate Text Movement
                thisNode.selectAll('.' + startLabels +'_Bar_Number_text').transition()
                    .duration(selectedAnimationDuration)
                    .attr('y', (d, i)=> TextYPosition[i])
                    .style('opacity', 1)
                    .text((d, i) => DataHandlers.textDisplay(BartopValues[i], '0')); 


                //Highlighting Legend block of selected stack
                thisNode.selectAll('#' + startLabels + '_LegendBlock' + DataHandlers.TextNeutralizer(stack))
                    .transition()
                    .duration(selectedAnimationDuration)
                    .style('fill-opacity', highlightOpacity);

                //Fading Legend blocks of non-selected stack
                thisNode.selectAll('.'+ startLabels +'_LegendBlock:not(#'+ startLabels +'_LegendBlock'+ DataHandlers.TextNeutralizer(stack) + ')')
                    .transition()
                    .duration(selectedAnimationDuration)
                    .style('fill-opacity', nonHighlightOpacity)
                    .style('stroke-opacity', nonHighlightOpacity);

                //Fading names of non-selected stack
                thisNode.selectAll('.' + startLabels +'_LegendName:not(#'+ startLabels +'_LegendName' + DataHandlers.TextNeutralizer(stack) +')')
                    .transition()
                    .duration(selectedAnimationDuration)
                    .style('opacity', nonHighlightOpacity);


                //Making sure the opacity of the selected stack is 1
                thisNode.selectAll('#' + startLabels +'_LegendName' + DataHandlers.TextNeutralizer(stack))
                    .transition()
                    .duration(selectedAnimationDuration)
                    .style('opacity', 1);


                //Changing Average Data
                if (showKPIs.includes('average')){
                    thisNode.selectAll('#AverageNumberSide')
                        .text(DataHandlers.textDisplay(averages[stack], '--'));
                };

                //Changing Best Data
                if (showKPIs.includes('best')){
                    thisNode.selectAll('#BestNumberSide')
                        .text(DataHandlers.textDisplay(bests[stack]['count'], '0'));

                    thisNode.selectAll('#BestTextSide')
                        .text((d) => {let textToReturn = '--' ;
                                      if (bests[stack]['count'] !== 0){
                                            textToReturn = 'Best (' + bests[stack]['time']  + ')';
                                        };
                                        return textToReturn;
                                    });
                };

                // Changing Total Data
                if (showKPIs.includes('total')){
                    thisNode.selectAll('#TotalNumberSide')
                        .text(DataHandlers.textDisplay(totalText[stack], '0'));
                };

            }else{
                StackUnSelected();
            };
        };


        function StackUnSelected(){

            if (stackCategoryIsSelected){

                //Changing state variables
                stackCategoryIsSelected = false;
                selectedStackCategory = null;


                //Animate Text Movement
                thisNode.selectAll('.' + startLabels +'_Bar_Number_text').transition()
                    .duration(highligtAnimationDuration)
                    .ease(d3.easeLinear)
                    .attr('y', (d, i) => OriginalYPositionText[i])
                    .text((d, i) => DataHandlers.textDisplay(totals[i], '0'));


                //Animate the hidden bars back to oringinal position
                thisNode.selectAll('#' + startLabels +'_bar_group').selectAll('rect').transition()
                    .duration(highligtAnimationDuration)
                    .ease(d3.easeLinear)
                    .attr('y'     , (d) => (bottomBlocks - d.y1))
                    .attr('height', (d) => (d.y1 - d.y0))
                    .style('fill-opacity', noUserInputOpacity);

                //Resetting all Legend block styles to original ones
                thisNode.selectAll('.' + startLabels +'_LegendBlock')
                    .transition()
                    .duration(selectedAnimationDuration)
                    .style('fill-opacity', noUserInputOpacity)
                    .style('stroke-opacity', noUserInputOpacity);

                //Resetting all Legend name styles to original ones
                thisNode.selectAll('.' + startLabels +'_LegendName')
                    .transition()
                    .duration(selectedAnimationDuration)
                    .style('opacity', 1);



                //Changing Average Data
                if (showKPIs.includes('average')){
                    thisNode.selectAll('#AverageNumberSide')
                        .text(DataHandlers.textDisplay(averages['totals'], '--'));
                };

                //Changing Best Data
                if (showKPIs.includes('best')){
                    thisNode.selectAll('#BestNumberSide')
                        .text(DataHandlers.textDisplay(bests['totals']['count'], '0'));

                    thisNode.selectAll('#BestTextSide')
                        .text((d) => {let textToReturn = '--' ;
                                      if (bests['totals']['count'] !== 0){
                                            textToReturn = 'Best (' + bests['totals']['time']  + ')';
                                        };
                                        return textToReturn;
                                    });
                };


                // Changing Total Data
                if (showKPIs.includes('total')){
                    thisNode.selectAll('#TotalNumberSide')
                        .text(DataHandlers.textDisplay(totalText['totals'], '0'));
                };
            };
        };


        // Fades all others when one is selected
        function mouseoverHandler(d, i) {
            
            //If a stack is selected nog highlighting is required
            if (!stackCategoryIsSelected){

                //giving the non-highlighted bars a lower opacity (additionally finishing the animation of stacks selection if not finished)
                thisNode.selectAll('#' + startLabels +'_bar_group').selectAll('rect:not(#' + startLabels +'_bar_' + DataHandlers.TextNeutralizer(d.bar) + '_' + DataHandlers.TextNeutralizer(d.stack) + ')').transition()
                    .duration(highligtAnimationDuration)
                    .ease(d3.easeLinear)
                    .attr('y'     , (d) =>(bottomBlocks - d.y1))
                    .attr('height', (d) =>(d.y1 - d.y0))
                    .style('fill-opacity', nonHighlightOpacity);

                //fading the text of non-highlighted bars
                thisNode.selectAll('#bar_group').selectAll('text:not(#' + startLabels +'_bar_text_' + DataHandlers.TextNeutralizer(d.bar) + ')').transition()
                    .duration(highligtAnimationDuration)
                    .ease(d3.easeLinear)
                    .attr('y', (d) => Math.round(bottomBlocks - yScale(d.total) - 4))
                    .style('opacity', nonHighlightOpacity);


                //Giving highlited bar more opacity (additionally finishing the animation of stacks selection f not finished)
                thisNode.selectAll('#' + startLabels +'_bar_' + DataHandlers.TextNeutralizer(d.bar) + '_' + DataHandlers.TextNeutralizer(d.stack)).transition()
                    .duration(highligtAnimationDuration)
                    .ease(d3.easeLinear)
                    .attr('y'     , (d) => (bottomBlocks - d.y1))
                    .attr('height', (d) => (d.y1 - d.y0))
                    .style('fill', color(d.stack))
                    .style('fill-opacity', highlightOpacity);


                //Giving text of highlited bar more opacity.
                thisNode.select('#' + startLabels +'_bar_text_' + DataHandlers.TextNeutralizer(d.bar)).transition()
                    .duration(selectedAnimationDuration)
                    .ease(d3.easeLinear)
                    .attr('y', (d) => Math.round(bottomBlocks - yScale(d.total) - 4))
                    .style('opacity', 1)
                    .text(DataHandlers.textDisplay(d.count, '0'));
            };
        };


        //UnFades all others when one is selected
        function mouseoutHandler(d, i) {

            if (!stackCategoryIsSelected){

                //Putting back the bars to their initial state
                thisNode.selectAll('#' + startLabels +'_bar_group').selectAll('rect').transition()
                    .duration(highligtAnimationDuration)
                    .ease(d3.easeLinear)
                    .attr('y'     , (d) => (bottomBlocks - d.y1))
                    .attr('height', (d) => (d.y1 - d.y0))
                    .style('fill-opacity', noUserInputOpacity);


                //Putting back the bar-texts to their initial state
                thisNode.selectAll('#' + startLabels +'_bar_group').selectAll('text').transition()
                    .duration(highligtAnimationDuration)
                    .ease(d3.easeLinear)
                    .attr('y', (d) => Math.round(bottomBlocks - yScale(d.total) - 4))
                    .style('opacity', 1);


                //Putting the now unselected value back to its initial value
                thisNode.select('#' + startLabels +'_bar_text_' + DataHandlers.TextNeutralizer(d.bar)).transition()
                    .duration(highligtAnimationDuration)
                    .ease(d3.easeLinear)
                    .attr('y', (d) => Math.round(bottomBlocks - yScale(d.total) - 4))
                    .text(DataHandlers.textDisplay(d.total, '0'));
            };
        };


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
                .attr("transform", "rotate(-25)")
                .on('click', StackUnSelected);

        thisNode.selectAll('.' + startLabels +'_timeAxis').selectAll('path')
            .attr('stroke', '#E5E5E5')
            .on('click', StackUnSelected);

        thisNode.selectAll('.' + startLabels +'_timeAxis').selectAll('line')
            .attr('stroke', '#E5E5E5')
            .on('click', StackUnSelected);



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
                .attr('id', (d) => startLabels +'_LegendBlock'+d.replace(' ', '-'))
                .attr('class', startLabels +'_LegendBlock')
                .style('fill'  , (d) => color(d))
                .style('stroke', (d) => color(d))
                .style('stroke-width', 0.7)
                .style('stroke-opacity', highlightOpacity)
                .style('fill-opacity'  , noUserInputOpacity)
                .on('mouseover', LegendHover)
                .on('mouseout' , LegendUnHover);

        // Removing surplus color blocks
        Legend.selectAll('.'+ startLabels +'_LegendBlock')
            .data(stackOptions, (d, i) => d)
            .exit().remove()

        //Updating Color Blocks
        Legend.selectAll('.' + startLabels +'_LegendBlock')
            .data(stackOptions, (d, i) => d)
            .attr('x', (d, i) => Math.round(((i) * 1 / 3 * screenSize[0]) + legendRectWidth))
            .attr('y', bottomLegend)
            .attr('width' , legendRectWidth)
            .attr('height', legendRectHeight)
            .on('click', (d) => StackSelected(d));


        // Adding Legend Names
        Legend.selectAll('.' + startLabels +'_LegendName')
            .data(stackOptions, (d, i) => d)
            .enter().append('text')
                .attr('class', startLabels +'_LegendName')
                .attr('id', (d) => startLabels +'_LegendName' + DataHandlers.TextNeutralizer(d) )
                .attr('text-anchor', 'start')
                .text((d) => {let name = d.replace(/([A-Z]+)/g, " $1").replace(/([A-Z][a-z])/g, " $1");
                                  return name[0].toUpperCase() + name.slice(1)});

        // Removing Surplus Legend Names
        Legend.selectAll('.'+ startLabels +'_LegendName')
            .data(stackOptions, (d, i) => d)
            .exit().remove();

        // Updating Legend Names
        Legend.selectAll('.' + startLabels +'_LegendName')
            .data(stackOptions, (d, i) => d)
            .attr('x', (d, i) => Math.round(((i) * 1 / 3 * screenSize[0]) + 2.3 * legendRectWidth))
            .attr('y', Math.round(bottomLegend + legendRectHeight))
            .style('font-size', '1.5vmin')
            .on('click', (d) => StackSelected(d));


        // ====================================== LEGEND INTERACTION =====================================
        function LegendHover(d, i){
                d3.select(this)
                    .transition()
                    .duration(150)
                    .ease(d3.easeLinear)
                    .style('fill-opacity', highlightOpacity);
        };

        function LegendUnHover(d, i){
                d3.select(this)
                    .transition()
                    .duration(150)
                    .ease(d3.easeLinear)
                    .style('fill-opacity', noUserInputOpacity);
        };
    };




    //===================================  RENDERING  =================================== 
    render() {
        return (
            <svg ref = { node => this.node = node } 
                 id  = {'StackedBarChartTime_' + DataHandlers.TextNeutralizer(this.props.title)}
                 className = {'BackgroundSVG'}
                 >
            </svg>
        )
        
    }

}
export default StackedBarChartTime

