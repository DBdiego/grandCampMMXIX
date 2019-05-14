import React, { Component}   from 'react'                        ;
import { scaleLinear }       from 'd3-scale'                     ;
import { select }            from 'd3-selection'                 ;
import * as d3               from 'd3'                           ;
import * as topojson         from 'topojson-client'              ;
import belgiumRegions        from './BelgiumRegions.json'        ;
import belgiumProvinces      from './BelgiumProvinces.json'      ;
import BelgiumGeographicData from './BelgiumGeographicData.json' ;
import DataHandlers          from '../DataHandlers.jsx'          ;
import testMapWorld          from './subunits.topojson';

/* DOCUMENTAION:
1) required inputs: 
    -> data  : the data to be plotted in the format described in 2)
    -> size  : the size of the svg block
    -> title : the plot title
    -> color : the color of the line

2) input-data format:
    [{datapoint: #ZIPCODE#, count: #NUMBER#},
     {datapoint: #ZIPCODE#, count: #NUMBER#},
     {datapoint: #ZIPCODE#, count: #NUMBER#}]
*/



class BelgiumMap extends Component {
    constructor(props) {
        super(props);
        this.createBelgiumMap = this.createBelgiumMap.bind(this);
    };

    componentDidMount() {
        this.createBelgiumMap();
    };

    componentDidUpdate() {
        this.createBelgiumMap();
    };


    createBelgiumMap(){
        //console.log('BELGIUM MAP');

        let inputData = this.props.data;

        //===================================  GENERAL  =================================== 
        //let inputData  = this.props.data  ;
        let chartTitle = this.props.title ;
        let screenSize = this.props.size  ;

        
        //Adapting screen size
        screenSize = [parseFloat(d3.select('#BelgiumMap_' + DataHandlers.TextNeutralizer(this.props.title)).style('width' ).replace('px', '')),
                      parseFloat(d3.select('#BelgiumMap_' + DataHandlers.TextNeutralizer(this.props.title)).style('height').replace('px', ''))
                     ]
        if (screenSize[0] < 200){
            screenSize[0] = 200;
        };
        if (screenSize[1] < 160){
            screenSize[1] = 160;
        };
        

        const node   = this.node;
        let thisNode = select(node);


        let highlightColor = this.props.highlightColor;

        let animationDuration = 300;

        //=====================================  STYLING  ===================================== 
        const fontSizeRegion     = Math.round(0.045 * Math.min.apply(null, screenSize));
        const fontSizeAbsolute   = Math.round(0.052 * Math.min.apply(null, screenSize));
        const fontSizePercentage = Math.round(0.15  * Math.min.apply(null, screenSize));



        //===================================  DATAHANDLING  =================================== 

        //Drawing the base map
        let regions   = topojson.feature(belgiumRegions  , belgiumRegions.objects.BEL_adm2  ).features;
        let provinces = topojson.feature(belgiumProvinces, belgiumProvinces.objects.BEL_adm1).features;
        let testMap   = topojson.feature(testMapWorld, testMapWorld.objects.ne_50m_land).features;


        // Creating a 'data' array and adding the geometries in them
        let data = [];
        regions.forEach((element) => {
            data.push({
                count   : 0,
                region  : element.properties.NAME_2,
                pathData: element
            });
        });

        // Adding the counts to the previously created 'data' array
        inputData.forEach((element) => {
            try{
                let localRegion = BelgiumGeographicData[element.datapoint.toString()]['arrondissement'];
                let filteredObject =  data.filter((object) => object.region === localRegion);

                if (filteredObject.length > 0){
                    data[data.indexOf(filteredObject[0])].count += element.count;
                };
            }catch(err) {};
        });


        //Computing the total
        let total   = 0;
        let dataMax = 0;
        data.forEach((element) => {if(element.count > dataMax){dataMax = element.count};total += element.count;});

        // Scaling opacity depending on the share of the distribution in this category
        const opacityScale  = scaleLinear() 
            .domain([0, dataMax])
            .range ([0, 1]);



        // ===================================== GEOMETRICAL CONSTANTS ========================================
        // Centroid of the map
        let centroid = d3.geoCentroid(topojson.feature(belgiumRegions, belgiumRegions.objects.BEL_adm2));
        let center = [0, centroid[1]];
        let rotate = [-centroid[0],0];


        //Adjusting the projection
        let projection = d3.geoAlbers()
            .center(center)
            .rotate(rotate)
            .parallels([51.74, 49.34])
            .scale(Math.min.apply(null, screenSize) * 20)
            .translate([screenSize[0] * 0.55, screenSize[1] * 0.48]);

        let path = d3.geoPath().projection(projection);        

        // Text positioning
        const startXText = 0.08;
        const startYText = 0.73;



        // =========================================== CANVAS ===========================================
        //Adding svg Background
        thisNode.selectAll('.componentBackground')
            .data([''])
            .enter().append('rect')
                .attr('class', 'componentBackground');

        //Updating svg Background
        thisNode.selectAll('.componentBackground')
            .attr('width' , screenSize[0] * 1.1)
            .attr('height', screenSize[1] * 1.1);


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


        // ============================================= BASE MAP ============================================== 

        
        // Adding a group for all the regions
        thisNode.selectAll('#regions')
            .data([''])
            .enter().append('g')
                .attr('id', 'regions');

        
        // Adding a group for all the provinces
        thisNode.selectAll('#provinces')
            .data([''])
            .enter().append('g')
                .attr('id', 'provinces');


        // Adding a group for all the testmap
        thisNode.selectAll('#testmap')
            .data([''])
            .enter().append('g')
                .attr('id', 'testmap');


        const regionsGroup   = thisNode.selectAll('#regions'  );
        const provincesGroup = thisNode.selectAll('#provinces');
        const testmapGroup   = thisNode.selectAll('#testmap');


        // Adding new Regions
        regionsGroup.selectAll('.testmap')
            .data(regions)
            .enter().append('path')
                .attr('id', (d) => {console.log(d); return('testmap_' + d.properties.NAME_2})
                .attr('class' , 'testmap')
                .attr('stroke', '#A0A0A0')
                .attr('stroke-width', 0.7)
                .attr('fill' , '#404040');
                
        // Removing Surplus Regions
        regionsGroup.selectAll('.testmap')
            .data(regions)
            .exit().remove();

        // Updating Regions
        regionsGroup.selectAll('.testmap')
            .data(regions)
            .attr('d', path)
            .on('mouseover', MouseOverHandler);





        // Adding new Regions
        regionsGroup.selectAll('.region')
            .data(regions)
            .enter().append('path')
                .attr('id', (d) => 'region_' + d.properties.NAME_2)
                .attr('class' , 'region')
                .attr('stroke', '#A0A0A0')
                .attr('stroke-width', 0.7)
                .attr('fill' , '#404040');
                
        // Removing Surplus Regions
        regionsGroup.selectAll('.region')
            .data(regions)
            .exit().remove();

        // Updating Regions
        regionsGroup.selectAll('.region')
            .data(regions)
            .attr('d', path)
            .on('mouseover', MouseOverHandler);



        // Adding new Province
        provincesGroup.selectAll('.province')
            .data(provinces)
            .enter().append('path')
                .attr('id', (d) => 'province_' + d.properties.NAME_1)
                .attr('class', 'province')
                .attr('opacity', 1)
                .attr('stroke' , '#D0D0D0')
                .style('stroke-width', 1.3)
                .attr('fill' , 'none')
                .attr('z-index', 1);
            
        // Removing Surplus Province
        provincesGroup.selectAll('.province')
            .data(provinces)
            .exit().remove();

        // Updating Province
        provincesGroup.selectAll('.province')
            .data(provinces)
            .attr('d', path);



        // ============================================= DATA MAP ============================================== 

        // Adding a group for all the regions
        thisNode.selectAll('#dataRegions')
            .data([''])
            .enter().append('g')
                .attr('id', 'dataRegions');

        const dataRegionsGroup = thisNode.selectAll('#dataRegions');

        // Adding new Regions
        dataRegionsGroup.selectAll('.dataRegion')
            .data(data)
            .enter().append('path')
                .attr('id', (d) => 'dataRegion_' + d.region)
                .attr('class' , 'dataRegion')
                .attr('fill-opacity', 0)
                .attr('fill','#BC9F54');
                
        // Removing Surplus Regions
        dataRegionsGroup.selectAll('.dataRegion')
            .data(data)
            .exit().remove();

        // Updating Regions
        dataRegionsGroup.selectAll('.dataRegion')
            .data(data)
            .attr('d', (d, i) => path(d.pathData, i))
            .on('mouseover', MouseOverHandler)
            .on('mouseout', MouseOutHandler);

        dataRegionsGroup.selectAll('.dataRegion').transition()
            .duration(300)
            .ease(d3.easeLinear)
            .attr('fill-opacity', (d) => opacityScale(d.count));



        // ============================================= INTERACTIVITY ============================================== 

        function MouseOverHandler(d, i){

            //Highlighting selected region
            thisNode.selectAll('#dataRegion_' + d.region).transition()
                .duration(animationDuration)
                .ease(d3.easeLinear)
                .attr('storke', 'black')
                .attr('fill', highlightColor) //'#D0BB87')
                .attr('fill-opacity', 1);


             // Change printed region name to the selected region
            textGroup.selectAll('#regionText').transition()
                .duration(animationDuration)
                .ease(d3.easeLinear)
                .attr('x', (startXText + 0.05) * screenSize[0])
                .attr('y', (startYText + 0.20) * screenSize[1])
                .text(d.region);

            // Update absolute text
            textGroup.selectAll('#absoluteText')
                .text(DataHandlers.textDisplay(d.count, '--')+' students');

            // Fading in percentage text
            textGroup.selectAll('#percentageText').transition()
                .duration(animationDuration)
                .ease(d3.easeLinear)
                .attr('x', (startXText + 0.05) * screenSize[0])
                .attr('y', (startYText + 0.13) * screenSize[1])
                .style('opacity', 0.5)
                .text(() => {let textToReturn = '--';
                                if (d && total !== 0) {
                                    textToReturn = Math.ceil(d.count/total*100) + '%';
                                };
                             return textToReturn;
                        });

        };

        function MouseOutHandler(d, i){

            // Put the opacity and fill back to original
            thisNode.selectAll('#dataRegion_' + d.region).transition()
                .duration(animationDuration)
                .ease(d3.easeLinear)
                .attr('fill-opacity', opacityScale(d.count))
                .attr('fill', '#BC9F54');

            // Change printed region name to 'Nationally'
            textGroup.selectAll('#regionText').transition()
                .duration(animationDuration)
                .ease(d3.easeLinear)
                .attr('x', (startXText + 0.05) * screenSize[0])
                .attr('y', (startYText + 0.07) * screenSize[1])
                .text('Nationally');

            // Update absolute text
            textGroup.selectAll('#absoluteText')
                .text(DataHandlers.textDisplay(total, '--') + ' students');

            // Fading out percentage text
            textGroup.selectAll('#percentageText').transition()
                .duration(animationDuration)
                .ease(d3.easeLinear)
                .attr('x', (startXText - 0.04) * screenSize[0])
                .attr('y', (startYText + 0.13) * screenSize[1])
                .style('opacity', 0);

        };

        // ============================================= TEXT ============================================== 

        // Adding text group
        thisNode.selectAll('.textGroup')
            .data([''])
            .enter().append('g')
                .attr('class', 'textGroup');

        let textGroup = thisNode.selectAll('.textGroup');


        // Adding region name text
        textGroup.selectAll('#regionText')
            .data([''])
            .enter().append('text')
                .attr('id', 'regionText')
                .attr('text-anchor', 'start')
                .text('Nationally');

        // Updating region name text
        textGroup.selectAll('#regionText')
            .attr('x', (startXText + 0.05) * screenSize[0])
            .attr('y', (startYText + 0.07) * screenSize[1])
            .style('font-size' , fontSizeRegion +'px');



        // Adding absolute text
        textGroup.selectAll('#absoluteText')
            .data([''])
            .enter().append('text')
                .attr('id', 'absoluteText')
                .attr('text-anchor', 'start')
                
        // Updating text position
        textGroup.selectAll('#absoluteText')
            .attr('x', startXText * screenSize[0])
            .attr('y', startYText * screenSize[1])
            .style('font-size' , fontSizeAbsolute +'px')
            .text(DataHandlers.textDisplay(total, '--')+ ' students')




        // Adding percentage text
        textGroup.selectAll('#percentageText')
            .data([''])
            .enter().append('text')
                .attr('id', 'percentageText')
                .attr('text-anchor', 'start')
                .style('opacity', 0)
                .text('0%');

        // Updating percentage text
        textGroup.selectAll('#percentageText')
            .attr('x', (startXText - 0.04) * screenSize[0])
            .attr('y', (startYText + 0.13) * screenSize[1])
            .style('font-size' , fontSizePercentage +'px');
    };





    //===================================  RENDERING  =================================== 
    render() {
        return (
            <svg ref = { node => this.node = node } 
                 id  = {'BelgiumMap_' + DataHandlers.TextNeutralizer(this.props.title)}
                 className = {'BackgroundSVG'}
                 >
            </svg>
        )   
    }

}
export default BelgiumMap
