import React, { Component } from 'react'                   ;
import BackgroundImage      from './Images/Background.jpg' ;
import Header               from '../General/Header.jsx'   ;
import '../Layer2.css';

class History extends Component {

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
                <div className='History'>
                
                    <Header 
                        section = {section}
                    />

                    <div className={'Background'}>
                        <img src={BackgroundImage} className = 'BackgroundImage' alt='' />
                    </div>
                    <div className = 'container'>
                        <div className={'textBox '+ section}>
                            <p className='textTitle'>{`Les Perses`}</p>

                            <p className='text'>{`Les plateaux iraniens, admirablement situés entre le monde méditerranéen et le monde indien, 
                                ont donné naissance au premier Empire à vocation universelle en –552 sous le règne de Syrus II, la Perse.`
                                }</p>
                           
                            <p className='text'>{`Le père de Cyrus, Cambyse Ier, était lui-même roi des Perses. Mais à l’époque, la Perse 
                                était un petit peuple iranien parmi d’autre. `
                                }</p>


                            <p className='text'>{`En –553, Astyage, roi des Mèdes (autre peuple iranien), avide de conquête et de pouvoir, 
                                entre en guerre contre Cyrus II, roi de la petite perse. Mais Cyrus est rusé, et alors qu’Astyage fait de 
                                mauvais choix stratégiques, le Perse en profite pour retourner la situation à son avantage et envahit à 
                                son tour le peuple Mède.`
                                }</p>

                            <p className='text'>{`C’est alors l’ascension de l’Empire perse. Les conquêtes de Cyrus ne cessent de croitre 
                                jusqu’à faire trembler la puissante Lydie (Asie mineur) et son roi, Crésus. Crésus sait que ce n’est qu’une 
                                question de temps avant l’arrivée des Perses aux frontières de son royaume. Il décide alors de nouer des alliances 
                                avec Sparte, les citées grecques d’Ionie, mais également avec l’Egypte et Babylone.`
                                }</p>


                            <p className='text'>{`Maintenant qu’il est assez soutenu pour entrer en guerre contre Cyrus, Crésus se voit même avoir 
                                la prétentieuse ambition d’envahir la Perse : la meilleure défense, c’est l’attaque. Mais avant de prendre une 
                                décision, le roi de Lydie s’entretient avec l’oracle de Delphes qui lui annonça que s'il entrait en guerre contre 
                                les Perses, il détruirait un Empire. Suite à cela, Crésus, confiant, se lança à la conquête de la Perse, mais sans 
                                avoir compris que l’oracle parlait de son propre royaume.`
                                }</p>

                            <p className='text'>{`Crésus tomba, et avec lui la Lydie, une partie de l’Egypte et les citées grecques d’Ionie.`
                                }</p>

                            <p className='text'>{`Cyrus se tourna alors vers l’Asie centrale où il fit quelques conquêtes territoriales avant de 
                                revenir en Asie mineur pour conquérir la belle et grande Babylone et d’en faire sa capitale jusqu’à l’édification 
                                de Persépolis en –521 sous ordre de Darius Ier.`
                                }</p>

                            <p className='text'>{`Cyrus décède en –530 à la tête d’un empire près de 20 fois plus vaste que son royaume initial. 
                                Il en sera ainsi nommé “Syrus le Grand”.`
                                }</p>

                            <p className='text'>{`Les Perses sont à présent plus fort que jamais, mais leurs ambitions sont encore aussi vastes 
                                que les territoires à conquérir. `
                                }</p>

                            <p className='text'>{`Vers l’Ouest, de nombreux peuples ne demandent qu’à tomber sous notre joug :`
                                }</p>

                            <p className='text'><mark>Les Grecs:</mark>{`ce pays bien petit composé de peuples forts mais divisés ne pourra pas 
                                luter longtemps face à notre puissance !`
                                }</p>

                            <p className='text'><mark>Les Égyptiens :</mark>{`vaincus une première fois sous l’ère du grand Syrus, le pays des 
                                Pharaons ne sera bientôt plus !`
                                }</p>

                            <p className='text'><mark>Les Romains :</mark>{`ce jeune peuple en expansion menace lui aussi le monde méditerranéen, 
                                et profite déjà des belles victoires et conquêtes pour assoir leur pouvoir. Mais leur rivalité dérisoire ne fera 
                                pas le poids face à notre détermination.`
                                }</p>

                            <p className='text'><mark>Les Gaulois :</mark>{`ces barbares du Nord-ouest de l'Europe ne sont que des hommes 
                                non-civilisés mais braves. Bientôt, ils ne seront que cendres et poussières.`
                                }</p>

                        </div>

                        <div className={'textBox '+ section}>
                            <p className='textTitle'>{`Les Satrapes`}</p>

                            <p className='text'>{`L’Impératrice et sa suite de Persépolis pourront ainsi compter sur leurs puissantes provinces et 
                                leurs Satrapes :`
                                }</p>                            

                            <p className='text'><mark style={{'color':'#17B233'}}>Le Vert</mark>{`des jardins de Babylone et son Satrape Baudoin`
                                }</p>

                            <p className='text'><mark style={{'color':'#D6C31D'}}>Le Jaune</mark>{`-or des richesses de Kandahar et son Satrape Diego`
                                }</p>

                            <p className='text'><mark style={{'color':'#0B31C6'}}>Le Bleu</mark>{`du Lapis Lazuli de la carrière d’Ispahan et son Satrape Léopold`
                                }</p>

                            <p className='text'><mark style={{'color':'#F0F0F0'}}>Le Blanc</mark>{`Yvoir des Eléphants de la province d’Arménisa et son Satrape Brieuc.`
                                }</p>

                            <p className='text'><mark style={{'color':'#AF0808'}}>Le Rouge</mark>{`Pourpre des précieux textiles d’Erzurum et son Satrape Maximilien.`
                                }</p>

                            <p className='text'>{`Il est temps pour le monde méditerranéen de se préparer à la tempête Perse qui approche...`
                                }</p>  
                        </div>
                    </div>
                </div>
            );
        return componentsToRender

    };
};

export default History









