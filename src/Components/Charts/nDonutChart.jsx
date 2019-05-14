import React, { Component} from 'react'              ;
import { select }          from 'd3-selection'       ;
import * as d3             from 'd3'                 ;
import DataHandlers        from './DataHandlers.jsx' ;




/* DOCUMENTAION:
1) required inputs: 
    -> data  : the data to be plotted in the format described in 2)
    -> size  : the size of the svg block
    -> title : the plot title
    -> color : the color of the line
    -> unit  : the unit to put next to the absolute numbers (inside the donut chart)
    -> legend: all the possibilities in the chart. 

2) input-data format:
    [{datapoint: #CATEGORY#, count: #NUMBER#},
     {datapoint: #CATEGORY#, count: #NUMBER#},
     {datapoint: #CATEGORY#, count: #NUMBER#}]
*/


class nDonutChart extends Component {
    constructor(props) {
        super(props);
        this.createNDonutChart = this.createNDonutChart.bind(this);
    };

    componentDidMount() {
        this.createNDonutChart();
    };


    componentDidUpdate() {
        this.createNDonutChart();
    };


    // ************************ CHART CONSTRUCTION ************************ 
    createNDonutChart(){ 
        //console.log('n-DonutChart')

        let inputData    = this.props.data    ;
        let screenSize   = this.props.size    ;
        let showKPIs     = this.props.showKPIs;
        const chartTitle = this.props.title   ;
        const unit       = this.props.unit    ;
        const legend     = this.props.legend  ;
        

        let plotCats   = [];
        inputData.forEach((element) => {if (!plotCats.includes(element.category)){plotCats.push(element.category);};}) 


        
        //Adapting screen size
        screenSize = [parseFloat(d3.select('#nDonutChart_' + DataHandlers.TextNeutralizer(this.props.title)).style('width' ).replace('px', '')),
                      parseFloat(d3.select('#nDonutChart_' + DataHandlers.TextNeutralizer(this.props.title)).style('height').replace('px', ''))
                     ];

        const node   = this.node    ;
        let thisNode = select(node) ;


        // ===================================== GEOMETRICAL CONSTANTS ========================================

        const numRows = 1;
        const numCols = plotCats.length;

        const plotSpacingUnitX = 1.0 * screenSize[0]/(2 * numCols); 
        const plotSpacingUnitY = 0.9 * screenSize[1]/(2 * numRows); 

        //Inner radius 

        const innerRadius = Math.round(0.60 * (Math.min.apply(null, [plotSpacingUnitX, plotSpacingUnitY])));

        const nonHighlightMultiplier = 1.20 ;
        const highlightMultiplier    = 1.25 ;

        const globalStartAngle = this.props.startEndAngles[0] ; // [radians]
        const globalEndAngle   = this.props.startEndAngles[1] ; // [radians]
        const rotationAngle    = 0           ; // [degrees]

        const yTranslation = 0.1 * screenSize[1] + plotSpacingUnitY;


        // ============================================ STYLING =============================================
        // Colors
        let colorRange = DataHandlers.ColorScaleComputer(this.props.color, legend.length, 'L2D');

        const color = d3.scaleOrdinal()
                            .range (colorRange)
                            .domain(legend);

        //Transparancy
        const nonHighlightOpacity = 0.3;
        const highlightOpacity    = 0.7;


        // ======================================== DATAHANDLING ========================================        
        //const startLabels = chartTitle;
        inputData.sort((a, b) => DataHandlers.SortingComparer(a, b, 'category', 'A-Z'))


        let allCategories = [];
        let dataArray = [];
        let textData  = {} ;

        inputData.forEach((element) => {
            if (!allCategories.includes(element.category)){
                allCategories.push(element.category);

                textData[element.category] = {};

                let categoryInfo = [];

                for (let j in legend){
                    categoryInfo.push({datapoint:legend[j], count:0, chartName : element.category});
                    textData[element.category][legend[j]] = {absolute   : 0, 
                                                             percentage : 0};
                };
                dataArray.push({category     : element.category, 
                                categoryInfo : categoryInfo    });
            };

        });


        let averages  = {totals:[0, 0]};
        let bests     = {totals:{count:0, option:''}};
        let totalText = {};
        legend.forEach((element) => {averages[element] = [0, 0]; bests[element] = {count:0, option:''}});

        let data = [];
        for (let i in dataArray){
            let category = dataArray[i]['category'];

            // going over all three categories
            for (let j in inputData){
                if (inputData[j]['category'] === category){

                    // passed vs not passed 
                    for (let k in dataArray[i]['categoryInfo']){
                        const datapoint = dataArray[i]['categoryInfo'][k]['datapoint'];

                        if (datapoint === inputData[j]['stack']){
                            dataArray[i]['categoryInfo'][k]['count']  = inputData[j]['count'];  
                        };
                    };
                };
            };

            let [intermediateData, ] = DataHandlers.DonutDataHandler(dataArray[i]['categoryInfo'], globalStartAngle, globalEndAngle, {}, 'count');
            data.push({category : category, categoryInfo : intermediateData});


            // Average Total
            averages['totals'][0] += intermediateData[0]['total'];
            averages['totals'][1] += 1 ;

            // Best Total
            if (intermediateData[0]['total'] > bests['totals']['count']){
                bests['totals']['count' ] = intermediateData[0]['total'];
                bests['totals']['option'] = category[0].toUpperCase() + category.slice(1);
            };

            for (let j in intermediateData){
                const datapoint = intermediateData[j]['datapoint'];
                
                // Center text
                textData[category][datapoint]['absolute'  ] = intermediateData[j]['count'     ] ;
                textData[category][datapoint]['percentage'] = intermediateData[j]['percentage'] ;

                textData[category]['total'] = intermediateData[j]['total'];

                // Averages
                averages[datapoint][0] += intermediateData[j]['count'];
                averages[datapoint][1] += 1;

                // Bests
                if (intermediateData[j]['count'] > bests[datapoint]['count']){
                    bests[datapoint]['count' ] = intermediateData[j]['count'];
                    bests[datapoint]['option'] = category[0].toUpperCase() + category.slice(1);
                };
            };


        };


        (Object.keys(averages)).forEach((key) => {
            totalText[key] = averages[key][0];

            if (averages[key][1] !== 0){
                averages[key]  = averages[key][0]/averages[key][1];
            }else{
                averages[key] = null;
            };
       
        });



        function MergeOldDataInNewData(oldData, newData, globalEndAngle){

            //Compare new data to old data    
            let filteredObject = {} ;
            let datapoint      = '' ;
            let index          = 0  ;


            for (index in newData){

                if (oldData.length > 0){
                    
                    newData[index]['startAngleOld'] = globalEndAngle ;
                    newData[index]['endAngleOld'  ] = globalEndAngle ;

                    datapoint = newData[index]['datapoint'];

                    // eslint-disable-next-line
                    filteredObject = oldData.filter((element) => element['datapoint'] === datapoint );

                    if (filteredObject.length > 0){
                        newData[index]['startAngleOld'] = filteredObject[0].startAngle ;
                        newData[index]['endAngleOld'  ] = filteredObject[0].endAngle   ;
                    };

                }else{
                    newData[index]['startAngleOld'] = 0 ;
                    newData[index]['endAngleOld'  ] = 0 ;
                };
            };

        };


        //Arc PathsMembers
        function arcPath(start, end, innerRadius, outerRadiusMultiplier) {
            let outerRadius = Math.round(innerRadius * outerRadiusMultiplier);

            let arc = d3.arc().innerRadius(innerRadius)
                .outerRadius(outerRadius)
                .startAngle(start)
                .endAngle(end);

            return arc()
        };

        
        function ArcTransitionIn(d, i, innerRadius, outerRadiusMultiplier){
            let interpolatorStart = d3.interpolate(d.startAngleOld, d.startAngle);
            let interpolatorEnd   = d3.interpolate(d.endAngleOld  , d.endAngle  );    

            return (function(t){
                return arcPath(interpolatorStart(t),interpolatorEnd(t), innerRadius, outerRadiusMultiplier);
            });
        };

        function ArcTransitionOut(d, i, innerRadius, outerRadiusMultiplier){
            let interpolatorStart = d3.interpolate(d.startAngle, globalEndAngle);
            let interpolatorEnd   = d3.interpolate(d.endAngle  , globalEndAngle);    

            return (function(t){
                return arcPath(interpolatorStart(t),interpolatorEnd(t), innerRadius, outerRadiusMultiplier);
            });
        };




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
        //Title
        thisNode.selectAll('.plotTitle')
            .data([chartTitle])
            .enter().append('text')
                .attr('class', 'plotTitle')
                .text((d) => d);

        thisNode.selectAll('.plotTitle')
            .attr('x', Math.floor(screenSize[0] * 0.05))
            .attr('y', Math.round(screenSize[1] * 0.10));



        // ========================================= ADDITIONAL INFO =========================================
        const PosAverage = [0.85, 0.12];
        const PosBest    = [0.57, 0.12];
        const PosTot     = [0.35, 0.12];
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
                    .style('fill', '#A5A5A5')
                    .style('font-size', '1.7vmin');

            thisNode.selectAll('#AverageTextSide')
                .attr('x', Math.round(PosAverage[0] * screenSize[0]))
                .attr('y', Math.round(PosAverage[1] * screenSize[1]) + 0.05 * minScreenSize)
                
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
                        let textToReturn = 'Best'  ;
                        if (d.totals.count !== 0){
                            textToReturn = 'Best (' + d.totals.option + ')';
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



        // ============================================ GROUP STRUCTURE ============================================
        //Creating an Arc group
        thisNode.selectAll('.ChartCollections')
            .data([''])
            .enter().append('g')
                .attr('class', 'ChartCollections');

        thisNode.selectAll('.PlotGrids')
            .data([''])
            .enter().append('g')
                .attr('class', 'PlotGrids');


        const Charts    = thisNode.selectAll('.ChartCollections');
        //const PlotGrids = thisNode.selectAll('.PlotGrids'       );

        Charts.selectAll('.ChartCollection')
            .data(data, (d) => d.category)
            .enter().append('g')
                .attr('id', (d) => 'ChartCollection_' + d.category)
                .attr('class', 'ChartCollection');

        Charts.selectAll('.ChartCollection')
            .data(data, (d) => d.category)
            .exit().remove();




        // ============================================ GRID ============================================

        // ============================================= ARCS ============================================== 


        data.forEach((element, k) => {

            // Completing Grouping Structure
            const ChartCollection = Charts.selectAll('#ChartCollection_' + element.category);

            ChartCollection.selectAll('#Paths')
                .data([''])
                .enter().append('g')
                    .attr('id', 'Paths');

            ChartCollection.selectAll('#Texts')
                .data([''])
                .enter().append('g')
                    .attr('id', 'Texts');

            const Paths = ChartCollection.selectAll('#Paths');
            const Texts = ChartCollection.selectAll('#Texts');


            // Translation Coordinates
            const xTranslation = ((2 * k) + 1 ) * plotSpacingUnitX;
            const translationCommandPath = 'translate(' + xTranslation + ',' + yTranslation + ') rotate(' + rotationAngle + ')';


            // Collecting old arc data
            let oldDataCategory = [];
            Paths.selectAll('.arc')
                .each(function(d, i){
                    oldDataCategory.push(d);
                });

            MergeOldDataInNewData(oldDataCategory, element.categoryInfo, globalEndAngle) ;

            // Adding the Arcs to the screen
            Paths.selectAll('.arc')
                .data(element.categoryInfo, (d) => d.datapoint)
                .enter().append('path')
                    .attr('class', 'arc')
                    .attr('id', (d) => 'arc'+ (d.datapoint).replace(' ', '_'))
                    .attr('d', (d, i) => arcPath(0, 0, innerRadius, nonHighlightMultiplier))
                    .attr('transform', translationCommandPath)
                    .style('fill', (d) => color(d.datapoint))
                    .style('fill-opacity', nonHighlightOpacity)
                    .style('stroke', this.props.color)
                    .style('stroke-width', 1)
                    .style('stroke-opacity', highlightOpacity);


            // Removing the surplus Arcs
            Paths.selectAll('.arc')
                .data(element.categoryInfo, (d) => d.datapoint)
                .exit().attr('class', 'exittingArc')
                    .transition()
                    .duration(400)
                    .attrTween('d', (d, i) => ArcTransitionOut(d, i, innerRadius, nonHighlightMultiplier))
                    .remove();

            // Update the arcs
            Paths.selectAll('.arc')
                .data(element.categoryInfo, (d) => d.datapoint)
                .attr('fill', (d) => color(d.datapoint))
                .transition()
                .duration(400)
                .ease(d3.easeLinear)
                .attrTween('d', (d, i) => ArcTransitionIn(d, i, innerRadius, nonHighlightMultiplier))
                .attr('transform', translationCommandPath);

            Paths.selectAll('.arc')
                .data(element.categoryInfo, (d) => d.datapoint)
                .on('mouseover', mouseoverHandler )
                .on('mouseout' , mouseoutHandler  )
                .on('click'    , mouseClickHandler);


            
            // Adding category title
            Texts.selectAll('#categoryText')
                .data([element.category])
                .enter().append('text')
                    .attr('id', 'categoryText'     )
                    .attr('text-anchor', 'middle'  )
                    .style('font-size' , '2.2vmin' )
                    .style('opacity'   ,  1        )
                    .text((d) => d[0].toUpperCase() + d.slice(1));

            Texts.selectAll('#categoryText')
                .data([element.category])
                .attr('x', xTranslation)
                .attr('y', yTranslation - 0.4 * innerRadius);
            

            // Adding absolute text
            Texts.selectAll('#TextAbsolute_' + element.category)
                .data([textData[element.category]])
                .enter().append('text')
                    .attr('id', 'TextAbsolute_' + element.category)
                    .attr('class', 'TextAbsolute')
                    .attr('text-anchor', 'middle')
                    .style('font-size' , '1.8vmin' )
                    .style('opacity'   ,  0.7    );
                    
            Texts.selectAll('#TextAbsolute_' + element.category)
                .data([textData[element.category]])
                .attr('x', xTranslation)
                .attr('y', yTranslation - 0.1 * innerRadius)
                .text((d) => d.total + ' ' + unit);


            // Adding percentage text
            Texts.selectAll('#TextPercentage_' + element.category)
                .data([textData[element.category]])
                .enter().append('text')
                    .attr('id', 'TextPercentage_' + element.category)
                    .attr('class', 'TextPercentage')
                    .attr('text-anchor', 'middle')
                    .style('font-size' , '5vmin' )
                    .style('opacity'   ,  0.4    )
                    .text('');

            Texts.selectAll('#TextPercentage_' + element.category)
                .data([textData[element.category]])
                .attr('x', xTranslation)
                .attr('y', yTranslation + 0.6 * innerRadius);

        });


        //Plot interactivity

        // --> mouse hover over path
        function mouseoverHandler (d, i){

            //Highlighting the arc if not leaving frame (during animation)
            if (d3.select(this).attr('class') !== 'exittingArc'){

                d3.select(this).transition()
                    .duration(150)
                    .ease(d3.easeLinear)
                    .attr('d', (d) => arcPath(d.startAngle, d.endAngle, innerRadius, highlightMultiplier))
                    .style('fill-opacity', highlightOpacity)

                const optionSelection = d.datapoint;


                // Changing Absolute Numbers
                thisNode.selectAll('#TextAbsolute_' +  d.chartName)
                    .text((d) => d[optionSelection].absolute + ' ' + optionSelection);

                // Changing Percentage Numbers
                thisNode.selectAll('#TextPercentage_' + d.chartName)
                    .text((d) => d[optionSelection].percentage + '%');


            };
        };

        // --> mouse no longer hovering over path
        function mouseoutHandler (d, i){

            //Unhighlighting the arc if not leaving frame (during animation)
            if (d3.select(this).attr('class') !== 'exittingArc'){

                let optionSelection;
                if (d.datapoint){
                    optionSelection = d.datapoint;
                }else{
                    optionSelection = d;
                };


                thisNode.selectAll('#arc'+(optionSelection).replace(' ', '_')).transition()
                    .duration(300)
                    .ease(d3.easeLinear)
                    .attr('d', (d) => arcPath(d.startAngle, d.endAngle, innerRadius, nonHighlightMultiplier))
                    .style('fill-opacity', nonHighlightOpacity);


                thisNode.selectAll('.TextAbsolute')
                    .text((d) => d.total + ' ' + unit);

                thisNode.selectAll('.TextPercentage')
                    .text('');


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
                                            textToReturn = 'Best (' + bests['totals']['option']  + ')';
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


        // --> mouse no longer hovering over path
        function mouseClickHandler (d, i){

            //Unhighlighting the arc if not leaving frame (during animation)
            if (d3.select(this).attr('class') !== 'exittingArc'){

                let optionSelection
                if (d.datapoint){
                    optionSelection = d.datapoint;
                }else{
                    optionSelection = d;
                };

                thisNode.selectAll('#arc'+(optionSelection).replace(' ', '_')).transition()
                    .duration(150)
                    .ease(d3.easeLinear)
                    .attr('d', (d) => arcPath(d.startAngle, d.endAngle, innerRadius, highlightMultiplier))
                    .style('fill-opacity', highlightOpacity)


                
                thisNode.selectAll('.TextAbsolute')
                    .text((d) => d[optionSelection].absolute + ' ' + optionSelection);

                thisNode.selectAll('.TextPercentage')
                    .text((d) => d[optionSelection].percentage + '%');




                //Changing Average Data
                if (showKPIs.includes('average')){
                    thisNode.selectAll('#AverageNumberSide')
                        .text(DataHandlers.textDisplay(averages[optionSelection], '--'));
                };

                //Changing Best Data
                if (showKPIs.includes('best')){
                    thisNode.selectAll('#BestNumberSide')
                        .text(DataHandlers.textDisplay(bests[optionSelection]['count'], '0'));

                    thisNode.selectAll('#BestTextSide')
                        .text((d) => {let textToReturn = 'Best' ;
                                      if (bests[optionSelection]['count'] !== 0){
                                            textToReturn += ' (' + bests[optionSelection]['option']  + ')';
                                        };
                                        return textToReturn;
                                    });
                };
                
                // Changing Total Data
                if (showKPIs.includes('total')){
                    thisNode.selectAll('#TotalNumberSide')
                        .text(DataHandlers.textDisplay(totalText[optionSelection], '0'));
                };

            };
        };


        // ============================================= LEGEND ============================================== 
        // Creating Legend
        let LegendRectWidth  = Math.floor( 0.08 * screenSize[1] );
        let LegendRectHeight = Math.floor(13/24 * LegendRectWidth);

        //Blocks
        thisNode.selectAll('.LegendBlock')
            .data(legend, (d)=> d)
            .enter().append('circle')
                .attr('class', 'LegendBlock')
                .attr('id', (d, i) => 'LegendBlock'+ d[i].replace(' ', '-'))
                .style('fill'  , (d, i) => color(d[i]))
                .style('stroke', this.props.color)
                .style('stroke-width', 1)
                .style('stroke-opacity', highlightOpacity)
                .style('fill-opacity', nonHighlightOpacity);

        thisNode.selectAll('.LegendBlock')
            .data(legend, d => d)
            .exit().remove();

        thisNode.selectAll('.LegendBlock')
            .data(legend, d => d)
            .attr('cx', (d, i) => (i * 1 / (legend.length) * screenSize[0]) + LegendRectWidth * 1.5)
            .attr('cy', 0.935 * screenSize[1])
            .attr('r' , '0.75vmin')
            .on('mouseover', mouseClickHandler)
            .on('mouseout' , mouseoutHandler);


        //Names
        thisNode.selectAll('#LegendName')
            .data(legend, (d, i)=> d)
            .enter().append('text')
                .attr('id', 'LegendName')
                .attr('x', (d, i) => Math.floor((i) * 1/(legend.length) * screenSize[0]) + 2.2 * LegendRectWidth)
                .attr('y', Math.floor(0.9 * screenSize[1] + 0.85 * LegendRectHeight))
                .attr('text-anchor', 'start')
                .style('font-size', '1.5vmin')
                .text((d) => d[0].toUpperCase() + d.slice(1));

        thisNode.selectAll('#LegendName')
            .data(legend, (d) => d)
            .exit().remove();

        thisNode.selectAll('#LegendName')
            .data(legend, (d) => d)
            .attr('x', (d, i) => ((i) * 1 / (legend.length) * screenSize[0]) + 2.2 * LegendRectWidth)
            .attr('y', Math.floor(0.92 * screenSize[1] + 0.85 * LegendRectHeight))
            



    };

    

    // ************************ RENDERING ************************ 
    render() {
        return (
            <svg ref = { node => this.node = node } 
                 id  = {'nDonutChart_' + DataHandlers.TextNeutralizer(this.props.title)}
                 className = {'BackgroundSVG'}
                 >
            </svg>
        )
    };

};

export default nDonutChart