import React, { Component } from 'react'                      ;
import BackgroundImage      from './Images/Background.jpg'    ; 
import Header               from '../General/Header.jsx'      ;
import InfoGeneral          from '../General/InfoGeneral.jsx' ;
import '../Layer2.css';

class Info extends Component {

    render() {
        
        let splittedAddress = window.location.href.split('/');
        let section = '';
        if (splittedAddress[splittedAddress.length -1] === ''){
            section = splittedAddress[splittedAddress.length-3];
        }else{
            section = splittedAddress[splittedAddress.length-2];
        };

        window.scrollTo(0, 0);

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









