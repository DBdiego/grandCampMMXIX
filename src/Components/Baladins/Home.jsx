import React, { Component } from 'react'                   ;
import BackgroundImage      from './Images/Background.jpg' ;
import Header               from '../General/Header.jsx'   ;
import '../Layer2.css';



class Home extends Component {

    render() {
        let splittedAddress = window.location.href.split('/');
        let section = splittedAddress[splittedAddress.length-2];
        let componentsToRender = (
                <div className='Home'>

                    <Header 
                        section = {section}
                    />
                    
                    <div className={'Background'}>
                        <img src={BackgroundImage} className = 'BackgroundImage' alt='' />
                    </div>
                    
                    <div className = 'container'>
                        <div className={'textBox '+ section}>
                            <p className='textTitle'>{`Scouts de la 39ème, Skàl !!!`}</p>

                            <p className='text'>{`Les Vikings : une terre, une culture, un monde à part !`}</p>
                           
                            <p className='text'>{` Ces guerriers à la férocité légendaire, qui ont fait craindre 
                                l’Europe jusqu’aux confins de la mer Egée. Leurs exploits sont tels qu’ils ont 
                                traversé les siècles et les traverseront encore.`
                                }</p>

                            <p className='text'>{`Jarls et guerriers, vous trouverez ici quelques-unes des nombreuses 
                                légendes engendrées par cette civilisation mythique. Vous aurez également 
                                l’occasion d’en apprendre sur leur culture, leur religion leurs traditions 
                                mais surtout, sur la personnalité légendaire que vous représenterez, afin de 
                                vous imprégner des valeurs qu’ils défendaient et ainsi gagner votre place au Valhalla.`
                                }</p>

                            <p className='text'>{`Alors partez explorer ce site, inculquez-vous de ce que vous y trouverez, 
                                et devenez des vrais Vikings. Et quand ce sera fait, préparez votre paquetage, armez votre 
                                drakkar, car il vous faudra partir pour une grande et belle expédition qui sera à l’image de 
                                celle de nos ancêtres, et dont vous en reviendrez changés et émerveillés.`
                                }</p>

                            <p className='signature'>{`Ton Staff`}</p>
                            <p className='names'>
                                Sika 
                                &nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp;
                                Kodiak
                                &nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp;
                                Margay
                                &nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp;
                                Goral
                                &nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp;
                                Lycaon
                                &nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp;
                                Gibbon</p>

                        </div>
                    </div>
                </div>
            );
        return componentsToRender

    };
};

export default Home









