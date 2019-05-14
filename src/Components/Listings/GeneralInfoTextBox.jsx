import React, {Component} from 'react';
import DataHandlers       from '../Charts/DataHandlers.jsx' ;


class GeneralInfoTextBox extends Component{

    render(){
        const title  = this.props.title;
        let TextList = (this.props.data).map(function(element, index){

            let prop   = (element.prop).replace('_', ' ') ; 
            let number = element.number                   ;

            prop = prop[0].toUpperCase() + prop.slice(1) ;

            if (typeof(number) === 'string'){
                number = number[0].toUpperCase() + number.slice(1); 
            }else{
                number = DataHandlers.textDisplay(number, '-');
            };

            return (
                <span key = {index}>
                    <label className='property'> {prop}   </label>
                    <label className='number'  > {number} </label>
                    <br/>
                </span>

            );
        });

        return(
                <div className='GeneralInfoTextBox'>
                    <div className='titleContainer'>
                        <label className = 'plotTitle'> {title} </label>
                    </div>
                    <div className='textlist'>
                        {TextList}
                    </div>
                </div>
    )}

}

export default GeneralInfoTextBox