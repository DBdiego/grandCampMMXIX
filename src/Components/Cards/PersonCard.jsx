import React, {Component} from 'react';
import {Link}             from 'react-router-dom' ;
import DataHandlers       from '../Charts/DataHandlers.jsx' ;


class PersonCard extends Component{

    render(){
        const rank    = this.props.rank    ;
        const name    = this.props.name    ;
        const discr   = this.props.discr   ;

        const number1 = this.props.number1 ;
        const number2 = this.props.number2 ;
        const number3 = this.props.number3 ;
        const text1   = this.props.text1   ;
        const text2   = this.props.text2   ;
        const text3   = this.props.text3   ;

        const id      = this.props.id      ;
        const dates   = this.props.dates   ;
        const socket  = this.props.socket  ;


        const dateLink = (new Date(dates[0])).getTime() + '-' + (new Date(dates[1])).getTime()

        return(
            <Link to={{pathname: '/stats/personal-stats/'+ discr + '/' + id + '/' + dateLink ,
                       socket  : socket
                      }}>
                <div className='card listCard'>
                    <div className='PersonsCard'>
                        <div className='rankContainer'>
                            <label className='label rank'>{rank}</label>
                        </div>
                        <div className='PersonInfo'>
                            <span className='name'>
                                <label className='label label-name'>{name} </label>
                            </span>
                            <div className='kpiInfo'>
                                <span className='KPI-number'>{DataHandlers.textDisplay(number1, '--')} </span>
                                <span className='KPI-text'  >{text1}   </span>
                                <span className='dot'       >·         </span>
                                <span className='KPI-number'>{DataHandlers.textDisplay(number2, '--')} </span>
                                <span className='KPI-text'  >{text2}   </span>
                                <span className='dot'       >·         </span>
                                <span className='KPI-number'>{DataHandlers.textDisplay(number3, '--')} </span>
                                <span className='KPI-text'  >{text3}   </span>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
    )}


}

export default PersonCard