import React, { Component } from 'react'                   ;
import BackgroundImage      from './Images/Background.jpg' ;
import Header               from '../General/Header.jsx'   ;
import '../Layer2.css';

class History extends Component {

    render() {
        let splittedAddress = window.location.href.split('/');
        let section = splittedAddress[splittedAddress.length-2];
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
                            <p className='textTitle'>{`La totémisation`}</p>

                            <p className='text' style={{'font-weight':'1000'}}>{`Pas de panique ! La cérémonie des totems, c’est ta façon d’intégrer pleinement notre 
                                belle troupe de la 39ième ! Nous, les aînées, avons chacune un totem que nous portons fièrement, 
                                à ton tour de découvrir le tiens durant ce grand camp d’unité !`
                                }</p>
                           
                            <p className='text'>{`La totémisation est une étape importante de ta vie dans la troupe (l’ampleur, l’ambition, la signification 
                                donnée à ce geste en sont la preuve), mais une parmi bien d’autres! Elle montre que c’est une chance pour la troupe 
                                de pouvoir compter sur toi, alors cette fête doit arriver dans le courant de ta première année.`
                                }</p>


                            <p className='text'>{`C’est aussi un “secret positif”, un peu comme avant un anniversaire où l’on sent que quelque chose se 
                                prépare. On ne sait pas quoi, on ne sait pas quand, mais on est juste sûr d’une chose: on en sera content et surtout très 
                                fier!`
                                }</p>

                            <p className='text'>{`La cérémonie de la totémisation ne vise aucunement à humilier une guide ni à la mettre dans un état 
                                d’infériorité par rapport aux autres. Elle la confronte à des situations inattendues, difficiles, en lui donnant la 
                                possibilité de les surmonter en se surpassant et en mettant en évidence ses nombreuses capacités. Alors relax, il 
                                n’y a aucune raison de stresser!`
                                }</p>

                            <p className='text'>{`Le totem ne souligne jamais un défaut, il est choisi en fonction des caractéristiques physiques. 
                                Il s’agit d’un nom d’animal, miroir de la guide au sein de la troupe.`
                                }</p>

                            <p className='text' style={{'font-style':'italic'}}>{`Le savais-tu ?`}</p>

                            <p className='text' style={{'font-style':'italic'}}>{`Baden-Powell a bien été appelé Impeeza (le loup qui ne dort jamais), 
                                mais il s’agit seulement là de son totem le plus connu. En fait, il a reçu un totem différent dans chaque tribu avec 
                                laquelle il entrait en contact.`
                                }</p>
                        </div>

                        <div className={'textBox '+ section}>
                            <p className='textTitle'>{`La Promesse`}</p>

                            <p className='text'>{`Si tu es en deuxième année guide, nous t'avons accueillie l'année passée au sein de la troupe en 
                                te donnant un totem. Nous te proposons cette année de t'engager encore plus au sein de la troupe et de faire ta promesse. 
                                Il s’agit d’un engagement personnel et libre que chacune peut vivre de manière différente.`
                                }</p>
                           
                            <p className='text'>{`La promesse ne t’engage pas à devenir une guide parfaite. Elle t’engage seulement à être fidèle à la 
                                Loi scoute que tu choisis et à faire de ton mieux pour la respecter. Pas seulement chez les guides, mais tout au long 
                                de ta vie! Bien sûr tu ne seras pas seule, tu pourras choisir une marraine pour te seconder et t'aider à respecter ta promesse.`
                                }</p>

                            <p className='text'>{`À toi de choisir la loi scoute qui te convient le mieux. Pense aux choses que tu voudrais améliorer dans 
                                ta vie guide, ou aux choses que tu souhaiterais mettre en valeur dans notre troupe. Garde à l’esprit que cette loi représente 
                                une valeur qui te tient à cœur dans ta vie scoute mais également dans ta vie quotidienne, qu’elle soit une de tes qualités ou 
                                un idéal à atteindre.`
                                }</p>

                            <p className='text'>{`Pour montrer que la promesse a une réelle signification pour toi, nous te demanderons à toi, promettante, 
                                de préparer un texte sérieux, réfléchi et personnel sur une des dix lois scoutes ainsi que quelques lignes sur ses motivations. 
                                Pour t’aider dans ta réflexion, voici quelques exemples de question à te poser: Pourquoi ai-je décidé de faire ma promesse? 
                                Qu’est-ce que ce cela représente pour moi? Pourquoi ai-je choisi cette loi? Quelles sont les qualités pour lesquelles j’ai 
                                choisi ma marraine? Comment m’améliorer?`
                                }</p>
                        </div>

                        <div className={'textBox '+ section}>
                            <p className='textTitle'>{`Le Quali`}</p>

                            <p className='text'>{`Le "quali" est une étape importante chez les guides pour les troisièmes années. En effet, c’est à cette 
                                occasion que les chefs s’arrêtent sur chaque future qualifiée personnellement et réfléchissent à sa personnalité et 
                                ses qualités.`
                                }</p>

                            <p className='text'>{`Nous pensons qu'en troisième année guide, tu es déjà plus mûre qu'en deuxième année et que tu nous as 
                                déjà montré un plus beau panel de ta personnalité ! Nous te connaissons désormais bien et tu es pleinement toi-même au 
                                sein de la troupe.  `
                                }</p>

                            <p className='text'>{`Pour l'instant nous ne t'en dirons pas plus, car chuuuut! C'est un secret... Ce que nous pouvons te 
                                promettre c'est que l'expérience sera enrichissante. `
                                }</p>

                            <p className='text'>{`Bientôt, tu pourras crier HAUT ET FORT le beau quali que nous aurons choisi pour toi !`
                                }</p>

                        </div>

                        <div className={'textBox '+ section}>
                            <p className='textTitle'>{`Le Hike`}</p>

                            <p className='text'>{`Le hike, non ce ne sont pas que des kilomètres à marcher ! C’est avant tout une expérience 
                                enrichissante que vous ne vivrez nulle part ailleurs de cette façon ! Ce sont trois jours en patrouille où vous pourrez 
                                tisser des liens encore plus forts entre vous !`
                                }</p>

                            <p className='text'>{`Il est impératif de suivre les chemins indiqués sur les cartes qui vous seront fournies par vos chefs 
                                adorées, autrement vous pourriez vous perdre dans les bois et Dieu sait que de drôles de bêtes y rodent... Prendre des 
                                raccourcis n’est pas autorisé, et les chemins doivent être faits à pied. Bus, auto-stop, trains, voiture de connaissance 
                                et autres sont interdits ! `
                                }</p>
                                
                            <p className='text'>{`N’oubliez pas que les déesses égyptiennes voient TOUT et il serait dommage de recommencer le trajet un 
                                sac rempli de lourdes pierres à apporter jusqu’aux sommets des pyramides égyptiennes… Chaque CP sera en possession de son 
                                GSM, qui ne sera utilisé qu’en cas d’urgence.`
                                }</p>
                                
                            <p className='text'>{`Pour rappel, le hike se fait en uniforme impeccable. Il est aussi fortement conseillé de se munir d’un 
                                sac à dos léger et de taille moyenne dans lequel vous glisserez le strict minimum pour vous (sac de couchage, gourde, 
                                gamelle, k-way, brosse à dent, sous-vêtements de rechange, etc.) mais aussi pour la patrouille (lunch, goûter, etc.). 
                                Veillez aussi à avoir de bonnes chaussures de marche ! Les sandales égyptiennes sont, dans ce cas-ci, plutôt déconseillées !`
                                }</p>
                                
                            <p className='text' style={{'font-style':'italic'}}>{`Les règles qui sont d’application durant tout le camp ne changent pas pendant le hike: alcool, drogue et 
                                cigarettes sont formellement interdits (et susceptibles de sanction grave). Vous voilà prévenues...`
                                }</p>
                        </div>


                        <div className={'textBox '+ section}>
                            <p className='textTitle'>{`Le Concours Cuisine (Miammmmm)`}</p>

                            <p className='text'>{`A vos fourneaux ! Sel, poivre, fouet, casseroles ! On s’y met ! Surprenez-nous, faites ressortir le petit 
                                chef qui est en vous ! Plats typiquement égyptiens ou plus classiques mais cuisinés finement, nous nous réjouissons de 
                                découvrir vos talents ! Préparez déjà vos recettes, mettez en place vos idées ! Répartissez chef coque, commis, division 
                                des courses et du budget : à vos marque, prêt : cuisinez ! `
                                }</p>

                        </div>

                        <div className={'textBox '+ section}>
                            <p className='textTitle'>{`Les Constructions`}</p>

                            <p className='text'>{`Les pyramides ne se sont pas construites en un jour… Les plans on pris du temps, la construction 
                                aussi… Le palais de Cléopâtre, Sekhmet, Geb et autres déesses n’attend plus ! `
                                }</p>
                           
                            <p className='text'>{`Préparez dès aujourd'hui les plans de votre future bâtisse ! N’oubliez pas la décoration ! Il 
                                semblerait que la construction la plus époustouflante soit même récompensée d’un prix ! Durant 3 jours, vous 
                                bâtirez ensemble votre lieu de résidence pour la deuxième quinzaine du mois. Casquette, crème solaire, de 
                                bonnes chaussures et de bons outils sont fortement conseillés.`
                                }</p>
                           
                            <p className='text'>{`Mettez toutes les chances de votre côté pour nous épater !`
                                }</p>
                        </div>

                    </div>
                </div>
            );
        return componentsToRender

    };
};

export default History









