import * as d3 from 'd3'            ;
import convert from 'color-convert' ;

function DateDataPopulator(dates, resolutionData){


        // Defining Date Range
        let timeStampName ;
        let fromDate      ;
        let toDate        ;

        //Values of unit time periods (in milliseconds) are precomputed to avoid useless calcultations by server
        const oneHour  =     3600000.00;  //[ms]
        const oneDay   =    86400000.00;  //[ms]
        const oneWeek  =   604800000.00;  //[ms]
        const oneMonth =  2620800000.00;  //[ms]


        //Date Range
        if (dates){
            fromDate = new Date((new Date(dates[0].split('-'))).setHours(0,0,1))      ;
            toDate   = new Date((new Date(dates[1].split('-'))).setHours(23, 59, 59)) ;
        }else{
            fromDate = 0;
            toDate   = 0;
        };

        const timeDifference = toDate.getTime() - fromDate.getTime();

        //Axis Resolution Definition & TimeArray Population & Tick Format
        let timeArray  = [fromDate.getTime()];
        let newDate    = new Date(fromDate)  ;
        let tickFormat = '%a %d/%m' ;

        // HOUR-Resolution
        if (timeDifference < resolutionData['numberHours' ] * oneHour ){
            // TimeStampName
            timeStampName = 'hour' ;

            // TimeArray Population
            for (let i = 1; i < Math.ceil(timeDifference / oneHour ); i++){
                timeArray.push( (new Date(newDate.setHours(newDate.getHours() + 1))).getTime());
            };

            // TickFormat
            tickFormat = '%Hh'  ;


        // DAY-Resolution
        }else if (timeDifference < resolutionData['numberDays'  ] * oneDay  ){
            // TimeStampName
            timeStampName = 'doy'  ;

            // TimeArray Population
            for (let i = 1; i < Math.ceil(timeDifference / oneDay  ); i++){
                timeArray.push( (new Date(newDate.setDate (newDate.getDate()  + 1))).getTime());
            };

            // TickFormat
            tickFormat = '%a %d/%m' ;


        // WEEK-Resolution
        }else if (timeDifference < resolutionData['numberWeeks'] * oneWeek ){
            // TimeStampName
            timeStampName = 'week' ;

            // TimeArray Population
            timeArray = [(d3.timeMonday(fromDate)).getTime()]
            let endTime   =  (d3.timeMonday(toDate  )).getTime();

            for (let newTime = timeArray[0]; newTime <= endTime; newTime += oneWeek){
                timeArray.push(newTime);
            };

            // TickFormat
            tickFormat = 'W %V';


        // MONTH-Resolution
        }else if (timeDifference < resolutionData['numberMonths'] * oneMonth){
            // TimeStampName
            timeStampName = 'month';

            // TimeArray Population
            timeArray       = [(d3.timeMonth(fromDate)).getTime()]

            const montRange = d3.timeMonth.range(fromDate, toDate);
            
            montRange.forEach((element) => timeArray.push(element.getTime()))
      

            // TickFormat
            tickFormat = "%b '%y";
            

        // YEAR-Resolution
        }else{
            // TimeStampName
            timeStampName = 'year' ;

            // TimeArray Population
            timeArray[0] = new Date(timeArray[0])
            timeArray[0].setMonth(0)
            timeArray[0].setDate(1)
            timeArray[0].setHours(0, 0, 0)
            timeArray[0] = timeArray[0].getTime()

            newDate.setMonth(0)    ;
            newDate.setDate(1)     ;
            newDate.setHours(0,0,0);

            for (let i = 0; i < (toDate.getFullYear() -  fromDate.getFullYear()); i++){
                timeArray.push( (new Date(newDate.setFullYear (newDate.getFullYear() + 1))).getTime());
            };

            // TickFormat
            tickFormat = '%Y'       ;

        };

    return [timeArray, timeStampName, tickFormat];
};


// Displaying text in a rounded fashion. 
function TextDisplay(valueToCheck, noneValue){

    let textToReturn = noneValue;
    if (valueToCheck != null){
        valueToCheck = parseFloat(valueToCheck);
        let sign = '';
        if (valueToCheck < 0){
            sign = '-';
        };

        valueToCheck = Math.abs(valueToCheck);

        if (valueToCheck < 1){
            textToReturn = parseFloat(parseFloat(valueToCheck).toFixed(2)).toString();

        }else if (valueToCheck < 1E2){
            if (valueToCheck % 1 === 0){
                textToReturn = parseFloat(valueToCheck).toFixed(0);
            }else{
                textToReturn = parseFloat(valueToCheck).toFixed(1);
            };

        }else if (valueToCheck < 1.15 * 1E3 ){
            textToReturn = (Math.round(valueToCheck)).toString();

        // 1,150.  ->  999,000.
        }else if (valueToCheck < 1E6 ){
            // e.g. 1440 -> 1.44k
            if (valueToCheck < 1E4 ){
                textToReturn = parseFloat(parseFloat(valueToCheck/1E3 ).toFixed(2)).toString() + 'k';

            // e.g. 10540 -> 10.5k
            }else if (valueToCheck < 1E5 ){
                textToReturn = parseFloat(parseFloat(valueToCheck/1E3 ).toFixed(1)).toString() + 'k';

            // e.g. 100400 -> 100k
            }else{
                textToReturn = parseFloat(parseFloat(valueToCheck/1E3 ).toFixed(0)).toString() + 'k';
            };

        // 1,000,000. -> 999,000,000.
        }else if (valueToCheck < 1E9 ){

            if (valueToCheck < 1E7 ){
                textToReturn = parseFloat(parseFloat(valueToCheck/1E6 ).toFixed(2)).toString() + 'M';

            }else if (valueToCheck < 1E8 ){
                textToReturn = parseFloat(parseFloat(valueToCheck/1E6 ).toFixed(1)).toString() + 'M';

            }else{
                textToReturn = parseFloat(parseFloat(valueToCheck/1E6 ).toFixed(0)).toString() + 'M';
            };


        // 1,000,000,000. -> 999,000,000,000.
        }else if (valueToCheck < 1E12){
            textToReturn = parseFloat(parseFloat(valueToCheck/1E9 ).toFixed(1)).toString() + 'B'

            if (valueToCheck < 1E10 ){
                textToReturn = parseFloat(parseFloat(valueToCheck/1E9 ).toFixed(2)).toString() + 'B';

            }else if (valueToCheck < 1E11 ){
                textToReturn = parseFloat(parseFloat(valueToCheck/1E9 ).toFixed(1)).toString() + 'B';

            }else{
                textToReturn = parseFloat(parseFloat(valueToCheck/1E9 ).toFixed(0)).toString() + 'B';
            };


        // 1,000,000,000,000. -> ...
        }else{
            textToReturn = parseFloat(parseFloat(valueToCheck/1E12).toFixed(0)).toString() + 'T'
        };


        textToReturn = sign + textToReturn

    };
    return textToReturn;
};




function StackedDataHandler(inputData, completedTimeStamps, timeStampName){
    //Grouping numbers per timeStamp
    let foundStacks = [] ;
    let timeStamps  = [] ;
    let dataArray   = {} ;
    let timeStamp   = '' ;
    let dataset     = {} ;

    //Match the time-array and the the server response data
    for (let i = 0; i < inputData.length; i++) {
        dataset = inputData[i];

        // Finding Closest TimeStamp to place the data into it
        // eslint-disable-next-line
        let priorTimeStamps = completedTimeStamps.filter((element) => element <= (new Date(dataset['timeAxis']['datetime'])).getTime())
        
        if (priorTimeStamps.length > 0){
            timeStamp = Math.max.apply(null, priorTimeStamps);
        }else{
            timeStamp = Math.max.apply(null, completedTimeStamps);
        };


        // Saving all the timestamps that are filled (for smoother data completion with empty data later on)
        if (!timeStamps.includes(timeStamp)){
            timeStamps.push(timeStamp);
        };


        // Creating dataArray
        if (dataArray[timeStamp]) {
            dataArray[timeStamp][dataset['stack']] = dataset['count'];
        } else {
            dataArray[timeStamp] = {};
            dataArray[timeStamp][dataset['stack']] = dataset['count'];
        };

        dataArray[timeStamp]['timeChar'] = dataset['timeAxis'];
        dataArray['timeStampName'] = timeStampName;

        if (!foundStacks.includes(dataset['stack'])) {
            foundStacks.push(dataset['stack']);
        };
    };


    //Adding empty info to datapoint that were not present in server response        
    for (let i in completedTimeStamps){
        let timeStampToFill = completedTimeStamps[i];

        if (!timeStamps.includes(timeStampToFill)){
            timeStamps.push(timeStampToFill);
            dataArray[timeStampToFill] = {};
            dataArray[timeStampToFill]['timeChar'] = {};
        };
    };

    timeStamps.sort((a, b) => b - a);



    //Completing the data with additional calculations (totals, adding empty subs, etc.)
    let stackOptions = [] ;
    let dayData      = {} ;
    let stack        = '' ;
    let data         = [] ;
    let sum          = 0  ;

    //Go over all days of the week (numbers)
    for (let i in timeStamps) {
        dayData = dataArray[timeStamps[i]];
        sum = 0;

        //Adding sub-array for each timeStamp which will contain stack-data;
        dayData['stackInfo'] = [];

        // Constructin the stackInfo sub-array
        for (let j in foundStacks) {

            stack = foundStacks[j];
            
            // Creating stack key in object
            if (!Object.keys(dayData).includes(stack)) {
                dayData[stack] = 0;
            } else {
                dayData[stack] = +dayData[stack];
            };
            
            // Creating the 'total' value
            sum += dayData[stack];

            // Adding the newly created object to the global dayData
            dayData['stackInfo'].push({'bar': timeStamps[i], 'stack': stack, 'count': +dayData[stack], 'y0':0, 'y1':0 });
        };


        // Adding empty object in stackInfo
        if (dayData['stackInfo'].length === 0){
            dayData['stackInfo'].push({ 'bar': timeStamps[i], 'stack': '', 'count': 0, 'y0':0, 'y1':0  });
        }

        dayData['axisResolution'] = dataArray['timeStampName'];
       

        //Adding total of that day (all stacks combined)
        dayData['total'] = sum;

        for (let j in dayData['stackInfo']) {
            dayData['stackInfo'][j]['total'] = sum;
        };

        //sorting data
        dayData['stackInfo'].sort((a, b) => a.stack > b.stack);
        data.push(dayData);
    };

    stackOptions = foundStacks.sort()   

    return [data, stackOptions];
};



function DonutDataHandler(data, inputStartAngle = 0, inputEndAngle = Math.PI * 2, weightedSort = {}, sortKey = null){

    //Getting Totals
    let dataTotal = 0;
    let mostlyCategory = {max:0 ,category:'--'};
    data.forEach((element) => {dataTotal += element.count
                               if (element.count > mostlyCategory.max){
                                    mostlyCategory = {max: element.count, category : element.datapoint};
                               };   
                        });
    
    data.forEach((element) => element.total = dataTotal);
    
    //Sorting data
    if ((Object.keys(weightedSort)).length > 0 ){
        data.sort((a, b) => weightedSort[a.datapoint] > weightedSort[b.datapoint])
    }else{
        data.sort((a, b) => a.datapoint > b.datapoint);       
    };

    if (sortKey != null){
        data.sort((a, b) => SortingComparer(a, b, sortKey, '9-0'));
    }
    

    //Scale Parameters
    let dataMax = dataTotal;

    const radialScale = d3.scaleLinear() //function accepting values between 0 and max_data. It maps these to the 'range'
        .domain([0, dataMax])
        .range ([0 , inputEndAngle-inputStartAngle]);


    //Adding Parameters to Data array (percentage and start-end angles)
    let percentage = 0;
    data.forEach(function(element, i){
        percentage = Math.round((element.count / element.total) * 100);

        element['percentage'] = percentage                 ;
        element['startAngle'] = 0                          ;
        element['endAngle']   = radialScale(element.count) + inputStartAngle ;


        if (i > 0){
            element['startAngle'] = data[i-1].endAngle;
            element['endAngle'  ] = data[i-1].endAngle + radialScale(element.count);

        };
        
    });

    return [data, mostlyCategory];

};



//Colors
function ColorScaleComputer(Color, numberColorsWanted, order = 'D2L'){
    // Color             : Hex color on which the scale should be based
    // numberColorsWanted: Integer representing the number of colors that should be created
    // order             : * D2L = 'dark to light'
    //                     * L2D = 'light to dark'

    const hslColor   = convert.hex.hsl(Color);
    const hexColors  = [];
    const step       = 13;
    let   lightness  = 50;

    // Defining lightness
    if (numberColorsWanted <= 100/step){
        const startValue = 50 - (numberColorsWanted / 2) * step;
        for (let i = 0; i < numberColorsWanted; i++){
            lightness = startValue + (i * step) ;
            hexColors.push('#' + convert.hsl.hex(hslColor[0], hslColor[1], lightness));
        };

    }else{
        
        for (let i = 0; i < numberColorsWanted; i++){

            //lightness = ( 100/(numberColorsWanted + 1) ) * (i + 1);
            //hexColors.push('#' + convert.hsl.hex(hslColor[0], hslColor[1], lightness));
            hexColors.push('#' + convert.hsl.hex(hslColor[0], hslColor[1], 10));
        };
    }


    // Scale order
    if (order === 'L2D'){
        hexColors.reverse()
    };

    return hexColors;

};


function TextNeutralizer (text){
    // Neutralizing text in the sense that all symbols are replaced by a '_' to avoid errors in DOM-element names. 

    text = text.toString();
    const symbols = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '`', '{', '|', '}', '~', ' ', '\t', '\n', '\r', '\x0b', '\x0c'];
    let newText   = ''; 
    for (let i in text){
        let character = text[i];

        if (symbols.includes(character)){
            character = '_';
        };
        
        newText += character;
    };

    return newText;
};


function SortingComparer(a,b, key, order='0-9') {

    // ordering directions: '0-9' : Numbers from small to large
    //                      '9-0' : Numbers from large to small
    //                      'A-Z' : Letters from A to Z
    //                      'Z-A' : Letters from Z to A

    let returnValues;
    if (['0-9', 'A-Z'].includes(order)){
        returnValues = [-1, 1, 0];
    }else if (['9-0', 'Z-A'].includes(order)){
        returnValues = [1, -1, 0];
    };

    if (a[key] === '-')
        return 1;

    if (a[key] === undefined  || a[key] < b[key])
        return returnValues[0];
    if (a[key] === undefined  || a[key] > b[key])
        return returnValues[1];
    return returnValues[2];


};


export default {DateDataPopulator  : DateDataPopulator  ,
                textDisplay        : TextDisplay        ,
                StackedDataHandler : StackedDataHandler ,
                DonutDataHandler   : DonutDataHandler   ,
                ColorScaleComputer : ColorScaleComputer ,
                TextNeutralizer    : TextNeutralizer    ,
                SortingComparer    : SortingComparer    ,
            };












