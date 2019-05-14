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

2) input-data format:
    [{datapoint: #CATEGORY#, count: #NUMBER#},
     {datapoint: #CATEGORY#, count: #NUMBER#},
     {datapoint: #CATEGORY#, count: #NUMBER#}]
*/


class KPIDashboard extends Component {
    constructor(props) {
        super(props);
        this.createKPIDash = this.createKPIDash.bind(this);
    };

    componentDidMount() {
        this.createKPIDash();
    };


    componentDidUpdate() {
        this.createKPIDash();
    };


    // ************************ CHART CONSTRUCTION ************************ 
    createKPIDash(){ 
        //console.log('KPI-Dashboard')

        let inputData   = this.props.data;
        let screenSize  = this.props.size;

        //Adapting screen size
        screenSize = [parseFloat(d3.select('#KPI_Dashboard').style('width' ).replace('px', '')),
                      parseFloat(d3.select('#KPI_Dashboard').style('height').replace('px', ''))
                     ];

        const node   = this.node;
        let thisNode = select(node);

        // ===================================== GEOMETRICAL CONSTANTS ========================================
        //Inner radius 
        const innerRadius = Math.round(Math.min.apply(null, [screenSize[0], screenSize[1]/2]) / 3);

        const nonHighlightMultiplier = 1.20 ;
        const highlightMultiplier    = 1.25 ;

        const startYStudent = 0.27;
        const startYHours   = 0.75;

        const globalStartAngle = Math.PI * 1/4; // [radians]
        const globalendAngle   = Math.PI * 6/4; // [radians]
        const rotationAngle    = 180          ; // [degrees]

        //translation inside canvas
        const translateCoordinatesMembers = [Math.round(screenSize[0] / 1.99), Math.round(screenSize[1] * (startYStudent - 0.02))];
        const translateCoordinatesHours   = [Math.round(screenSize[0] / 1.99), Math.round(screenSize[1] * (startYHours   - 0.02))];

        const translationCommandMembers  = "translate(" + translateCoordinatesMembers[0] + "," + translateCoordinatesMembers[1] + ') rotate(' + rotationAngle + ')';
        const translationCommandHours    = "translate(" + translateCoordinatesHours[0]   + "," + translateCoordinatesHours[1]   + ') rotate(' + rotationAngle + ')';

        console.log(translationCommandMembers)
        // ============================================ STYLING =============================================


        // Colors
        let colorRangeMembers = DataHandlers.ColorScaleComputer(this.props.color, (this.props.legend1).length, 'L2D');
        let colorRangeHours   = DataHandlers.ColorScaleComputer(this.props.color, (this.props.legend2).length, 'L2D');

        const colorStudents = d3.scaleOrdinal()
                                .range (colorRangeMembers)
                                .domain(this.props.legend1);

        const colorHours    = d3.scaleOrdinal()
                                .range (colorRangeHours)
                                .domain(this.props.legend2);


        function KPINameFontSizeComputer(text){
            let fontSize = Math.round((0.14 * screenSize[1]) - (text.length / 7) * 20) + 'px';
            return fontSize
        };

        //Transparancy
        const nonHighlightOpacity = 0.3;
        const highlightOpacity    = 0.7;



        // ======================================== DATAHANDLING ========================================        

        const dowDict = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

        let [dataMembers,] = DataHandlers.DonutDataHandler(inputData.totalStudents, globalStartAngle, globalendAngle);
        let [dataHours  ,] = DataHandlers.DonutDataHandler(inputData.totalHours   , globalStartAngle, globalendAngle);

        let dataTotalMembers = 0;
        let dataTotalHours   = 0;
        if (typeof(dataMembers[0]) !== 'undefined'){
            dataTotalMembers = dataMembers[0].total;
        };
        if (typeof(dataHours[0]) !== 'undefined'){
            dataTotalHours = dataHours[0].total;
        };


        function MergeOldDataInNewData(oldData, newData, globalendAngle){

            //Compare new data to old data    
            let filteredObject = {} ;
            let datapoint      = '' ;
            let index          = 0  ;


            for (index in newData){

                if (oldData.length > 0){
                    
                    newData[index]['startAngleOld'] = globalendAngle ;
                    newData[index]['endAngleOld'  ] = globalendAngle ;

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
            let interpolatorStart = d3.interpolate(d.startAngle, globalendAngle);
            let interpolatorEnd   = d3.interpolate(d.endAngle  , globalendAngle);    

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



        // ============================================= ARCS ============================================== 
        //Creating an Arc group
        thisNode.selectAll('#PathCollectionStudents')
            .data([''])
            .enter().append('g')
                .attr('id', 'PathCollectionStudents');

        thisNode.selectAll('#PathCollectionHours')
            .data([''])
            .enter().append('g')
                .attr('id', 'PathCollectionHours');

        const PathsMembers = thisNode.selectAll('#PathCollectionStudents');
        const PathsHours   = thisNode.selectAll('#PathCollectionHours'   );


        //----------------------------- EFFECTS -----------------------------
        //inputs: oldData, newData, globalEndAngle

        //collecting old arc data
        let olddataMembers = [];
        PathsMembers.selectAll('.arc')
            .each(function(d, i){
                olddataMembers.push(d);
            });

        //collecting old arc data
        let oldDataHours = [];
        PathsHours.selectAll('.arc')
            .each(function(d, i){
                oldDataHours.push(d);
            });


        MergeOldDataInNewData(olddataMembers, dataMembers, globalendAngle) ;
        MergeOldDataInNewData(oldDataHours   , dataHours   , globalendAngle) ;




        // - MEMBERS - Adding the Arcs to the screen
        PathsMembers.selectAll('.arc')
            .data(dataMembers, (d) => d.datapoint)
            .enter().append('path')
                .attr('class', 'arc')
                .attr('d', (d, i) => arcPath(0, 0, innerRadius, nonHighlightMultiplier))
                .attr('transform', translationCommandMembers)
                .style('fill', (d) => colorStudents(d.datapoint))
                .style('fill-opacity', nonHighlightOpacity)
                .style('stroke', (d) => this.props.color)
                .style('stroke-width', 0.7)
                .style('stroke-opacity', highlightOpacity)


        // - MEMBERS - Removing the surplus Arcs
        PathsMembers.selectAll('.arc')
            .data(dataMembers, (d) => d.datapoint)
            .exit().attr('class', "exittingArc")
                .transition()
                .duration(400)
                .attrTween('d', (d, i) => ArcTransitionOut(d, i, innerRadius, nonHighlightMultiplier))
                .remove();

        // - MEMBERS - Update the arcs
        PathsMembers.selectAll('.arc')
            .data(dataMembers, (d) => d.datapoint)
            .attr('fill', (d) => colorStudents(d.datapoint))
            .transition()
            .duration(400)
            .ease(d3.easeLinear)
            .attrTween('d', (d, i) => ArcTransitionIn(d, i, innerRadius, nonHighlightMultiplier))
            .attr('transform', translationCommandMembers)

        PathsMembers.selectAll('.arc')
            .data(dataMembers, (d) => d.datapoint)
            .on('mouseover', mouseoverHandlerMembers)
            .on('mouseout' , mouseoutHandlerMembers )
            .on('click'    , mouseoverHandlerMembers);



        // - HOURS - Adding the Arcs to the screen
        PathsHours.selectAll('.arc')
            .data(dataHours, (d) => d.datapoint)
            .enter().append('path')
                .attr('class', 'arc')
                .attr('d', (d, i) => arcPath(0, 0, innerRadius, nonHighlightMultiplier))
                .attr('transform', translationCommandHours)
                .style('fill-opacity', nonHighlightOpacity)
                .style('fill',   (d) => colorHours(d.datapoint))
                .style('stroke', (d) => this.props.color)
                .style('stroke-width', 0.7)
                .style('stroke-opacity', highlightOpacity)


        // - HOURS - Removing the surplus Arcs
        PathsHours.selectAll('.arc')
            .data(dataHours, (d) => d.datapoint)
            .exit().attr('class', "exittingArc")
                .transition()
                .duration(400)
                .attrTween('d', (d, i) => ArcTransitionOut(d, i, innerRadius, nonHighlightMultiplier))
                .remove();

        // - HOURS - Update the arcs
        PathsHours.selectAll('.arc')
            .data(dataHours, (d) => d.datapoint)
            .attr('fill', (d) => colorHours(d.datapoint))
            .transition()
            .duration(400)
            .ease(d3.easeLinear)
            .attrTween('d', (d, i) => ArcTransitionIn(d, i, innerRadius, nonHighlightMultiplier))
            .attr('transform', translationCommandHours)

        PathsHours.selectAll('.arc')
            .data(dataHours, (d) => d.datapoint)
            .on('mouseover', mouseoverHandlerHours)
            .on('mouseout' , mouseoutHandlerHours )
            .on('click'    , mouseoverHandlerHours);



    


        //Plot interactivity

        // --> mouse hover over members
        function mouseoverHandlerMembers (d, i){

            //Highlighting the arc if not leaving frame (during animation)
            if (d3.select(this).attr('class') !== 'exittingArc'){

                d3.select(this).transition()
                    .duration(150)
                    .ease(d3.easeLinear)
                   .attr('d', arcPath(d.startAngle, d.endAngle, innerRadius, highlightMultiplier))
                    .style('fill-opacity', highlightOpacity)


                // Changing totalStudentName
                thisNode.select('#totalMembersName')
                    .text(d.datapoint[0].toUpperCase() + d.datapoint.slice(1));


                // Changing totals StudentsNumber
                thisNode.select('#totalMembersNumber')
                    .text(() => {let text = DataHandlers.textDisplay(d.count, '--');
                                    thisNode.select('#totalMembersNumber')
                                        .style('font-size' , KPINameFontSizeComputer(text))
                                  return text});

            };
        };

        // --> mouse no longer hovering over a members
        function mouseoutHandlerMembers (d, i){

            //Unhighlighting the arc if not leaving frame (during animation)
            if (d3.select(this).attr('class') !== 'exittingArc'){

                d3.select(this).transition()
                    .duration(300)
                    .ease(d3.easeLinear)
                    .attr('d', arcPath(d.startAngle, d.endAngle, innerRadius, nonHighlightMultiplier))
                    .style('fill-opacity', nonHighlightOpacity)


                // Changing totalStudentName
                thisNode.select('#totalMembersName')
                    .text('Members');


                thisNode.select('#totalMembersNumber')
                    .text(() => {let text = DataHandlers.textDisplay(d.total, '--');
                                    thisNode.select('#totalMembersNumber')
                                        .style('font-size' , KPINameFontSizeComputer(text))
                                  return text});

            };
        };



        // --> mouse hover over hours
        function mouseoverHandlerHours (d, i){

            //Highlighting the arc if not leaving frame (during animation)
            if (d3.select(this).attr('class') !== 'exittingArc'){

                d3.select(this).transition()
                    .duration(150)
                    .ease(d3.easeLinear)
                   .attr('d', arcPath(d.startAngle, d.endAngle, innerRadius, highlightMultiplier))
                    .style('fill-opacity', highlightOpacity)


                // Changing totalStudentName
                thisNode.select('#totalHoursName')
                    .text(() => {const textToReturn  = dowDict[d.datapoint] ;
                                 return textToReturn[0].toUpperCase() + textToReturn.slice(1);
                                 });


                // Changing totals StudentsNumber
                thisNode.select('#totalHoursNumber')
                    .text(() => {let text = DataHandlers.textDisplay(d.count, '--');
                                    thisNode.select('#totalHoursNumber')
                                        .style('font-size' , KPINameFontSizeComputer(text))
                                 return text} );

            };
        };

        // --> mouse no longer hovering over hours
        function mouseoutHandlerHours (d, i){

            //Unhighlighting the arc if not leaving frame (during animation)
            if (d3.select(this).attr('class') !== 'exittingArc'){

                d3.select(this).transition()
                    .duration(300)
                    .ease(d3.easeLinear)
                    .attr('d', arcPath(d.startAngle, d.endAngle, innerRadius, nonHighlightMultiplier))
                    .style('fill-opacity', nonHighlightOpacity)


                // Changing totalStudentName
                thisNode.select('#totalHoursName')
                    .text('Hours');


                thisNode.select('#totalHoursNumber')
                    .text(() => {let text = DataHandlers.textDisplay(d.total, '--');
                                    thisNode.select('#totalHoursNumber')
                                        .style('font-size' , KPINameFontSizeComputer(text))
                                  return text});

            };
        };




        // =========================================== TEXT ===========================================


        thisNode.selectAll('.textGroup')
            .data([''])
            .enter().append('g')
                .attr('class', 'textGroup');


        const textGroup = thisNode.selectAll('.textGroup');


        textGroup.selectAll('#totalMembersName')
            .data([dataTotalMembers])
            .enter().append('text')
                .attr('id', 'totalMembersName')
                .attr('text-anchor', 'start')
                .style('font-size' , '16px' )
                .style('opacity'   , 0      )
                .text('Members');

        textGroup.selectAll('#totalMembersName')
            .data([dataTotalMembers])
            .transition()
            .duration(300)
            .ease(d3.easeLinear)
            .attr('x', 0.50 * screenSize[0])
            .style('opacity', 1)
            .attr('y', (startYStudent + 0.08) * screenSize[1]);



        textGroup.selectAll('#totalMembersNumber')
            .data([dataTotalMembers])
            .enter().append('text')
                .attr('id', 'totalMembersNumber')
                .attr('text-anchor', 'middle' )
                .style('fill'      , '#C0C0C0')
                .style('opacity'   , 0        )
                .text('--');

        textGroup.selectAll('#totalMembersNumber')
            .data([dataTotalMembers])
            .transition()
            .duration(300)
            .ease(d3.easeLinear)
            .attr('x', 0.50 * screenSize[0])
            .attr('y', startYStudent * screenSize[1])
            .style('opacity', 1)
            .text((d) => {let text = DataHandlers.textDisplay(d, '--');
                            thisNode.select('#totalMembersNumber')
                                .style('font-size' , KPINameFontSizeComputer(text))
                          return text} );



        
        textGroup.selectAll('#totalHoursName')
            .data([dataTotalHours])
            .enter().append('text')
                .attr('id', 'totalHoursName')
                .attr('text-anchor', 'start')
                .style('font-size' , '16px' )
                .style('opacity'   , 0      )
                .text('Hours');

        textGroup.selectAll('#totalHoursName')
            .data([dataTotalHours])
            .transition()
            .duration(300)
            .ease(d3.easeLinear)
            .attr('x', 0.50 * screenSize[0])
            .style('opacity', 1)
            .attr('y', (startYHours + 0.08) * screenSize[1]);



        textGroup.selectAll('#totalHoursNumber')
            .data([dataTotalHours])
            .enter().append('text')
                .attr('id', 'totalHoursNumber')
                .attr('text-anchor', 'middle' )
                .style('fill'      , '#C0C0C0')
                .style('opacity'   , 0        )
                .text('--');

        textGroup.selectAll('#totalHoursNumber')
            .data([dataTotalHours])
            .transition()
            .duration(300)
            .ease(d3.easeLinear)
            .attr('x', 0.50 * screenSize[0])
            .attr('y', startYHours * screenSize[1])
            .style('opacity', 1)
            .text((d) => {let text = DataHandlers.textDisplay(d, '--');
                thisNode.select('#totalHoursNumber')
                    .style('font-size' , KPINameFontSizeComputer(text))
                return text} );


    };



    // ************************ RENDERING ************************ 
    render() {
        return (
            <svg ref = { node => this.node = node } 
                 id  = {'KPI_Dashboard'}
                 className = {'BackgroundSVG'}
                >
            </svg>)
        
    };

};

export default KPIDashboard