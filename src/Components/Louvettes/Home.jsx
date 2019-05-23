import React, { Component } from 'react'                   ;
import BackgroundImage      from './Images/Background.jpg' ;
import Header               from '../General/Header.jsx'   ;
import '../Layer2.css';


/////LOUVETEAUX////////

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
                        section={section}
                    />
                    
                    <div className={'Background'}>
                        <img src={BackgroundImage} className = 'BackgroundImage' alt='' />
                    </div>
                    
                    <div className = 'container'>
                        <div className={'textBox '+ section}>
                            <p className='textTitle'>{`Bienvenue à vous!`}</p>

                            <p className='text'>{`Chères Athéniennes, Spartiates, philosophes, déesses et créatures 
                                de la mythologie grecque antique,`}</p>
                           
                            <p className='text'>{` Nous sommes fiers et avons l'immense plaisir de vous inviter sur 
                                nos terres et dans nos cités guerrières ou démocrates. Si toi, jeune déesse de la section 
                                louvettes de la 39ème Rivière, te sens à la hauteur de graver ta légende et d'entrer dans 
                                les mythes et les chansons grecques, ce camp est fait pour toi !!! Sans nul doute, vaincre le 
                                minotaure est un défi de taille. `
                                }</p>

                            <p className='text'>{`Cependant, tu en es capable et cette année d'autres aventures civilisationnelles 
                                seront au rendez-vous. En effet, nous avons la joie de te convier à ton tout premier camp d'unité. 
                                En moins de 15 jours, nous retracerons l'histoire des derniers millénaires. Te sachant observatrice, 
                                tu auras la chance de rencontrer des Égyptiens, des Perses, des Gaulois et des Romains. Tu l'auras 
                                compris, le thème de ce grand camp d'unité sera « Le choc des civilisations ». Nous représenterons 
                                la Grèce Antique et chaque sizaine portera les couleurs d'une célèbre cité grecque`
                                }</p>

                            <p className='signature'>{`Ton Staff`}</p>
                            <p className='names'>
                                Akéla 
                                &nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp;
                                Rikki
                                &nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp;
                                Hathi
                                &nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp;
                                Baloo
                                &nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp;
                                Toomaï
                                &nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp;
                                Won-tolla
                                &nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp;
                                Raksha
                                &nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp;
                                Ferao
                                &nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp;
                                Kaa
                                </p>

                        </div>
                    </div>
                </div>
            );
        return componentsToRender

    };
};

export default Home









