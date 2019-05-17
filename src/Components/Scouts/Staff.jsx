import React, { Component } from 'react'                         ;
import BackgroundImage      from './Images/Background.jpg'; //'./Images/Background_Staff.jpg' ;
import Tyr                  from './Images/Tyr.jpg'              ;
import Odin                 from './Images/Odin.jpg'             ;
import Loki                 from './Images/Loki.jpg'             ;
import Thor                 from './Images/Thor.jpg'             ;
import Magni                from './Images/Magni.jpg'            ;
import Mimir                from './Images/Mimir.jpg'            ;
import Header               from '../General/Header.jsx'         ;
import logo                 from './logo.svg'            ;
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
                                <p className='textTitle'>{`Odin (Margay)`}</p>
                            </div>

                            <div className='row'>
                                <div className='column1'>
                                    <img src={Odin} className = 'God Odin' alt='' />
                                </div>
                                <div className='column2'>
                                    <p className='text'>{`Souvent représenté comme un vieillard vouté, mal fagoté et borgne, Odin ne paye 
                                        pas toujours de mine. Pourtant, le juger à son apparence serait une erreur. En effet, ce « vieillard » 
                                        n’est rien de moins que le père de toute choses, hommes comme Dieux, et l’architecte du monde tel que 
                                        nous le connaissons. Chevauchant Sleipnir, son cheval à 8 pattes, et arborant Draupnir et Gungnir, 
                                        son anneau et sa lance magique, Odin règne sur Asgard, le domaine des Dieux. Odin est toujours accompagné 
                                        de ses deux corbeaux Hugin et Munin qui, en bonnes poucaves, le renseignent sur ce qu’il se passe dans les 
                                        différents mondes. `
                                        }</p>

                                    <p className='text'>{`En plus de son rôle de « Dieu des dieux », Odin cumule aussi quelques autres casquettes. 
                                        Il est dieu de la victoire, de la sagesse, de la fureur, de l’inspiration poétique, de la sorcellerie… Bref, 
                                        vous l’aurez compris, le gars est très fort et là-haut c’est lui commande.`
                                        }</p>
                                </div>
                            </div>
                        </div>



                        <div className={'textBox '+ section}>

                            <div className='row'>
                                <p className='textTitle'>{`Thor (Kodiak)`}</p>
                            </div>

                            <div className='row'>
                                <div className='column1'>
                                    <img src={Thor} className = 'God Thor' alt='' />
                                </div>
                                <div className='column2'>
                                    <p className='text'>{`Thor est probablement le dieu le plus connu de la mythologie scandinave, avec son 
                                        légendaire marteau Mjollnir (« le destructeur » en vieux nordique), et sa ceinture de force Megingjord 
                                        (« celui qui donne la Force »). Il est l’un des plus puissants des dieux guerriers. Divinité de la foudre 
                                        et du tonnerre, il symbolise également la force, la valeur, l’agilité et la victoire. En tant que dieu 
                                        de l’orage, il apporte aussi la pluie, ce qui fait de lui la divinité lié à la fertilité.`
                                        }</p>
                                        
                                    <p className='text'>{`Thor est le fils d’Odin et de Jord (déesse de la terre) Sa principale fonction est de 
                                        défendre Midgard (la terre des hommes) ainsi que les dieux face à la menace des géants, ces grandes 
                                        créatures qui n’ont de cesse de détruire Asgard et le monde des humains. A l’aide de son char, il sillonne 
                                        entre terre et ciel pour assurer la protection des êtres dont il a la garde.`
                                        }</p>
                                </div>
                            </div>
                        </div>



                        <div className={'textBox '+ section}>

                            <div className='row'>
                                <p className='textTitle'>{`Loki (Lycaon)`}</p>
                            </div>

                            <div className='row'>
                                <div className='column1'>
                                    <img src={Loki} className = 'God Loki' alt='' />
                                </div>
                                <div className='column2'>
                                    <p className='text'>{`Loki est connu comme le dieu fourbe, même si ce n’est pas un dieu. Il s’agit en réalité d’un 
                                        Jötunn, une espèce de géant.`
                                        }</p>

                                    <p className='text'>{`Loki est le fils des géants, Farbauti et Laufey, il a aussi deux frères Helblinde et Býleistr. 
                                        Loki est la mère de Sleipnir (oui la mère, il a encore réussi à tomber enceinte en se transformant en femme). 
                                        En plus de son mariage avec Sigyn, Loki a également été marié à Angrboda, une géante. Avec elle, ils ont eu 
                                        trois enfants, Hel, Fenrir Wolf, et le Serpent Midgard.`
                                        }</p>

                                    <p className='text'>{`Loki n'est pas mauvais, il n'est pas bon. Tout ce qui l’intéresse, c’est créer des ennuis 
                                        à tout le monde et tout particulièrement aux dieux et déesses d'Asgard. Loki est à la fois rusé et intelligent et 
                                        il arrive toujours avec de nouvelles idées pour agacer et amener les gens dans l'embarras le plus total. Après 
                                        avoir amené quelqu'un en difficulté avec ses farces, il les sauve souvent pour passer pour le héros du jour.`
                                        }</p>

                                    <p className='text'>{`Loki a un don, celui de se métamorphoser en presque n'importe quel être vivant. Il utilise 
                                        cette compétence très souvent pour se moquer des gens évidemment. La plupart du temps, il apparaît sous la 
                                        forme d'un saumon, une jument, un phoque, une mouche, et parfois aussi une femme âgée.`
                                        }</p>
                                </div>
                            </div>
                        </div>



                        <div className={'textBox '+ section}>

                            <div className='row'>
                                <p className='textTitle'>{`Mimir (Sika)`}</p>
                            </div>

                            <div className='row'>
                                <div className='column1'>
                                    <img src={Mimir} className = 'God Mimir' alt='' />
                                </div>
                                <div className='column2'>
                                    <p className='text'>{`Mimir est le dieu de la Sagesse, il est doté d’une grande intelligence et d’un savoir 
                                        incommensurable. Il est le gardien de Mimisbrunn (La « source de Mimir ») source qui renferme la sagesse et 
                                        la connaissance, dans le Jotunheim sous une des racines d’Yggdrasil, l’Arbre du Monde. Il est également l’un 
                                        des principaux conseillers d’Odin.`
                                        }</p>

                                    <p className='text'>{`La légende raconte qu’Odin, qui venait de créer le monde, s’en alla voir Mimir afin de lui 
                                        demander une gorgé de la source, et ainsi obtenir la sagesse nécessaire pour régner sur la terre qu’il avait 
                                        façonné.  Mimir lui rétorqua qu’un privilège pareil devait se mériter, et que même le grand Odin ne pouvait en 
                                        obtenir sur simple demande. Il exigea alors un sacrifice qui marquerait le dieu des dieux à jamais. Alors Odin, 
                                        décida de sacrifier son œil droit, séquelle qu’il devra garder pour l’éternité sans avoir le droit de le régénérer, 
                                        ous peine de perdre sa sagesse à jamais.`
                                        }</p>
                                </div>
                            </div>
                        </div>



                        <div className={'textBox '+ section}>

                            <div className='row'>
                                <p className='textTitle'>{`Tÿr (Gibbon)`}</p>
                            </div>

                            <div className='row'>
                                <div className='column1'>
                                    <img src={Tyr} className = 'God Tyr' alt='' />
                                </div>
                                <div className='column2'>
                                    <p className='text'>{`Tÿr est le dieu du ciel, de la justice, de la stratégie et de la souveraineté, 
                                        mais c’est avant tout un dieu sage, juste et bienveillant. Il est considéré comme l’un des dieux 
                                        les plus importants et est également le plus apprécié par les Vikings. Il est garant de l’ordre des mondes, 
                                        surtout des conflits à Asgard n’hésitant pas à donner de sa personne avec comme seule motivation quiétude et 
                                        concorde. Dès que des dieux se querellent, on fait appel à sa sagesse.`
                                        }</p>

                                    <p className='text'>{`Il est prêt à tous les sacrifices pour le bien commun et l’harmonie. Une légende raconte que pour 
                                        contrer la légendaire créature de Loki, le loup Fenrir, qui était une véritable menace pour les dieux, Tÿr sacrifia 
                                        sa propre main dans la gueule du dangereux animal pour le neutraliser. `
                                        }</p>
                                </div>
                            </div>
                            <div className='row'>

                            </div>
                        </div>




                        <div className={'textBox '+ section}>

                            <div className='row'>
                                <p className='textTitle'>{`Magni (Goral)`}</p>
                            </div>

                            <div className='row'>
                                <div className='column1'>
                                    <img src={Magni} className = 'God Magni' alt='' />
                                </div>
                                <div className='column2'>
                                    <p className='text'>{`Magni (Le Fort en vieux norrois) est le fils de Thor. Il est considéré comme le dieu de la force, 
                                        du courage et de la puissance. Egalement connu pour être la seule divinité à être aussi forte que son père, c’est 
                                        aussi le seul être à pouvoir soulever Mjollnir, le marteau de Thor.`
                                        }</p>

                                    <p className='text'>{`Déjà à trois ans, Magni terrassait des géants, les ennemis jurés des dieux, que même le grand 
                                        Thor avait du mal à contrer. Vaillant et téméraire, il n’en est pas moins arrogant et vaniteux de ses capacités 
                                        exceptionnelles : c’est simple, rien ne l’effraie. Il est très respecté des autres dieux, mais aussi très craint, 
                                        pour la plus grande fierté de son père.`
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









