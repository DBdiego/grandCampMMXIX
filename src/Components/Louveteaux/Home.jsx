import React, { Component } from 'react'                        ;
import BackgroundImage      from './Images/Background.jpg'; //'./Images/Background_Home.jpg' ;
import Header               from '../General/Header.jsx'        ;
import '../Layer2.css';


/*
                    <div className={'Background'}>
                        <img src={BackgroundImage} className = 'BackgroundImage' alt='' />
                    </div>
*/




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
                            <p className='textTitle'>{`سلام à toi, guérier Perse!!!`}</p>

                            <p className='text'>{`L'apogée de la Perse antique est représentée par la dynastie 
                                achéménide, dont la grande conquérante Akéla Louveteaux et ses fidèles compagnons 
                                ont étendu le territoire jusqu'en Inde. C’est un empire extrêmement convoité par tous 
                                les pays voisins qui envient la richesse de ses sols, son armée indomptable, l’art de 
                                ses bâtiments et surtout le patriotisme de ses habitants. Jusqu’à ce jour, personne 
                                n’est parvenu à conquérir ce pays et ce n’est pas demain la veille qu’on verra cela se produire !`
                                }</p>

                            <p className='signature'>{`Ton Staff`}</p>
                            <p className='names'>
                                Akéla 
                                &nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;
                                Rikki
                                &nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;
                                Won-Tola
                                &nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;
                                Hati
                                &nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;
                                Rama
                                &nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;
                                Kaa
                                &nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;
                                Kala Nag
                                &nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;
                                Chill
                                </p>

                        </div>
                    </div>
                </div>
            );
        return componentsToRender

    };
};

export default Home









