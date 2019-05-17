import React, { Component } from 'react'                        ;
import BackgroundImage      from './Images/Background.jpg'; //'./Images/Background_Home.jpg' ;
import Header               from '../General/Header.jsx'        ;
import '../Layer2.css';


/*
                    <div className={'Background'}>
                        <img src={BackgroundImage} className = 'BackgroundImage' alt='' />
                    </div>
*/


////GUIDES///

class Home extends Component {

    render() {
        let splittedAddress = window.location.href.split('/');
        let section = splittedAddress[splittedAddress.length-2];
        let componentsToRender = (
                <div className='Home'>
                    <Header section={section}/>
                    <div className={'Background'}>
                        <img src={BackgroundImage} className = 'BackgroundImage' alt='' />
                    </div>
                    <div className = 'container'>
                        <div className={'textBox '+ section}>
                            <p className='textTitle'>{`Chers Parents, Chères Guides,`}</p>

                            <p className='text'>{`C'est avec grand plaisir que nous vous dévoilons enfin les informations tant 
                                attendues quant au grand camp ! `}</p>
                           
                            <p className='text'>{`Cette année sera un peu particulière car, comme vous le savez, nous passerons 
                                un camp d'unité. Baladins, louvettes, louveteaux, scouts et guides seront rassemblés ! 
                                Pas d'inquiétudes, cela ne change pas grand chose pour vous. Ce sera du fun en plus pour 
                                les guides et la découverte des autres sections pour tous.`
                                }</p>

                            <p className='text'>{`Le thème de ce grand camp d'unité est: "L'Antiquité en Méditerranée". La section 
                                des guides sera le peuple égyptien. A chaque patrouille sa déesse ! Amour, guerre, nature, mers, natalité, 
                                surprenez-nous ! Aménagez vos pilotis des plus belles décorations égyptiennes et déguisez-vous selon votre 
                                thème, nous comptons sur vous pour nous emmener en Egypte durant ces 15 jours.`
                                }</p>

                            <p className='text'>{`Nous nous réjouissons de vous retrouver en pleine forme !`
                                }</p>

                            <p className='text'>{`Chers parents, nous vous remercions une fois de plus pour la confiance que vous nous 
                                accordez. Nous restons à votre entière disposition pour toutes questions`
                            }</p>
                            <p className='signature'>{`Le Staff Guides 39`}<sup>ième</sup>{` `}</p>
                        </div>
                    </div>
                </div>
            );
        return componentsToRender

    };
};

export default Home









