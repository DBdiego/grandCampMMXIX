import React, { Component } from 'react'                   ;
import BackgroundImage      from './Images/Background.jpg' ;
import Ourebi               from './Images/Ourebi.png'     ;
import Spitz                from './Images/Spitz.png'      ;
import Dorcas               from './Images/Dorcas.png'     ;
import Welsh                from './Images/Welsh.png'      ;
import Merione              from './Images/Merione.png'    ;
import Beira                from './Images/Beira.png'      ;
import Sloughi              from './Images/Sloughi.png'    ;
import Header               from '../General/Header.jsx'   ;
import '../Layer2.css';

class StaffGuides extends Component {

    render() {
        let splittedAddress = window.location.href.split('/');
        let section = splittedAddress[splittedAddress.length-2];
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
                                <p className='textTitle'>{`Ourébi (Olivia Grisard)`}</p>
                            </div>

                            <div className='row'>
                                <div className='column1'>
                                    <img src={Ourebi} className = 'God Ourebi' alt='' />
                                </div>
                                <div className='column2'>
                                    <p className='text'>{`Notre grande chef sur tous les fronts est actuellement en première année de master 
                                        en journalisme à Bruxelles. Chef depuis 5 ans, elle s’occupe de gérer tout l’administratif, de répondre 
                                        à vos emails, de la gestion du staff et des guides. N’hésitez pas si vous avez la moindre question pour 
                                        le camp à l’appeler au 0479 26 46 26 ou à envoyer un mail sur l’adresse guide`
                                        }</p>
                                </div>
                            </div>
                        </div>

                        <div className={'textBox '+ section}>

                            <div className='row'>
                                <p className='textTitle'>{`Spitz (Philipine de Moffarts)`}</p>
                            </div>

                            <div className='row'>
                                <div className='column1'>
                                    <img src={Spitz} className = 'God Spitz' alt='' />
                                </div>
                                <div className='column2'>
                                    <p className='text'>{`Spitz étudie la psychologie en première master à Louvain-la-Neuve. Sa bonne humeur nous garantit 
                                        une ambiance de folie pendant le camp. Elle s’est occupée des convocations plus originales les unes que les autres 
                                        pour les week-end et réunions durant l’année`
                                        }</p>
                                </div>
                            </div>
                            <div className='row'>

                            </div>
                        </div>

                        <div className={'textBox '+ section}>

                            <div className='row'>
                                <p className='textTitle'>{`Dorcas (Gladys de Hemptinne)`}</p>
                            </div>

                            <div className='row'>
                                <div className='column1'>
                                    <img src={Dorcas} className = 'God Dorcas' alt='' />
                                </div>
                                <div className='column2'>
                                    <p className='text'>{`ENFIN rentrée du Canada, on peut l’avouer elle nous a bien manqué. Notre infirmière préférée, 
                                        Dorcas, s’occupera de toutes vos petites blessures pendant le camp. Elle est actuellement en 3ème année infirmière 
                                        à Louvain-la-Neuve. N’oubliez pas que vous pouvez venir sans problème la trouver pendant le camp pour `
                                        }</p>
                                        
                                </div>
                            </div>
                        </div>



                        <div className={'textBox '+ section}>

                            <div className='row'>
                                <p className='textTitle'>{`Welsh (Eléonore d'Aspremont)`}</p>
                            </div>

                            <div className='row'>
                                <div className='column1'>
                                    <img src={Welsh} className = 'God Welsh' alt='' />
                                </div>
                                <div className='column2'>
                                    <p className='text'>{`Welsh est en deuxième année de communication à Louvain-la-Neuve. Grâce à son imagination 
                                        débordante et à ses jeux de folie pendant le camp, elle contribuera à vos plus beaux souvenirs et vos plus 
                                        grands fous rires.`
                                        }</p>

                                </div>
                            </div>
                        </div>



                        <div className={'textBox '+ section}>

                            <div className='row'>
                                <p className='textTitle'>{`Mérione (Alicia Limpens)`}</p>
                            </div>

                            <div className='row'>
                                <div className='column1'>
                                    <img src={Merione} className = 'God Merione' alt='' />
                                </div>
                                <div className='column2'>
                                    <p className='text'>{`Actuellement en première master à la Louvain School of Management, elle étude l’économie 
                                        pour vous permettre de passer le meilleur camp avec un budget limité. Cette année, elle autorisera les céréales 
                                        « cookies »  pour commencer la journée de la meilleure manière. Avec son instinct maternel venant surement des 
                                        louvettes, elle sera toujours à votre écoute et prête à vous redonner le sourire !`
                                        }</p>
                                </div>
                            </div>
                        </div>

                        <div className={'textBox '+ section}>

                            <div className='row'>
                                <p className='textTitle'>{`Beira (Eléonore Hendrix)`}</p>
                            </div>

                            <div className='row'>
                                <div className='column1'>
                                    <img src={Beira} className = 'God Beira' alt='' />
                                </div>
                                <div className='column2'>
                                    <p className='text'>{`Après avoir soigné les éléphants, Beira est revenue avec une motivation de 10000% en mettant 
                                        de la bonne humeur dans l’ensemble de la troupe. Elle vous fera rire aux éclats avec ses blagues autour de délicieux 
                                        marshmallow au feu. Elle est actuellement en troisième année d’économie et de gestion à Namur.`
                                        }</p>
                                </div>
                            </div>
                            <div className='row'>

                            </div>
                        </div>



                        <div className={'textBox '+ section}>

                            <div className='row'>
                                <p className='textTitle'>{`Sloughi (Delphine Agie)`}</p>
                            </div>

                            <div className='row'>
                                <div className='column1'>
                                    <img src={Sloughi} className = 'God Sloughi' alt='' />
                                </div>
                                <div className='column2'>
                                    <p className='text'>{`Malgré l’arrivée tardive pendant l’année de Sloughi, son organisation et sa bonne humeur va nous 
                                        permettre de passer un camp de folie. Revenant d’un stage au Canada, elle est actuellement en première master en 
                                        tant qu’ingénieur architecte. Cela promet des pilotis de folie ! N’hésitez pas à lui demander conseil !`
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

export default StaffGuides









