import React, { Component } from 'react'                   ;
import BackgroundImage      from './Images/Background.jpg' ;
import Header               from '../General/Header.jsx'   ;
import '../Layer2.css';



///SCOUTS///
class Home extends Component {

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
                <div className='Home'>
                    <Header section={section}/>
                    <div className={'Background'}>
                        <img src={BackgroundImage} className = 'BackgroundImage' alt='' />
                    </div>
                    <div className = 'container containerScout'>
                        <div className={'textBox '+ section}>
                            <p className='textTitle'>{`Speculator, Para Bellum !`}</p>

                            <p className='text'>{`Chères Scouts, cette année, nous vous emmenons dans les grands empires 
                                de la méditerranée antique. Mais le vôtre n’est autre que celui du glorieux empire romains.`}</p>
                           
                            <p className='text'>{`Vous trouverez si dessous l’histoire de vos cités ainsi que l’avènement 
                                de leur grandeur. Imprégnez-vous de leurs légendes, car durant ce grand camp, ce sera à 
                                vous d’ajouter une nouvelle page à leurs mémoires.`
                                }</p>

                            <p className='text'>{`Vous aurez aussi l’occasion d’en apprendre sur les divinités qui seront 
                                incarnés par votre staff préféré.`
                                }</p>

                            <p className='text'>{`Au-delà de vos querelles à l’intérieur de l’empire vous aurez aussi à défier 
                                les diverses nations qui bordent vos frontières.`
                                }</p>

                            <p className='text'>{`Consuls, gouverneurs et tribuns, montrez-vous digne de vos dieux !`
                                }</p>


                            <p className='signature'>{`Ton Staff`}</p>
                            <p className='names'>
                                Sika 
                                &nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp;
                                Kodiak
                                &nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp;
                                Wipsy
                                &nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp;
                                Moufflon
                                &nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp;
                                Goral</p>
                        </div>
                    </div>
                </div>
            );
        return componentsToRender

    };
};

export default Home









