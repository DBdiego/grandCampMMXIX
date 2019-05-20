import React, { Component } from 'react'                      ;
import BackgroundImage      from './Images/Background.jpg'    ; 
import Header               from '../General/Header.jsx'      ;
import InfoGeneral          from '../General/InfoGeneral.jsx' ;
import '../Layer2.css';

class Info extends Component {

    render() {
        let splittedAddress = window.location.href.split('/');
        let section = splittedAddress[splittedAddress.length-2];

        let componentsToRender = (
                <div className='Info'>
                    <Header 
                        section = {section}
                    />


                    <div className={'Background'}>
                        <img src={BackgroundImage} className = 'BackgroundImage' alt='' />
                    </div>


                    <InfoGeneral 
                        section = {section}
                    />
                </div>
            );
        return componentsToRender

    };
};

export default Info









