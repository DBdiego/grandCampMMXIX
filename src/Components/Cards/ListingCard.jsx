import React, {Component} from 'react';
import DataHandlers       from '../Charts/DataHandlers.jsx' ;


class ListingCard extends Component{

    render(){
        const rank    = this.props.rank    ;
        const name    = this.props.name    ;

        const number = DataHandlers.textDisplay(this.props.number, '--');
        const text   = this.props.text   ;

        return(
                <div className='card listCard'>
                    <div className='ListingsCard'>
                        <div className='rankContainer'>
                            <label className='label rank'>{rank}</label>
                        </div>
                        <div className='PersonInfo'>
                            <div className='name'>
                                <label className='label label-name'>{name} </label>
                            </div>
                            <div className='kpiInfo'>
                                <label className='KPI-number'>{number} </label>
                                <label className='KPI-text'  >{text}   </label>
                            </div>
                        </div>
                    </div>
                </div>
    )}


}

export default ListingCard