import React, { Component } from 'react'                   ;
import BackgroundImage      from './Images/Background.jpg' ;
import Jupiter              from './Images/Jupyter.jpg'    ;
import Phebus               from './Images/Phebus.jpg'     ;
import Pluton               from './Images/Apollon.jpg'    ;
import Neptune              from './Images/Neptune.jpg'    ;
import Mars                 from './Images/Mars.jpg'       ;
import Header               from '../General/Header.jsx'   ;
import '../Layer2.css';

class StaffScout extends Component {

    componentDitMount(){
        
    }

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
                <div className='Staff'>

                    <Header 
                        section = {section}
                    />

                    <div className={'Background'}>
                        <img src={BackgroundImage} className = 'BackgroundImage' alt='' />
                    </div>

                    <div className = 'container'>

                        <div className={'textBox '+ section}>

                            <div className='row'>
                                <p className='textTitle'>{`Jupiter (Sika)`}</p>
                            </div>

                            <div className='row'>
                                <div className='column1'>
                                    <img src={Jupiter} className = 'God Jupiter' alt='' />
                                </div>
                                <div className='column2'>
                                    <p className='text'>{`Jupiter gouverne la terre et le ciel. Il est le dieu des dieux dans la mythologie romaine.
                                        Armé de sa foudre, il est connu que son tempérament est à l'origine des orages et des tempêtes. Jupiter est le père
                                        de Mars et est le frère de Neptune et de Pluton. Jupiter, était bien connu comme un père de la polygamie.`
                                        }</p>
                                </div>
                            </div>
                        </div>



                        <div className={'textBox '+ section}>

                            <div className='row'>
                                <p className='textTitle'>{`Phebus (Wipsy)`}</p>
                            </div>

                            <div className='row'>
                                <div className='column1'>
                                    <img src={Phebus} className = 'God Phebus' alt='' />
                                </div>
                                <div className='column2'>
                                    <p className='text'>{``
                                        }</p>
                                </div>
                            </div>
                        </div>



                        <div className={'textBox '+ section}>

                            <div className='row'>
                                <p className='textTitle'>{`Pluton (Kodiak)`}</p>
                            </div>

                            <div className='row'>
                                <div className='column1'>
                                    <img src={Pluton} className = 'God Pluton' alt='' />
                                </div>
                                <div className='column2'>
                                    <p className='text'>{`Pluton est le dieu des Enfers. Il est le frère de Jupiter et de Neptune. Mais il est également le dieu 
                                        invoqué lors des moissons, du fait que sa femme, Proserpine, commande les saisons. C’est pour cela qu’il est souvent 
                                        représenté avec une corne d’abondance.`
                                        }</p>

                                    <p className='text'>{`Pluton, dieu du monde sous-terrain, est donc le dieu de ce qui trouve sous terre, ce qui fait aussi 
                                        de lui le dieu des mines.`
                                        }</p>

                                    <p className='text'>{`Accompagné de son chien à 3 tètes, Cerbère, gère les enfers. Ceux-ci sont divisés en 2 principales 
                                        régions. D’un côté le Tartare, où vont les âmes jugées mauvaises, et les Champs-Élysées, lieu de paix et de délice 
                                        où vont les âmes justes. Et oui, dans la mythologie romaine, le paradis se trouve aux enfers.`
                                        }</p>
                                </div>
                            </div>
                        </div>



                        <div className={'textBox '+ section}>

                            <div className='row'>
                                <p className='textTitle'>{`Neptune (Moufflon)`}</p>
                            </div>

                            <div className='row'>
                                <div className='column1'>
                                    <img src={Neptune} className = 'God Neptune' alt='' />
                                </div>
                                <div className='column2'>
                                    <p className='text'>{``
                                        }</p>
                                </div>
                            </div>
                        </div>



                        <div className={'textBox '+ section}>

                            <div className='row'>
                                <p className='textTitle'>{`Mars (Goral)`}</p>
                            </div>

                            <div className='row'>
                                <div className='column1'>
                                    <img src={Mars} className = 'God Mars' alt='' />
                                </div>
                                <div className='column2'>
                                    <p className='text'>{``
                                        }</p>
                                </div>
                            </div>
                            <div className='row'>

                            </div>
                        </div>

                    </div>
                </div>
            );
        return componentsToRender

    };
};

export default StaffScout









