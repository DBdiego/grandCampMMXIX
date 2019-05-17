import React, { Component } from 'react'                              ;
import BackgroundImage      from './Images/Background.jpg'; //'./Images/Background_YourViking.jpg' ;
import logo                 from './logo.svg'                         ;
import Header               from '../General/Header.jsx'              ;
import '../Layer2.css';  

class ScoutsKids extends Component {

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
                        <div className={'textBox '+ section}>
                            <p className='textTitle'>{`Arretium (Moineaux)`}</p>

                            <p className='text'>{`Ancienne ville étrusque bâtie au 5`}<sup>eme</sup> {`siècle avant J.C., elle fut conquise par Rome en -295, 
                                qui la rebaptisa “Arretium” (actuelle Arezzo) .`
                                }</p>

                            <p className='text'>{`Arretium fut un pilier de l’expansion romaine : c’était une place forte située en actuelle 
                                toscane qui avait pour but de stopper les invasions barbares venus du Nord, ce qui permit à Rome de prospérer 
                                et de s’émanciper. Après des années de guerres contre les envahisseurs gaulois, la ville devient le symbole 
                                de l’expansionnisme romain.`
                                }</p>

                            <p className='text'>{`La citée eu aussi un rôle non négligeable lors de la victoire définitive de Rome sur le 
                                redoutable chef carthaginois, Hannibal Barca. En effet, au cours des années, la ville devint très industrielle 
                                et militaire. C’est donc entre ses murs que Scipion l’Africain, le général romain qui conquit Cartage, arma 
                                ses troupes et en recruta davantage.`
                                }</p>

                            <p className='text'>{`Mais après des décennies à défendre Rome, et à contribuer à sa puissance et son constant progrès, 
                                Arretium et ses habitants n’oublièrent jamais que la métropole leur avait privé de leur indépendance. 
                                Ils profitèrent à plusieurs reprises de troubles civiles dans la capitale pour la revendiquer, mais en vain.`
                                }</p>

                            <p className='text'>{`Toute l’Italie a eu vent de la réputation du gouverneur local,`}
                                <mark> Bobcatus Pabokuvus </mark>{`, et de ses fidèles tribuns : derrière leur animal totem quelque peu chétif 
                                (un moineau, quoi … ) se cache en vérité un aigle vorace avide de proies diverse, que ce soit à l’intérieur des 
                                frontières de l’empire, ou au-delà …`
                                }</p>
                        </div>


                        <div className={'textBox '+ section}>
                            <p className='textTitle'>{`Capoue (Lions)`}</p>

                            <p className='text'>{`Capoue était une ville samnite du 5`}<sup>eme</sup> {`siècle avant JC.  Une légende raconte qu’elle fut fondée 
                                par Enée, le héros troyen survivant de la guerre de Troie, en l’honneur de son grand-père, Capys. A Rome, les 
                                habitants prétendaient être les descendant de Romulus, mais à Capoue, on était les descendants d’Enée.`
                                }</p>

                            <p className='text'>{`Capoue fut toujours une alliée fidèle de Rome, mais sans jamais tomber sous son joug. Jusqu’en 
                                -215 où Hannibal Barca, le Carthaginois, conquis la ville et en fit son cartier général en Italie. Il s’y plut 
                                tellement qu’il en délaissa la conquête de Rome. Ce qui permis à cette dernière de s’organiser, et de lui infliger 
                                une sévère défaite par la suite.  On dit alors qu’Hannibal s’est “endormi dans les délices de Capoue”, une 
                                expression qui traversera les siècles, signifiant : perdre un temps précieux”. Suite à la défaite des Carthaginois, 
                                Rome en profita pour reprendre la ville en –211.`
                                }</p>

                            <p className='text'>{`Mais un autre fait que vit naitre Capoue, et pas des moindres, fut la célèbre Révolte des Gladiateurs 
                                en -73, menée par Spartacus en personne. Les Esclaves qui défièrent un Empire. Révolte qui fut matée 2ans plus tard 
                                par Marcus Crassus avec l’aide d’un certain Jules César.`
                                }</p>


                            <p className='text'>{`Comme cité précédemment, Capoue est une ville où il fait bon vivre, et son gouverneur, `}
                                <mark> Quokkus Rugbis Bringsallyus </mark> {`Leo, en est pleinement conscient, et se souciait déjà du bienêtre de ces 
                                sujets ainsi que de ses hôtes du temps où il était jeune tribun sous son prédécesseur, Corsacus Bovinus. Mais 
                                maintenant qu’il est à la tête de la ville, même les dieux risquent de s’endormir dans les délices de Capoue.`}
                                }</p>


                        </div>

                        
                        <div className={'textBox '+ section}>
                            <p className='textTitle'>{`Rome (Cerfs)`}</p>

                            <p className='text'>{`Rome est la légendaire ville de Romulus, descendant du dieu Mars. Mais historiquement, elle fut 
                                bâtie aux alentours du 7`}<sup>eme</sup> {`siècle avant notre ère. Mais c’est au 3`}<sup>eme</sup> {`siècle avant JC que Rome entame son expansion.`
                                }</p>

                            <p className='text'>{`UDurant ce siècle, Rome s’est étendu sur l’Italie, mais entre les invasions incessantes des gaulois 
                                du Nord, et la guerre contre Hannibal Barca, elle n’a pu s’établir au-delà. Maintenant ces dangers écartés, 
                                les Romains peuvent enfin prospérer, car à présent, ils tiennent bien des peuples en respect : Les Grecs de la 
                                péninsule sicilienne, le gaulois du Nord, et les Numides d’Afrique, anciens alliés de Carthage.`
                                }</p>

                            <p className='text'>{`Suite à leur victoire sur les Carthaginois, les Romains sont craints dans toute l’Europe, 
                                le moment est venu pour eux de tirer avantage de cette déferlante peur.`
                                }</p>

                            <p className='text'>{`Le Consul, `}<mark>Calimicus Firstclus Scoutalhonnus Cervus</mark>{`, compte justement en profiter, car lui et 
                                son sénat, ont pour ambition de soumettre le monde Méditerranéen avec le soutien de ses alliés d’Arretium et de 
                                Capoue.`
                                }</p>

                            <p className='text'>{`Mais il ne doit pas oublier que les alliances ne sont pas éternelles, et que ses fiefs, avant 
                                d’être soumis par devoir, furent soumis par la force. Choses que les habitants n’oublièrent jamais. Ils peuvent 
                                à tout moment profiter d’une faiblesse pour reprendre leur liberté. Avant de partir en guerre, Rome doit s’assurer 
                                de la loyauté de ses sœurs italiennes.`
                                }</p>

                        </div>
                    </div>
                </div>
            );
        return componentsToRender

    };
};

export default ScoutsKids









