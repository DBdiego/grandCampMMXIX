import React, { Component } from 'react'                         ;
import BackgroundImage      from './Images/Background.jpg'       ;
import Abraracourcix        from './Images/Abraracourcix.jpg'    ;
import Obelix               from './Images/Obelix.jpg'           ;
import Panoramix            from './Images/Panoramix.jpg'        ;
import Assurancetourix      from './Images/Assurancetourix.jpg'  ;
import Asterix              from './Images/Asterix.jpg'          ;
import Falbala              from './Images/Falbala.jpg'          ;
import Bonemine             from './Images/Bonemine.jpg'         ;
import Header               from '../General/Header.jsx'         ;
import '../Layer2.css';



class StaffBaladins extends Component {

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
                                <p className='textTitle'>{`Abraracourcix (Pan Pan)`}</p>
                            </div>

                            <div className='row'>
                                <div className='column1'>
                                    <img src={Abraracourcix} className = 'God Abraracourcix' alt='' />
                                </div>
                                <div className='column2'>
                                    <p className='text'>{`Tel un chef de village, Pan Pan veille sur notre grande ribambelle. Tout comme 
                                        Abraracourcix, il nous protègera de nos ennemis, les Romains.`
                                        }</p>
                                </div>
                            </div>
                        </div>



                        <div className={'textBox '+ section}>

                            <div className='row'>
                                <p className='textTitle'>{`Obelix (Jiminy)`}</p>
                            </div>

                            <div className='row'>
                                <div className='column1'>
                                    <img src={Obelix} className = 'God Obelix' alt='' />
                                </div>
                                <div className='column2'>
                                    <p className='text'>{`Jiminy, comme Obélix, est tombé dans la potion magique quand il était petit… C’est 
                                        pour cela qu’il est si grand et qu’il a autant de force.`
                                        }</p>
                                </div>
                            </div>
                        </div>



                        <div className={'textBox '+ section}>

                            <div className='row'>
                                <p className='textTitle'>{`Panoramix (Mushu)`}</p>
                            </div>

                            <div className='row'>
                                <div className='column1'>
                                    <img src={Panoramix} className = 'God Panoramix' alt='' />
                                </div>
                                <div className='column2'>
                                    <p className='text'>{`Mushu, notre infirmière attitrée, nous confectionnera de bonnes potions afin de pouvoir guérir 
                                        n’importe quel bobo ! Pour cela, elle a récupéré les recettes de notre ami Panoramix.`
                                        }</p>
                                </div>
                            </div>
                        </div>



                        <div className={'textBox '+ section}>

                            <div className='row'>
                                <p className='textTitle'>{`Assurancetourix (Figaro)`}</p>
                            </div>

                            <div className='row'>
                                <div className='column1'>
                                    <img src={Assurancetourix} className = 'God Assurancetourix' alt='' />
                                </div>
                                <div className='column2'>
                                    <p className='text'>{`Figaro, avec sa belle voix (😉), nous chantera des petites berceuses tous les jours. 
                                        Elle ne manquera pas de mettre également de l’ambiance pendant la journée, comme le fait Assurancetourix.`
                                        }</p>
                                </div>
                            </div>
                        </div>



                        <div className={'textBox '+ section}>

                            <div className='row'>
                                <p className='textTitle'>{`Asterix (Pongo)`}</p>
                            </div>

                            <div className='row'>
                                <div className='column1'>
                                    <img src={Asterix} className = 'God Asterix' alt='' />
                                </div>
                                <div className='column2'>
                                    <p className='text'>{`Pongo est aussi malicieux qu’Astérix. Il n’est jamais à court d’idées pour amuser les baladins.`
                                        }</p>
                                </div>
                            </div>
                            <div className='row'>

                            </div>
                        </div>




                        <div className={'textBox '+ section}>

                            <div className='row'>
                                <p className='textTitle'>{`Falbala (Polochon)`}</p>
                            </div>

                            <div className='row'>
                                <div className='column1'>
                                    <img src={Falbala} className = 'God Falbala' alt='' />
                                </div>
                                <div className='column2'>
                                    <p className='text'>{`Comme Falbala, Polochon est toujours là pour motiver les troupes. Elle sait leur remonter 
                                        le moral, à coup de câlins et gentillesses.`
                                        }</p>
                                </div>
                            </div>
                            <div className='row'>

                            </div>
                        </div>

                        <div className={'textBox '+ section}>

                            <div className='row'>
                                <p className='textTitle'>{`Bonemine (Nala)`}</p>
                            </div>

                            <div className='row'>
                                <div className='column1'>
                                    <img src={Bonemine} className = 'God Bonemine' alt='' />
                                </div>
                                <div className='column2'>
                                    <p className='text'>{`Telle Bonemine, Nala mène les troupes là où elle le désire. Pour cela, 
                                        elle a plus d’un tour dans son sac.`
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

export default StaffBaladins









