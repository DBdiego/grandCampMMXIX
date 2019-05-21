import React, {Component}  from 'react'                  ;
import { select }          from 'd3-selection'           ;
import * as d3             from 'd3'                     ;
import * as topojson       from 'topojson-client'        ;
import {Redirect}          from 'react-router-dom'       ;
import worldMap            from './WoldMap.json'         ;
import Empires             from './Empires.json'         ;
import empireNamePaths     from './EmpireNamePaths.json' ;
import oceanNamePaths      from './OceanNamePaths.json'  ;
import startingPoints      from './Radials.json';


class RomanEmpireMap extends Component {
    constructor() {
        super();
        
        this.state = {redirect:''};

        this.createBelgiumMap = this.createBelgiumMap.bind(this);
        this.clickHandler     = this.clickHandler.bind(this)
    };

    componentDidMount() {
        this.createBelgiumMap();
    };

    componentDidUpdate() {
        this.createBelgiumMap();
    };

    
    clickHandler(d, i){
        let correspondingGroup = {'romans'    : 'scouts'     ,
                                  'greeks'    : 'louvettes'  ,
                                  'egyptians' : 'guides'     ,
                                  'persians'  : 'louveteaux' ,
                                  'gaulans'   : 'baladins'   };

        let target = '/2019/' + correspondingGroup[d.properties.name] + '/accueil';


        this.setState({redirect: <Redirect to={target}/>});
    }
    

    createBelgiumMap(){

        //===================================  GENERAL  =================================== 
        //let inputData  = this.props.data  ;
        let screenSize = this.props.size  ;

        
        //Adapting screen size
        screenSize = this.props.size;

        if (screenSize[0] < 200){
            screenSize[0] = 200;
        };
        if (screenSize[1] < 160){
            screenSize[1] = 160;
        };

        
        const node   = this.node;
        let thisNode = select(node);

        //let designSizeMap   = [1500, 700];
        let designSize = [1500, 700];
        //let translationBias = [0, 0];


        //=====================================  STYLING  ===================================== 
        const nonHighlightOpacity = 0.7;
        const highlightOpacity    = 0.7;


        // ===================================== GEOMETRICAL CONSTANTS ========================================
        // Centroid of the map
        //let centroid = d3.geoCentroid(topojson.feature(belgiumRegions, belgiumRegions.objects.BEL_adm2));
        let centroid = [6.665974155749955, 50.64013693782517];
        let center   = [0, centroid[1]];
        let rotate   = [-centroid[0],0];


        //Adjusting the projection
        let projection = d3.geoAlbers()
            .center(center)
            .rotate(rotate)
            .parallels([51.74, 49.34])
            .scale(Math.min.apply(null, screenSize)*1.5)
            .translate([screenSize[0] * 0.30, screenSize[1] * 0.195]);

        let path = d3.geoPath().projection(projection);        

        // Text positioning
        //const startXText = 0.08;
        //const startYText = 0.73;



        //===================================  DATAHANDLING  =================================== 

        let worldmap    = topojson.feature(worldMap, worldMap.objects.ne_50m_land ).features;
        let empires     = topojson.feature(Empires, Empires.objects.map).features;
        let empireNames = topojson.feature(empireNamePaths, empireNamePaths.objects.map).features;
        let oceanNames  = topojson.feature(oceanNamePaths , oceanNamePaths.objects.map).features;
        let radials     = topojson.feature(startingPoints , startingPoints.objects.map).features;

        //let backgroundOthers = '#cc9861' //'#cc9861'
        
        
        let empireColors = {'romans'    : {'initial' : '#A2412B' ,
                                           'selected': '#8B0000'},

                            'greeks'    : {'initial' : '#68923F' ,
                                           'selected': '#257025'},

                            'persians'  : {'initial' : '#3B38C4' ,
                                           'selected': '#000099'},

                            'egyptians' : {'initial' : '#9F6934' ,
                                           'selected': '#72340D'},

                            'gaulans'   : {'initial' : '#843EC1' ,
                                           'selected': '#630CAF'}};
        
        
        
        /*
        let empireColors = {'romans'    : {'initial' : backgroundOthers,//'#a2412b',
                                           'selected': '#8b0000'},
                            'greeks'    : {'initial' : backgroundOthers,//'#68923f',
                                           'selected': '#257025'},
                            'persians'  : {'initial' : backgroundOthers,//'#3b38c4',
                                           'selected': '#000099'},
                            'egyptians' : {'initial' :  backgroundOthers,//'#9f6934',
                                           'selected': '#72340d'},
                            'gaulans'   : {'initial' : '#843ec1',
                                           'selected': '#630caf'}};
        */
        

    
        let widthRoseDesVents  = parseFloat(d3.selectAll('.roseDesVents').style('width').replace('px', ''));
        let heigthRoseDesVents = 998/946 * widthRoseDesVents;
        let raidalPointPath;
        let startingPoint;
        let startingPointsLines = [[screenSize[0]*0.02 + widthRoseDesVents /2, 
                                    screenSize[1]*0.72 + heigthRoseDesVents/2]];

        radials.forEach((d, i) => {
            raidalPointPath = path(d);
            startingPoint = raidalPointPath.split('m')[0].slice(1).split(',');
            startingPointsLines.push([parseFloat(startingPoint[0]),parseFloat(startingPoint[1])])
        });

        let numLines = [24, 18, 17, 18, 10];
        let lineData = [];
        let angle;
        let lineLength = Math.sqrt(Math.pow(screenSize[0],2) + Math.pow(screenSize[1],2));
        if (1){
            startingPointsLines.forEach((startingPointLines, i) => {

                for (angle=0; angle <= (Math.PI*2); angle += (Math.PI*2/(numLines[i]+1)) ){
                    lineData.push([startingPointLines, [Math.cos(angle)*lineLength, Math.sin(angle)*lineLength]])
                };

            });
        };


        // =========================================== CANVAS ===========================================
        //Adding svg Background
        thisNode.selectAll('.oceans')
            .data([''])
            .enter().append('rect')
                .attr('class', 'oceans');

        //Updating svg Background
        thisNode.selectAll('.oceans')
            .attr('width' , '100%')
            .attr('height', '100%');



        // ============================================= SHADOW ============================================== 

        let defs = thisNode.append("defs");

        let filter = defs.append("filter")
            .attr("id", "shadow")
            .attr("height", "300%")
            .attr("width", '300%')
            .attr('x', '-100%')
            .attr('y', '-100%');

        filter.append('feDropShadow')
            .attr('dx', 0)
            .attr('dy', 0)
            .attr('stdDeviation',4)
            .attr('flood-color', '#2A2823');



        // ============================================= SEA NAMES ============================================== 
        
        // Adding a group for all the seaNames
        thisNode.selectAll('#seaNames')
            .data([''])
            .enter().append('g')
                .attr('id', 'seaNames');

        const seaNamesGroup = thisNode.selectAll('#seaNames');


        seaNamesGroup.selectAll('#seaNamePaths')
            .data([''])
            .enter().append('g')
                .attr('id', 'seaNamePaths');

        seaNamesGroup.selectAll('#seaNameTexts')
            .data([''])
            .enter().append('g')
                .attr('id', 'seaNameTexts');

        const seaNamePaths = thisNode.selectAll('#seaNamePaths');
        const seaNameTexts = thisNode.selectAll('#seaNameTexts');


        // Sea Name Paths
        seaNamePaths.selectAll('.seaPath')
            .data(oceanNames)
            .enter().append('path')
                .attr('id'      , (d,i) => d.properties.id)
                .attr('class'   , 'seaPath')
                .style('fill'   , 'none')
                .style('stroke' , 'none');//'#FFFFFF');

        seaNamePaths.selectAll('.seaPath')
            .data(oceanNames)
            .exit().remove();

        seaNamePaths.selectAll('.seaPath')
            .data(oceanNames)
                .attr('d', path);

        // Sea Names
        seaNameTexts.selectAll('.seaNameText')
            .data(oceanNames)
            .enter().append('text')
            .append('textPath')
                .attr('id', (d, i) => 'seaNameText_' + d.properties.id)
                .attr('class', 'seaNameText')
                .attr('xlink:href'  , (d, i) => '#'+ d.properties.id)
                .style('text-anchor', 'middle' )
                .attr('startOffset' , '50%'    )
                .attr('fill'        , '#909986')
                .text((d, i) => d.properties.name);


        // Removing Surplus Empires
        seaNameTexts.selectAll('.seaNameText')
            .data(oceanNames)
            .exit().remove();

        // Updating Empires
        seaNameTexts.selectAll('.seaNameText')
            .data(oceanNames)
                .text((d, i) => d.properties.name)
                .attr('font-size', (d, i) => Math.round(d.properties.fontsize * screenSize[1]/designSize[1]));


        // ============================================= BASE MAP ============================================== 

        // Adding a group for all the worldmap
        thisNode.selectAll('#worldmap')
            .data([''])
            .enter().append('g')
                .attr('id', 'worldmap');


        // Adding a group for all the empires
        thisNode.selectAll('#Lines')
            .data([''])
            .enter().append('g')
                .attr('id', 'Lines');

        // Adding a group for all the empires
        thisNode.selectAll('#empires')
            .data([''])
            .enter().append('g')
                .attr('id', 'empires');


        const worldmapGroup  = thisNode.selectAll('#worldmap');
        const lineGroup      = thisNode.selectAll('#Lines'   );
        const empiresGroup   = thisNode.selectAll('#empires' );

        

        // Adding new worldmap
        worldmapGroup.selectAll('.worldmap')
            .data(worldmap)
            .enter().append('path')
                .attr('id', (d, i) => 'worldmap_' + i)
                .attr('class' , 'worldmap')
                .attr('stroke', '#000000')
                .attr('stroke-width', 0.2)
                .attr('fill-opacity', 1)
                .attr('z-index', -2)
                .style('filter', "url(#shadow)");
                
        // Removing Surplus worldmap
        worldmapGroup.selectAll('.worldmap')
            .data(worldmap)
            .exit().remove();

        // Updating worldmap
        worldmapGroup.selectAll('.worldmap')
            .data(worldmap)
            .attr('d', path);




        // Adding new Radiating Lines
        lineGroup.selectAll('.Lines')
            .data(lineData)
            .enter().append('line')
                .attr('id', (d, i) => 'line_' + i)
                .attr('class' , 'Lines')
                .attr('stroke', '#472416')
                .attr('stroke-width', 0.2)
                .attr('opacity', 0.7);
                
        // Removing Surplus worldmap
        lineGroup.selectAll('.Lines')
            .data(lineData)
            .exit().remove();

        // Updating  Radiating Lines
        lineGroup.selectAll('.Lines')
            .data(lineData)
            .attr('x1', (d, i) => d[0][0])
            .attr('y1', (d, i) => d[0][1])
            .attr('x2', (d, i) => d[1][0])
            .attr('y2', (d, i) => d[1][1])
            //.attr('transform', 'scale('+screenSize[0]/designSize[0]+','+screenSize[1]/designSize[1]+')');





        // Adding new Empires
        empiresGroup.selectAll('.empire')
            .data(empires)
            .enter().append('path')
                .attr('id', (d, i) => 'empire_' + d.properties.name)
                .attr('class' , 'empire')
                .attr('fill'  , (d) => empireColors[d.properties.name].initial)
                .attr('stroke', '#0A0A0A')
                .attr('stroke-width', 0.7)
                .attr('stroke-opacity', 1)
                .attr('fill-opacity', nonHighlightOpacity);
                
        // Removing Surplus Empires
        empiresGroup.selectAll('.empire')
            .data(empires)
            .exit().remove();

        // Updating Empires
        empiresGroup.selectAll('.empire')
            .data(empires)
                .attr('d', path)
                .on('mouseover', MouseOverHandler)
                .on('mouseout' , MouseOutHandler)
                .on('click', this.clickHandler);



        // ============================================= INTERACTIVITY ============================================== 

        function MouseOverHandler(d, i){

            //console.log(thisNode.selectAll('.empire_'+d.properties.name));
            thisNode.selectAll('#empire_' + d.properties.name)
                //.transition()
                //.duration(animationDuration)
                //.ease(d3.easeLinear)
                .attr('storke', 'black')
                .attr('stroke-width', 2)
                .attr('stroke-opacity', 1)
                .attr('fill'  , (d) => empireColors[d.properties.name].selected)
                .attr('fill-opacity', highlightOpacity);

        };

        function MouseOutHandler(d, i){

            // Put the opacity and fill back to original
            thisNode.selectAll('#empire_' + d.properties.name)                    
                //.transition()
                //.duration(animationDuration)
                //.ease(d3.easeLinear)
                .attr('stroke-width', 0.7)
                .attr('stroke-opacity', 1)
                .attr('fill'  , (d) => empireColors[d.properties.name].initial)
                .attr('fill-opacity', nonHighlightOpacity);

        };



        //============================================= EMPIRE NAMES ============================================== 

        thisNode.selectAll('#empireNames')
            .data([''])
            .enter().append('g')
                .attr('id', 'empireNames');


        const empireNamesGroup  = thisNode.selectAll('#empireNames');


        empireNamesGroup.selectAll('#empireNamesPaths')
            .data([''])
            .enter().append('g')
                .attr('id', 'empireNamesPaths');

        empireNamesGroup.selectAll('#empireNamesTexts')
            .data([''])
            .enter().append('g')
                .attr('id', 'empireNamesTexts');

        const empireNamesPaths = thisNode.selectAll('#empireNamesPaths');
        const empireNamesTexts = thisNode.selectAll('#empireNamesTexts');


        // Empire Name Paths
        empireNamesPaths.selectAll('.empireNamePath')
            .data(empireNames)
            .enter().append('path')
                .attr('id'      , (d,i) => d.properties.id)
                .attr('class'   , 'empireNamePath')
                .style('fill'   , 'none')
                .style('stroke' , 'none');

        empireNamesPaths.selectAll('.empireNamePath')
            .data(empireNames)
            .exit().remove();

        empireNamesPaths.selectAll('.empireNamePath')
            .data(empireNames)
                .attr('d', path)
                .on('mouseover', MouseOverHandler)
                .on('mouseout' , MouseOutHandler)
                .on('click', this.clickHandler);



        // Empire names
        empireNamesTexts.selectAll('.empireName')
            .data(empireNames)
            .enter().append('text')
                .append('textPath')
                    .attr('id', (d, i) => 'text_' + d.properties.name)
                    .attr('class', 'empireName')
                    .attr('xlink:href'  , (d, i) => '#' + d.properties.id)
                    .style('text-anchor', 'middle' )
                    .attr('startOffset' , '50%'    )
                    .attr('fill'        , (d, i) => d.properties.color )
                    .text((d, i) => d.properties.text);

        // Removing Surplus Empires
        empireNamesTexts.selectAll('.empireName')
            .data(empireNames)
            .exit().remove();

        // Updating Empires
        empireNamesTexts.selectAll('.empireName')
            .data(empireNames)
                .attr('font-size' ,  Math.round(13 * screenSize[1]/designSize[1]) )
                .text((d, i) => d.properties.text)
                .on('mouseover', MouseOverHandler)
                .on('mouseout' , MouseOutHandler)
                .on('click', this.clickHandler);


        // Empire names
        empireNamesTexts.selectAll('.empireSection')
            .data(empireNames)
            .enter().append('text')
                .attr('class', 'actualTextSection')
                .append('textPath')
                    .attr('id', (d, i) => 'text_' + d.properties.section)
                    .attr('class', 'empireSection')
                    .attr('xlink:href'  , (d, i) => '#'+d.properties.id)
                    .style('text-anchor', 'middle' )
                    .attr('startOffset' , '50%'    )
                    .attr('fill'        , (d, i) => d.properties.color )
                    .text((d, i) => d.properties.section);

        // Removing Surplus Empires
        empireNamesTexts.selectAll('.empireSection')
            .data(empireNames)
            .exit().remove();

        // Updating Empires
        empireNamesTexts.selectAll('.empireSection')
            .data(empireNames)
                .attr('font-size' ,  Math.round(12 * screenSize[1]/designSize[1]) )
                .text((d, i) => d.properties.section)
                .on('mouseover', MouseOverHandler)
                .on('mouseout' , MouseOutHandler)
                .on('click', this.clickHandler);


        // Updating Empire Names
        empireNamesTexts.selectAll('.actualTextSection')
            .data(empireNames)
                .attr('dy', Math.round(14 * screenSize[1]/designSize[1]) );





    };





    //===================================  RENDERING  =================================== 
    render() {
        return (
            <div>
                <svg ref = { node => this.node = node } 
                     id  = {'RomanEmpireMap'}
                     width = {this.props.size[0]}
                     height = {this.props.size[1]}
                     className = {'BackgroundSVG'}
                     >
                </svg>
                {this.state.redirect}
            </div>
        )   
    }

}
export default RomanEmpireMap
