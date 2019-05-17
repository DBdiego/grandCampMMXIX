import React, { Component } from 'react'                              ;
import BackgroundImage      from './Images/Background.jpg'; //'./Images/Background_YourViking.jpg' ;
import logo                 from './logo.svg'                         ;
import Header               from '../General/Header.jsx'              ;
import '../Layer2.css';  


///GUIDES////

class GuidesKids extends Component {

    render() {
        let splittedAddress = window.location.href.split('/');
        let section = splittedAddress[splittedAddress.length-2];
        let componentsToRender = (
                <div className='YourViking'>
                    <Header section={section} logo={logo}/>
                    <div className={'Background'}>
                        <img src={BackgroundImage} className = 'BackgroundImage' alt='' />
                    </div>

                    <div className = 'container'>
                        <div className={'textBox ' + section}>
                            <p className='textTitle'>{`Sekhmet (Puma)`}</p>

                            <p className='text'>{`Chère patrouille des Puma,`
                                }</p>

                            <p className='text'>{`Vous voilà honorées de pouvoir représenter la déesse la plus puissante de toute l’Egypte, 
                                Sekhmet. Elle que l’on surnomme « la puissante » avec sa tête de lionne qui souffle les vents du désert fait 
                                même trembler le mal. `
                                }</p>

                            <p className='text'>{`Déesse de la guerre, son rôle est de protéger l’Egypte toute entière. Le rôle qu’elle prend 
                                le plus a cœur est de protéger son père, le Dieu Soleil Rê. Elle guide les pharaons dans leur combat et 
                                interviens lorsque certains hommes se montrent trop rebelles à l’égard du peuple égyptien. Malgré ses airs 
                                combatifs et violents, elle peut s’avérer être douce et protectrice. Déesse de la guérison et des foyers, 
                                elle veille sur le peuple comme une lionne veillerait sur ses petits. Il est donc essentiel, chers Pumas, 
                                de lui faire honneur. Enfilez vos plus beaux costumes de guerre et préparez-vous à combattre au côté de cette 
                                déesse plus qu’extraordinaire.`
                                }</p>

                            <p className='names'> Merione et Beira</p>
                        </div>


                        <div className={'textBox ' + section}>
                            <p className='textTitle'>{`Tefnout (Dragons)`}</p>

                            <p className='text'>{`Chers dragons,`
                                }</p>

                            <p className='text'>{`Pas de feu pour vous cet été… C’est l’eau que vous représenterez. Tefnout est la première 
                                divinité féminine responsable de la création du monde. Déesse des eaux et des mers, et même de l’humidité ! 
                                Faites en sorte qu’elle nous épargne durant le camp, rendez-la fière et déguisez-vous dignement. Que votre 
                                pilotis soit capable de traverser des océans !`
                                }</p>

                            <p className='text'>{`Ayant le soleil comme coiffure, elle est aussi le symbole du cycle solaire tandis que Shou, 
                                son frère, est celui de l'air, de la lumière et de la vie. Les deux, ensemble, sont complémentaires et 
                                indispensables au cycle du renouveau de la vie qui, dans l'esprit des anciens Égyptiens, à l'assurance que 
                                chaque matin le dieu soleil pouvait renaître. Soyez à la grandeur des océans, traversez des mers ne vous fait 
                                pas peur ! Nous nous retrouvons plus motivées que jamais le 17 juillet !`
                                }</p>

                            <p className='names'> Dorcas </p>

                        </div>

                        
                        <div className={'textBox '+ section}>
                            <p className='textTitle'>{`Hathor (Porcinets)`}</p>

                            <p className='text'>{`Chers Porcinets,`
                                }</p>

                            <p className='text'>{`Hathor est la déesse de l’amour, de la beauté, de la joie ! Elle est représentée par une femme 
                                majestueuse portant un disque solaire sur la tête. Elle souhaite répandre l’amour autour d’elle, à vous de 
                                l’honorer et de charmer l’entièreté de la troupe. Elle affronte les dieux de la guerre avec courage, elle défie 
                                la nature et assume son rôle de protectrice.`
                                }</p>

                            <p className='text'>{`Soyez aussi belle qu’elle, avec classe et dignité, au mieux vous la représenterez ! Osez le 
                                déguisement et la décoration créative du pilotis selon cette déesse distribuant son amour à tous. Elle est 
                                d’autant plus importante qu’elle était la femme d’Horus, le Dieu faucon. Montrez-nous que vous avez cerné sa 
                                personnalité et adoptez-la durant ce grand camp 100% égyptien ! Nous nous réjouissons d’être envoutées par la 
                                magie qu’Hathor transmettra à travers votre patrouille !`
                                }</p>

                            <p className='names'> Welsh </p>

                        </div>

                        
                        <div className={'textBox ' + section}>
                            <p className='textTitle'>{`Bastet (Lama)`}</p>

                            <p className='text'>{`Chère patrouille des Lamas,`
                                }</p>
                            
                            <p className='text'>{`Cet été vous ferez honneur à Bastet, déesse à tête de chat, adorée dans le Delta ! Elle est non 
                                seulement la déesse de la musique, de la joie du foyer mais surtout de la maternité.`
                                }</p>
                            
                            <p className='text'>{`Des générations dépendent d’elle ! Vous aussi, aujourd’hui sur terre, lui devez beaucoup ! Soyez 
                                créatives pour la représenter dignement, devenez Déesse Mère à votre tour en vous déguisant au mieux et en décorant 
                                votre pyra-pilotis de la façon la plus créative possible. Vous êtes une déesse bienveillante, la maternité ne vous 
                                fait pas peur. Bastet protège d’ailleurs les femmes de l’accouchement. Et comme le chat, cette déesse farouche, aussi 
                                indépendante, n’a d’autre maître qu’elle-même. Enfin, elle est une déesse des plus joyeuses et les fêtes en son honneur 
                                sont connues pour leurs danses joviales. Nous nous réjouissons de vous découvrir en déesses égyptiennes.`
                                }</p>

                            <p className='names'> Sloughi et Ourébi </p>

                        </div>


                        <div className={'textBox ' + section}>
                            <p className='textTitle'>{`Geb (Colombes)`}</p>

                            <p className='text'>{`Chers colombes,`
                                }</p>
                            
                            <p className='text'>{`Cet été c’est le Dieu Geb que vous incarnerez. Fils de Shou, dieu de l’air, et de Tefnout, déesse 
                                de l’eau, il est le dieu de la Terre. Il est d’ailleurs aussi l’époux de Nout, la déesse du ciel.  En tant que Dieu 
                                de la terre, des plantes et des minéraux, et de la nature en général, Geb est l'un des quatre éléments qui formèrent 
                                le monde. La légende veut que les tremblements de terre aient comme origine les éclats de rire de Geb.`
                                }</p>

                            <p className='text'>{`Vous l’aurez compris, il est un élément clé de l’Egypte ancienne. Sans lui, la nature si belle nous 
                                entourant ne serait probablement pas la même qu’aujourd’hui. Aidez-le à mettre les éléments de la nature en notre 
                                faveur durant le grand camp ! Rendez-lui hommage et honorez-le en vous déguisant du mieux que vous pouvez !`
                                }</p>

                            <p className='text'>{`Nous nous réjouissons de vous retrouver en déesses de la nature…`
                                }</p>

                            <p className='names'> Sptiz </p>

                        </div>


                    </div>
                </div>
            );
        return componentsToRender

    };
};

export default GuidesKids









