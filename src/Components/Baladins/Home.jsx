import React, { Component } from 'react'                   ;
import BackgroundImage      from './Images/Background.jpg' ;
import Header               from '../General/Header.jsx'   ;
import '../Layer2.css';



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

                    <Header 
                        section = {section}
                    />
                    
                    <div className={'Background'}>
                        <img src={BackgroundImage} className = 'BackgroundImage' alt='' />
                    </div>
                    
                    <div className = 'container'>
                        <div className={'textBox '+ section}>
                            <p className='textTitle'>{`Bienvenus Villagois Gaulois !!!`}</p>

                            <p className='text'>{`Nous voilà bientôt au grand camp ! Pour certains d’entre vous, ça va être une grande première ! 
                                Pas d’inquiétude, le staff et les autres baladins seront là pour vous épauler et rendre cette expérience inoubliable.`
                                }</p>

                            <p className='text'>{`Durant cette semaine de folie, nous aurons besoin de votre aide. Nous avons en effet reçu un appel 
                                de détresse. Et oui, il y a quelques semaines, nous avons reçu une lettre de deux bons amis. Ils se sont encore fourrés 
                                dans une mauvaise situation. Dans cette lettre, ils demandent l’aide de tous les baladins sans exception pour 
                                qu’ensemble, nous résolvions leur problème.`
                                }</p>

                            <p className='text'>{`C’est pourquoi, nous vous attendons en pleine forme et remplis d’énergie pour attaquer ce camp 
                                qui s’annonce extraordinaire !`
                                }</p>

                            <p className='signature'>{`Le Staff Baladins`}</p>
                            <p className='names'>
                                Pan-Pan 
                                &nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp;
                                Jiminy
                                &nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp;
                                Mushu
                                &nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp;
                                Figaro
                                &nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp;
                                Pongo
                                &nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp;
                                Polochon
                                &nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp;
                                Nala</p>

                        </div>

                        <div className={'textBox '+ section}>
                            <p className='textTitle'>{`PS: Le Grand Camp, C'est Quoi?`}</p>

                            <p className='text'>{`Le camp est le grand final, les baladins et les animateurs l’attendent avec impatience. 
                                Plein d’aventures et de découvertes sont en perspective…`
                                }</p>

                            <p className='text'>{`Des activités en tous genres`
                                }</p>

                            <p className='text'>{`Des grands jeux comme tu n’en as jamais vu`
                                }</p>

                            <p className='text'>{`Le hike : une grande balade avec un moment de réflexion`
                                }</p>

                            <p className='text'>{`Et des chouettes veillées`
                                }</p>

                            <p className='text'>{`Le camp, c’est bien entendu l’occasion de mettre en pratique les valeurs apprises pendant l’année 
                                telles que le respect, le partage, … Mais aussi de laisser sur le côté les consoles et autres jeux vidéo et de prendre 
                                un bon bol d’air. `
                                }</p>

                        </div>
                    </div>
                </div>
            );
        return componentsToRender

    };
};

export default Home









