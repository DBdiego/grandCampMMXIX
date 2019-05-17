import React, { Component } from 'react' ;
import BackgroundImage      from './Images/Background.jpg'; //'./Images/Background_History.jpg' ;
import logo                 from './logo.svg'            ;
import Header               from '../General/Header.jsx' ;
import '../Layer2.css';

class History extends Component {

    render() {
        let splittedAddress = window.location.href.split('/');
        let section = splittedAddress[splittedAddress.length-2];
        let componentsToRender = (
                <div className='History'>
                    <Header section={section} logo={logo}/>
                    <div className={'Background'}>
                        <img src={BackgroundImage} className = 'BackgroundImage' alt='' />
                    </div>
                    <div className = 'container'>
                        <div className={'textBox '+ section}>
                            <p className='textTitle'>{`PAR TOUTATIS , PAS ENCOOOORE !`}</p>

                            <p className='text'>{`"Nous sommes en 50 après Jésus Christ. Toute la Gaule est occupée par les Romains ... 
                                Toute …? Non! Un village peuplé d'irréductibles Gaulois résiste encore et toujours à l'envahisseur. Et 
                                la vie n'est pas facile pour les garnisons de légionnaires romains des camps retranchés de Babaorum, 
                                Aquarium, Laudanum et Petitbonum".`
                                }</p>
                           
                            <p className='text'>{`Au 8`}<sup>eme</sup> {`Vous l’avez compris, le cri perçant que nous venons 
                                d’entendre a surgi du village d’Astérix et Obélix.`
                                }</p>


                            <p className='text'>{`Nos deux copains sont désespérés. Un espion romain a infiltré le village et volé 
                                la recette de la potion magique.`
                                }</p>

                            <p className='text'>{`Panoramix est dans tous ses états. Il a mis de décennies à élaborer cette recette magique !`
                                }</p>


                            <p className='text'>{`Abraracourcix n’en mène pas large non plus : cette potion magique, c’est leur meilleure arme 
                                contre Jules César et les Romains. Sans elle, comment vont-ils résister à l’envahisseur ?`
                                }</p>

                            <p className='text'>{`Astérix et Obélix se concertent:`
                                }</p>

                            <p className='text'>{`« Il ne reste qu’une solution » dit Obélix. `
                                }</p>

                            <p className='text'>{`« Oui, il est temps d’agir » répond Astérix.`
                                }</p>

                            <p className='text'>{`« Mais même en réunissant tout le village, nous n’y arriverons pas… » continue Obélix.`
                                }</p>

                            <p className='text'>{` Astérix se dresse alors : « Attends, j’ai une idée ! »`
                                }</p>

                            <p className='text'>{`Il prend sa plus belle plume et commence à écrire une lettre pour appeler Achil, Aliénor, 
                                Antoine, Charlotte C., Charlotte D., Charly, Elinor, Emeric, Enguerrand, Eugénie, Gaspard, Gatien, Grégoire, 
                                Héloïse, Henri, Hermine, Julia, Juliette, Léopold, Loïs, Loup, Luce, Manon, Marie, Marine, Mélusine, Robin F., 
                                Robin G., Robin B., Roxane, Siméon, Sophie et Valentine afin d’obtenir leur aide.`
                                }</p>

                            <p className='text'>{`En effet, il est persuadé que, tous ensemble, ils pourront protéger le village des irréductibles 
                                Gaulois et récupérer la recette de la potion magique.`
                                }</p>

                            <p className='text'>{`Alors, prêts à relever ce défi ?`
                                }</p>

                        </div>
                    </div>
                </div>
            );
        return componentsToRender

    };
};

export default History









