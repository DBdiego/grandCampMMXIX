import React, {Component } from 'react'              ;
import * as d3             from 'd3'                 ;
import DataHandlers        from './DataHandlers.jsx' ;



/* DOCUMENTAION:
1) required inputs: 
    -> data   : the data to be plotted in the format described in 2)
    -> size   : the size of the svg block
    -> title  : the plot title
    -> colors : the color scale to be used (Ordinal scale!!!)
    -> legend : all te possible legend elements
    -> unit   : should contain the singular and plural of the unit (e.g.: {singular:'sub', plural:'subs'})

2) input-data format:
    [{datapoint: #CATEGORY#, count: #NUMBER#},
     {datapoint: #CATEGORY#, count: #NUMBER#},
     {datapoint: #CATEGORY#, count: #NUMBER#}]
*/

class DonutChart extends Component {
    constructor(props) {
        super(props);
        this.createDonutChart = this.createDonutChart.bind(this);
    };

    componentDidMount() {
        this.createDonutChart();
    };

    componentDidUpdate() {
        this.createDonutChart();
    };
    

    createDonutChart() {
        //console.log('DONUT CHART');

        
        //===================================  GENERAL  =================================== 

        let inputData    = this.props.data  ;
        let screenSize   = this.props.size  ;
        const chartTitle = this.props.title ; 
        const unit       = this.props.unit  ;
        const showLegend = this.props.showLegend;
        let legend       = this.props.legend;
        

        //Adapting size if smaller than allowed mimum:
        screenSize = [parseFloat(d3.select('#DonutChart_' + DataHandlers.TextNeutralizer(this.props.title)).style('width' ).replace('px', '')),
                      parseFloat(d3.select('#DonutChart_' + DataHandlers.TextNeutralizer(this.props.title)).style('height').replace('px', ''))
                     ];

        const node = this.node;
        const thisNode = d3.select(node)


        // ===================================== GEOMETRICAL CONSTANTS ========================================
        //Inner radius 
        const innerRadius = Math.round(Math.min.apply(null, screenSize) / 3.6);

        const nonHighlightMultiplier = 1.20 ;
        const highlightMultiplier    = 1.25 ;


        //translation inside canvas
        const translateCoordinates = [Math.round(screenSize[0] / 2), Math.round(screenSize[1] / 2)];
        const translationCommand   = 'translate(' + translateCoordinates[0].toString() + ',' + translateCoordinates[1].toString() + ')';



        // ============================================ DATA HANDLING =============================================
        let [data, mostlyCategory] = DataHandlers.DonutDataHandler(inputData, 0, Math.PI * 2, {}, 'count');


        // ============================================ STYLING =============================================
        //Font Sizes
        const fontSizeTitle      = Math.round(0.23 * innerRadius);
        const fontSizeAbsolute   = Math.round(0.22 * innerRadius);
        const fontSizePercentage = Math.round(0.47 * innerRadius);

        // Colors
        if (legend == null){
            legend = [];
            data.forEach((element) => legend.push(element.datapoint));
        };

        let numColors = legend.length;
    
        let colorRange = DataHandlers.ColorScaleComputer(this.props.color, numColors, 'L2D');

        const color = d3.scaleOrdinal()
                            .range (colorRange)
                            .domain(legend);

        //Transparancy
        const nonHighlightOpacity = 0.3;
        const highlightOpacity    = 0.7;

        function TextLengthCheck(text, maxCharacters){
                text = text.toString();
                if (text.length > maxCharacters){
                    text = text.substr(0, maxCharacters-1) + '...';
                };
                return text;
        };


        // ============================================ CANVAS =============================================
        //Chart Background
        thisNode.selectAll('.componentBackground')
            .data([''])
            .enter().append('rect')
                .attr('class', 'componentBackground')

        thisNode.selectAll('.componentBackground')
                .attr('width' , screenSize[0] * 1.1)
                .attr('height', screenSize[1] * 1.1);


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

        if (this.props.showKPIs.includes('most')){
            let PosMajority = [0.95, 0.13];
            // add majority text
            thisNode.selectAll('#MostlyTextSide')
                .data([mostlyCategory])
                .enter().append('text')
                    .attr('id', 'MostlyTextSide')
                    .attr('text-anchor', 'end');

            thisNode.selectAll('#MostlyTextSide')
                .attr('x', Math.round(PosMajority[0] * screenSize[0]))
                .attr('y', Math.round(PosMajority[1] * screenSize[1]))
                .style('font-size', '2.8vmin')
                .text((d) => TextLengthCheck(d.category, 14));


            thisNode.selectAll('#MostlyTextSide2')
                .data([''])
                .enter().append('text')
                    .attr('id', 'MostlyTextSide2')
                    .attr('text-anchor', 'end')
                    .style('fill', '#A5A5A5');
                    

            thisNode.selectAll('#MostlyTextSide2')
                .attr('x', Math.round(PosMajority[0] * screenSize[0]))
                .attr('y', Math.round(PosMajority[1] * screenSize[1]) + 15)
                .style('font-size', '1.7vmin')
                .text((d) => ' Majority');
        };


        


        // ============================================ GRID ============================================
        thisNode.selectAll('#PlotGrid')
            .data([''])
            .enter().append('g')
                .attr('id', 'PlotGrid')

        let GridPlot = thisNode.selectAll('#PlotGrid');

        //Adding background arc
        GridPlot.selectAll('.plotBackground')
            .data([''])
            .enter().append('path')
                .attr('class', 'plotBackground')
                .attr('d', arcPath(0, 2 * Math.PI, innerRadius, nonHighlightMultiplier))
                .attr('transform', translationCommand);

        GridPlot.selectAll('.plotBackground')
            .transition()
            .duration(350)
            .ease(d3.easeLinear)
            .attr('d', arcPath(0, 2 * Math.PI, innerRadius, nonHighlightMultiplier))
            .attr('transform', translationCommand);
        
        // ============================================= ARCS ============================================== 
        //Creating an Arc group
        thisNode.selectAll('#PathCollection')
            .data([''])
            .enter().append('g')
                .attr('id', 'PathCollection');

        let Paths = thisNode.selectAll('#PathCollection');


        //----------------------------- EFFECTS -----------------------------
        //collecting old arc data
        let oldData = [];
        Paths.selectAll('#arc')
            .each(function(d, i){
                oldData.push(d);
            });

        //Compare new data to old data    
        let filteredObject = {};
        let datapoint = '';
        let index = 0;

        function datapointComparison(element){
            return element['datapoint'] === datapoint 
        };

        for (index in data){

            if (oldData.length > 0){
                
                data[index]['startAngleOld'] = 2 * Math.PI;
                data[index]['endAngleOld'  ] = 2 * Math.PI;

                datapoint = data[index]['datapoint'];

                filteredObject = oldData.filter((element) => datapointComparison(element));

                if (filteredObject.length > 0){
                    data[index]['startAngleOld'] = filteredObject[0].startAngle ;
                    data[index]['endAngleOld'  ] = filteredObject[0].endAngle   ;
                };

            }else{
                data[index]['startAngleOld'] = 0;
                data[index]['endAngleOld'  ] = 0;
            };
        };



        //Adding the Arcs to the screen
        Paths.selectAll('#arc')
            .data(data, (d) => d['datapoint'])
            .enter().append('path')
                .attr('id', 'arc')
                .attr('d', (d, i) => arcPath(0, 0, innerRadius, nonHighlightMultiplier))
                .attr('transform', translationCommand)
                .style('fill', (d) => color(d['datapoint']))
                .style('fill-opacity', nonHighlightOpacity)
                .style('stroke', this.props.color)//(d) => color(d['datapoint']))
                .style('stroke-width', 0.7)
                .style('stroke-opacity', highlightOpacity)


        //Removing the surplus Arcs
        Paths.selectAll('#arc')
            .data(data, (d) => d['datapoint'])
            .exit().attr('id', "exittingArc")
                .transition()
                .duration(400)
                .attrTween('d', (d, i) => ArcTransitionOut(d, i, innerRadius, nonHighlightMultiplier))
                .remove();

        //Update the arcs
        Paths.selectAll('#arc')
            .data(data, (d) => d['datapoint'])
            .attr('fill', (d) => color(d['datapoint']))
            .transition()
            .duration(400)
            .ease(d3.easeLinear)
            .attrTween('d', (d, i) => ArcTransitionIn(d, i, innerRadius, nonHighlightMultiplier))
            .attr('transform', translationCommand);

        Paths.selectAll('#arc')
            .data(data, (d) => d['datapoint'])
            .on('mouseover', mouseoverHandler)
            .on('mouseout' , mouseoutHandler )
            .on('click'    , mouseoverHandler);



        //Arc Paths
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
            let interpolatorStart = d3.interpolate(d.startAngle, Math.PI*2);
            let interpolatorEnd   = d3.interpolate(d.endAngle  , Math.PI*2);    

            return (function(t){
                return arcPath(interpolatorStart(t),interpolatorEnd(t), innerRadius, outerRadiusMultiplier);
            });
        };
    

        //Plot interactivity
        // --> mouse hover over a part
        function mouseoverHandler (d, i){

            //Highlighting the arc if not leaving frame (during animation)
            if (d3.select(this).attr('id') !== 'exittingArc'){

                d3.select(this).transition()
                    .duration(150)
                    .ease(d3.easeLinear)
                    .attr('d', arcPath(d.startAngle, d.endAngle, innerRadius, highlightMultiplier))
                    .style('fill-opacity', highlightOpacity)

                thisNode.select('#LegendBlock' + DataHandlers.TextNeutralizer(d['datapoint']))
                    .transition()
                    .duration(150)
                    .ease(d3.easeLinear)
                    .style('fill-opacity', highlightOpacity);


                //Center Title
                thisNode.select('#TitleTextCenter')
                    .text(TextLengthCheck(d['datapoint'], 14));


                //Center Absolute value
                let AbsoluteValueMessage = '';
                if (d.count === 1){
                    AbsoluteValueMessage = d.count +' '+ unit.singular;
                }else{
                    AbsoluteValueMessage = DataHandlers.textDisplay(d.count, '--') +' '+ unit.plural;
                };
        
                thisNode.select('#AbsoluteValueTextCenter')
                    .text(AbsoluteValueMessage);


                //Center Percentage value
                thisNode.select('#PercentageTextCenter')
                    .text(d.percentage + '%');

            };
        };

        // --> mouse no longer hovering over a part
        function mouseoutHandler (d, i){

            //Unhighlighting the arc if not leaving frame (during animation)
            if (d3.select(this).attr('id') !== 'exittingArc'){

                d3.select(this).transition()
                    .duration(300)
                    .ease(d3.easeLinear)
                    .attr('d', arcPath(d.startAngle, d.endAngle, innerRadius, nonHighlightMultiplier))
                    .style('fill-opacity', nonHighlightOpacity);


                thisNode.select('#LegendBlock' + DataHandlers.TextNeutralizer(d['datapoint']))
                    .transition()
                    .duration(300)
                    .ease(d3.easeLinear)
                    .style('fill-opacity', nonHighlightOpacity);


                //Center Title
                thisNode.select('#TitleTextCenter')
                    .text('Total');


                //Center Absolute value
                let AbsoluteValueMessage = '';
                if (d.total === 1){
                    AbsoluteValueMessage = d.total + ' ' + unit.singular;
                }else{
                    AbsoluteValueMessage = DataHandlers.textDisplay(d.total, '--') +' '+ unit.plural;
                };
                
                thisNode.select('#AbsoluteValueTextCenter')
                    .text(AbsoluteValueMessage);


                //Center Percentage value
                thisNode.select('#PercentageTextCenter')
                    .text('');

            };
        };




        // ============================================= LEGEND ============================================== 
        if (showLegend === true){
            // Creating Legend
            let LegendRectWidth  = Math.floor( 0.08 * screenSize[1]  );
            let LegendRectHeight = Math.floor(13/24 * LegendRectWidth);

            //Blocks
            thisNode.selectAll('.LegendBlock')
                .data(data, (d)=> d['datapoint'])
                .enter().append('circle')
                    .attr('class', 'LegendBlock')
                    .attr('id', (d) => 'LegendBlock'+ DataHandlers.TextNeutralizer(d['datapoint']))
                    .style('fill'  , (d) => color(d['datapoint']))
                    .style('stroke', (d) => color(d['datapoint']))
                    .style('stroke-width', 0.7)
                    .style('stroke-opacity', highlightOpacity)
                    .style('fill-opacity', nonHighlightOpacity);

            thisNode.selectAll('.LegendBlock')
                .data(data, (d)=> d['datapoint'])
                .exit().remove()

            thisNode.selectAll('.LegendBlock')
                .data(data, (d)=> d['datapoint'])
                .attr('cx', (d, i) => Math.floor((i * 1/(data.length) * screenSize[0]) + LegendRectWidth*1.5))
                .attr('cy', Math.floor(0.916 * screenSize[1]))
                .attr('r' , '0.75vmin');



            //Names
            thisNode.selectAll('#LegendName')
                .data(data, (d)=> d['datapoint'])
                .enter().append('text')
                    .attr('id', 'LegendName')
                    .attr('x', (d, i) => Math.floor(((i) * 1/(data.length) * screenSize[0]) + 2.2 * LegendRectWidth))
                    .attr('y', Math.floor(0.9 * screenSize[1] + 0.85 * LegendRectHeight))
                    .attr('text-anchor', 'start')
                    .style('font-size', '1.5vmin')
                    .text((d) => d['datapoint']);

            thisNode.selectAll('#LegendName')
                .data(data, (d) => d['datapoint'])
                .exit().remove();

            thisNode.selectAll('#LegendName')
                .data(data, (d) => d['datapoint'])
                .attr('x', (d, i) => Math.floor(((i) * 1/(data.length) * screenSize[0]) + 2.2 * LegendRectWidth))
                .attr('y', Math.floor(0.9 * screenSize[1] + 0.85 * LegendRectHeight));
      
        };

        // ============================================= CENTER TEXT ============================================== 
        // Add title text in the center
        thisNode.selectAll('#TitleTextCenter')
            .data(['Total'])
            .enter().append('text')
                .attr('id', 'TitleTextCenter')
                .attr('text-anchor', 'middle')
                .style('font-weight', '350')
                .style('font-size', fontSizeTitle + 'px')
                .text((d)=> TextLengthCheck(d, 14));

        thisNode.selectAll('#TitleTextCenter')
            .transition()
            .duration(400)
            .ease(d3.easeLinear)
            .attr('x', translateCoordinates[0])
            .attr('y', Math.floor(translateCoordinates[1] - 0.3 * innerRadius))
            .style('font-size', fontSizeTitle + 'px');


        // Add Absolute value in the center
        thisNode.selectAll('#AbsoluteValueTextCenter')
            .data([data])
            .enter().append('text')
                .attr('id', 'AbsoluteValueTextCenter')
                .attr('text-anchor', 'middle')
                .style('font-weight', '100')
                .style('font-size', fontSizeAbsolute + 'px');


        thisNode.selectAll('#AbsoluteValueTextCenter')
            .transition()
            .duration(400)
            .ease(d3.easeLinear)
            .attr('x', Math.floor(translateCoordinates[0]))
            .attr('y', Math.floor(translateCoordinates[1]))
            .style('font-size', fontSizeAbsolute + 'px')
            .text((d) => {  let textToReturn = '--';
                            if (d[0]) {
                                textToReturn = DataHandlers.textDisplay(d[0].total, '--') + ' ' + unit.plural;
                            }
                            return textToReturn;
                        });


        // Add percentages in the center
        thisNode.selectAll('#PercentageTextCenter')
            .data([''])
            .enter().append('text')
                .attr('id', 'PercentageTextCenter')
                .attr('x', Math.round(translateCoordinates[0]))
                .attr('y', Math.round(translateCoordinates[1] + 0.5 * innerRadius))
                .attr('text-anchor', 'middle')
                .style('fill', '#A5A5A5')
                .text((d) => d);

        thisNode.selectAll('#PercentageTextCenter')
            .transition()
            .duration(400)
            .ease(d3.easeLinear)
            .attr('x', Math.round(translateCoordinates[0]))
            .attr('y', Math.round(translateCoordinates[1] + 0.5 * innerRadius))
            .style('font-size', fontSizePercentage + 'px');


    };


        

    //===================================  RENDERING  =================================== 
    render() {
        return (
            <svg ref = { node => this.node = node } 
                 id  = {'DonutChart_' + DataHandlers.TextNeutralizer(this.props.title)}
                 className = {'BackgroundSVG'}
                >
            </svg>
        )
    }
}
export default DonutChart