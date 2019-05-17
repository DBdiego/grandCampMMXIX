import React, { Component } from 'react'                         ;
import BackgroundImage      from './Images/Background.jpg'       ;
import Tyr                  from './Images/Tyr.jpg'              ;
import Odin                 from './Images/Odin.jpg'             ;
import Loki                 from './Images/Loki.jpg'             ;
import Thor                 from './Images/Thor.jpg'             ;
import Magni                from './Images/Magni.jpg'            ;
import Mimir                from './Images/Mimir.jpg'            ;
import Header               from '../General/Header.jsx'         ;
import logo                 from './logo.svg' ;
import '../Layer2.css';

class Staff extends Component {

    render() {
        let splittedAddress = window.location.href.split('/');
        let section = splittedAddress[splittedAddress.length-2];
        let componentsToRender = (
                <div className='Staff'>
                    <Header section={section} logo={logo}/>
                    <div className={'Background'}>
                        <img src={BackgroundImage} className = 'BackgroundImage' alt='' />
                    </div>

                    <div className = 'container'>

                        <div className={'textBox '+ section}>

                            <div className='row'>
                                <p className='textTitle'>{`Akéla`}</p>
                            </div>

                            <div className='row'>
                                <div className='column1'>
                                    <img src={Odin} className = 'God Odin' alt='' />
                                </div>
                                <div className='column2'>
                                    <p className='text'>{`Grande impératrice de Persépolis. Elle dirige son empire d’une main de velours dans un gant 
                                        de fer. Rien ne l’arrêtera dans la conquête des territoires de la Méditerranée, elle n’a d’empathie que pour 
                                        les siens et est prête à tout pour défendre leur cause. Elle sait également qu’elle peut compter sur ceux qui 
                                        l’aident à mener son pays vers de grandes victoires. `
                                        }</p>
                                </div>
                            </div>
                        </div>



                        <div className={'textBox '+ section}>

                            <div className='row'>
                                <p className='textTitle'>{`Rikki`}</p>
                            </div>

                            <div className='row'>
                                <div className='column1'>
                                    <img src={Thor} className = 'God Thor' alt='' />
                                </div>
                                <div className='column2'>
                                    <p className='text'>{`La Dame D’Honneur de l’Impératrice. Elle est sa plus fidèle amie. Elle l’aide dans ses 
                                        moments de solitude et est une confidente hors pair. Elle est la seule à connaitre tous ses secrets. 
                                        Elle est donc très précieuse pour l’impératrice. Elle porte le bonheur du peuple très à cœur et incite 
                                        toujours cette dernière à faire de même dans ses choix.`
                                        }</p>
                                </div>
                            </div>
                        </div>



                        <div className={'textBox '+ section}>

                            <div className='row'>
                                <p className='textTitle'>{`Won-Tola`}</p>
                            </div>

                            <div className='row'>
                                <div className='column1'>
                                    <img src={Loki} className = 'God Loki' alt='' />
                                </div>
                                <div className='column2'>
                                    <p className='text'>{`Le Sâge. Son vieil âge et ses nombreuses expériences font de lui un atout de taille pour 
                                        l’impératrice. En effet, personne n’est mieux placé que lui pour calmer la monarque lorsque celle-ci s’emballe. 
                                        Ses paroles sont d’or et à ne pas prendre à la légère. Quand il parle, en général, tout le monde se tait. `
                                        }</p>
                                </div>
                            </div>
                        </div>



                        <div className={'textBox '+ section}>

                            <div className='row'>
                                <p className='textTitle'>{`Hati`}</p>
                            </div>

                            <div className='row'>
                                <div className='column1'>
                                    <img src={Mimir} className = 'God Mimir' alt='' />
                                </div>
                                <div className='column2'>
                                    <p className='text'>{`Le Conseiller. Il tient un fonction de gouvernement mais également d’administration. C’est 
                                        notamment grâce à lui que la Perse est si bien dirigée. Il a une vision des choses qui fait qu’il a toujours 
                                        10 pas d’avances sur les autres ce qui lui permet de trouver solution à tout problème. Il a permis d’éviter 
                                        le chao général à de nombreuses reprises.`
                                        }</p>
                                </div>
                            </div>
                        </div>



                        <div className={'textBox '+ section}>

                            <div className='row'>
                                <p className='textTitle'>{`Rama`}</p>
                            </div>

                            <div className='row'>
                                <div className='column1'>
                                    <img src={Tyr} className = 'God Tyr' alt='' />
                                </div>
                                <div className='column2'>
                                    <p className='text'>{`Chevalier de la garde impériale. Pas juste un chevalier parmi les autres, attention, il a prouvé sa 
                                        bravoure à de nombreuses reprises ce qui lui a valu les félicitation et les remerciements de l’impératrice à plusieurs 
                                        reprises ! Ses compagnons chevaliers l’estiment beaucoup et les enfants dans les villages entiers de la Perse veulent 
                                        être comme lui.`
                                        }</p>
                                </div>
                            </div>
                            <div className='row'>

                            </div>
                        </div>



                        <div className={'textBox '+ section}>

                            <div className='row'>
                                <p className='textTitle'>{`Kaa`}</p>
                            </div>

                            <div className='row'>
                                <div className='column1'>
                                    <img src={Magni} className = 'God Magni' alt='' />
                                </div>
                                <div className='column2'>
                                    <p className='text'>{`Le comptable. Si vous saviez à quel point l’Impératrice est dépensière, vous vous demanderiez comment 
                                        l’Empire tient encore debout ! Et bien c’est grâce à lui. En effet, il gère les chiffres d’une manière inhumaine. 
                                        De plus, il entretient des relations excellentes avec toutes les banques de l’Empire et il parvient toujours à trouver 
                                        des fonds, comme par magie. `
                                        }</p>
                                </div>
                            </div>
                            <div className='row'>

                            </div>
                        </div>



                        <div className={'textBox '+ section}>

                            <div className='row'>
                                <p className='textTitle'>{`Kala Nag`}</p>
                            </div>

                            <div className='row'>
                                <div className='column1'>
                                    <img src={Magni} className = 'God Magni' alt='' />
                                </div>
                                <div className='column2'>
                                    <p className='text'>{`Le fou. Même dans ses moments de plus grande tristesse l’impératrice à toujours regagné le sourire 
                                        grâce à lui. Son humour mais surtout ses pitreries ont plus d’une fois épaté la galerie. Il est prêt à tout juste pour 
                                        voir un sourire se dessiner sur les visages qui l’entourent. `
                                        }</p>
                                </div>
                            </div>
                            <div className='row'>

                            </div>
                        </div>



                        <div className={'textBox '+ section}>

                            <div className='row'>
                                <p className='textTitle'>{`Chill`}</p>
                            </div>

                            <div className='row'>
                                <div className='column1'>
                                    <img src={Magni} className = 'God Magni' alt='' />
                                </div>
                                <div className='column2'>
                                    <p className='text'>{`Chef de la garde Impériale. Grâce à ses magnifiques stratégies et ses capacités de combats, il est 
                                        parvenu à s’élever de vendeur de poisson à un rang qu’il n’osait même pas imaginer. Depuis qu’il est tout petit, il 
                                        regarde les soldats de la garde marcher dans les rues en les enviant, maintenant qu’il en est un, il prend son rôle 
                                        très à cœur et donne tout pour son Empire. De plus, il n’oublie pas d’où il vient et est très proche du peuple. `
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

export default Staff









