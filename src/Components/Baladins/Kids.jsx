import React, { Component } from 'react'                   ;
import BackgroundImage      from './Images/Background.jpg' ;
import Header               from '../General/Header.jsx'   ;
import '../Layer2.css';  

class ScoutsKids extends Component {

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
                <div className='YourViking'>
                    
                    <Header 
                        section = {section}
                    />
                    
                    <div className={'Background'}>
                        <img src={BackgroundImage} className = 'BackgroundImage' alt='' />
                    </div>

                    <div className = 'container'>
                        <div className={'textBox '+ section}>
                            <p className='textTitle'>{`Ragnar Lothbrock (Faucons)`}</p>

                            <p className='text'>{`Ragnar Lothbrock est un roi légendaire viking du 8`}<sup>eme</sup> {` siècle. Il est 
                                le père de célèbres Vikings comme Bjorn Côtes-de-Fer, ou encore Ivar le Désossé. `
                                }</p>

                            <p className='text'>{`Ragnar est né dans le village de Cattégat. Fils d’un fermier, c’est tout naturellement qu’il 
                                suit cette vocation une fois adulte. Mais Ragnar se sent très vite l’âme d’un explorateur. N’ayant pas de 
                                bonnes relations avec son Jarl (chef de clan), Ragnar organise en secret une expédition dans les terres de 
                                l’Ouest avec quelques compagnons. Naviguant vers le couchant, il accoste sur les côtes anglaises, où il pille 
                                un monastère isolé. Ramenant son butin à Cattégat, il devient une personnalité importante de son village, 
                                grâce à ses richesses ramenées d’Angleterre. Dans la logique des choses, le Jarl fut déchu de son titre pour 
                                le céder à Ragnar. `
                                }</p>

                            <p className='text'>{`Ragnar usa de ses privilèges et de sa richesse pour envoyer d’autres expéditions vers 
                                l’Angleterre, les unes plus importantes que les autres. Sa réputation ne se fit pas attendre pour traverser 
                                le monde viking et bien des peuples se joignirent à lui.`
                                }</p>

                            <p className='text'>{`A la tête d’une bien plus vaste armée que ses compagnon initiaux, Ragnar ne se contentait 
                                plus de pillages, il rêvait désormais de conquêtes. Par la suite, il soumit plusieurs terres anglaises pour 
                                en faire des colonies normandes, dont en Northumbrie, face au roi Aelle.`
                                }</p>

                            <p className='text'>{`Lors de ces guerres en Angleterre, il entendit parler d’une ville magistrale en Francie (France), 
                                une ville sur un fleuve, la célèbre Paris. L’idée de conquérir cette ville le hanta, c’est donc avec une flotte de 
                                150 drakkars (6000 guerriers) qu’il remonte la Seine afin d’atteindre ce qui deviendra la ville lumière. Mais 
                                l’armée scandinave se heurta à une grande enceinte et une résistance militaire redoutable. Le siège dura plusieurs 
                                mois, mais la cité finit par céder. La cause de cette défaite des Francs est à ce jour inconnue, mais la légende 
                                raconte que Ragnar se fit passer pour mort pendant le siège, et que sa dernière volonté fut d’être inhumé dans la 
                                ville de Paris. Les Francs laissèrent quelques Vikings désarmés avec le cercueil entrer dans la ville, celui-ci 
                                contenant Ragnar ainsi que plusieurs armes. Une fois les portes franchies, les soldats déposèrent le cercueil au 
                                sol, laissant Ragnar en surgir. Les Vikings s’équipèrent aussitôt des armes que contenait la caisse mortuaire, 
                                et empêchèrent les Francs de celer les portes, ce qui permit à la grande armée scandinave de pénétrer et de 
                                piller la ville.`
                                }</p>

                            <p className='text'>{`C’est peu après, lors de son retour en Angleterre, que Ragnar fut capturé par le Roi Aelle, 
                                contre lequel il avait déjà mené bataille. Le souverain anglo-saxon condamna Ragnar à mort avant de le 
                                jeter dans une fosse remplie de serpents. Il le regrettera amèrement quand il apprendra la venue des fils 
                                du célèbre viking à des fins vengeresses.`
                                }</p>

                            <p className='text'>{`Ragnar reste dans les mémoires comme un fédérateur et un précurseur de l’émancipation viking 
                                à travers l’Europe jusqu’en Asie et en Afrique. `}<mark>Les Faucons</mark>{`, aussi appelés `}<mark>« Les Disciples de Ragnar »</mark>{` 
                                se veulent, comme leur idole, forts et audacieux. Toujours en quête de conquêtes pour s’émanciper, ils 
                                ne reculent jamais, même devant les murs des plus grandes cités.`
                                }</p>

                        </div>


                        <div className={'textBox '+ section}>
                            <p className='textTitle'>{`Bjorn côte-de-fer (Guépards)`}</p>

                            <p className='text'>{`Bjorn est un roi Scandinave du 9`}<sup>eme</sup> {` siècle. Il est le fils du légendaire Ragnar 
                                Lothbrock, mais il est surtout connu pour avoir passé le détroit de Gibraltar et pour avoir laissé un petit souvenir 
                                de la culture viking dans le monde méditerranéen.`
                                }</p>

                            <p className='text'>{`Bjorn est né à Cattégat au 9`}<sup>eme</sup> {` siècle. Ragnar Lothbrock n’était encore 
                                qu’un fermier à sa naissance. Quand Ragnar entame son premier raid chez les Saxons, Bjorn, alors âgé 
                                de 18 ans, insiste pour l’accompagner, mais celui-ci refuse catégoriquement, sous-estimant les capacités 
                                de son fils au combat. Ce n’est seulement que quelque mois plus tard, lors d’une énième expédition de son 
                                père, que ce dernier accepte de le laisser venir avec lui en Angleterre. Lors de son premier combat, Bjorn 
                                se montre intrépide, vaillant et hardi. Une fois la victoire remportée, il se fait aussitôt baptiser 
                                « Bjorn Côtes-de-Fer ». Par ses talents de guerrier, il se fera très vite une réputation, et avec la 
                                renommée de son père, il n’aura pas de mal à avoir sa propre armée. Il enchainera les raids et pillages 
                                sur les côtes françaises et saxonnes. Il participera également au siège de Paris aux côtés de son père. `
                                }</p>

                            <p className='text'>{`Une fois la ville conquise, Bjorn trouve une carte indiquant une mer inconnue de son peuple, 
                                située au sud de l’Europe, la Mer Méditerranée. Il repart aussitôt à Cattégat, lève une flotte de 68 drakkars 
                                (plus ou moins 1400 hommes) avec l’aide du célèbre chef Hasting, et repart vers le Midi. Il longe les côtes 
                                françaises et espagnoles avant d’arriver au détroit de Gibraltar. Il borde alors les côtes marocaines, 
                                ne se privant pas de quelques pillages expéditifs, avant de remonter vers ce qui deviendra les iles 
                                Baléares, et de poursuivre vers la Camargue où il établira son camp. Cette escale lui offrira l’occasion 
                                d’envahir les riches villes de Narbonne, de Nîmes et bien d’autres. Voyant les richesses que lui rapporte ces 
                                régions provençales, il profite de la jetée du Rhône en Camargue pour remonter vers Valence avec sa flotte, 
                                puis naviguer sur l’Isère pour prendre Romans. La furie scandinave se sera abattue sur cette région durant 
                                bien des mois.`
                                }</p>


                            <p className='text'>{`Mais Bjorn est un marin et un explorateur. Une fois lassé des richesses et cultures locales, 
                                il redescendra dans le sud et partira pour l’Italie où il prendra la ville de Luna en 860. Après avoir 
                                passé plusieurs années loin de sa mère patrie, Bjorn décidera de repartir vers la Scandinavie afin 
                                d’exercer son titre de roi sur les terres que son père lui aura léguées en Suède et au Danemark. Malgré 
                                ces années de pillages, Bjorn se sera, d’une certaine manière, imprégné de la culture de l’Europe chrétienne, 
                                et sera le premier roi suédois à tolérer le christianisme sur ses terres.`
                                }</p>

                            <p className='text'>{`Bjorn ne quittera plus son royaume et mourra quelques années plus tard. Ce personnage de 
                                légende sera considéré comme le fondateur de la dynastie de Munsö, la dynastie protohistorique des rois 
                                suédois.`
                                }</p>

                            <p className='text'><mark>Les Guépards</mark>{`, aussi appelés `}<mark>« Le Jugement de Bjorn Côtes-de-Fer »</mark>{`, 
                                se donnent l’ambition de marcher sur les pas du Roi légendaire. Hardis dans la difficulté et intrépides !  Tout en 
                                restant tolérant face aux différences. Mais ils sont surtout curieux et découvreurs, envieux d’explorer et de 
                                connaitre le monde qui les entoure, de voguer vers d’autres horizons.`
                                }</p>

                        </div>

                        
                        <div className={'textBox '+ section}>
                            <p className='textTitle'>{`Sven à la Barbe Fourchue (Zébus)`}</p>

                            <p className='text'>{`Sven à la barbe fourchue ou Sveinn Haraldsson tjúguskegg en Nordique était 
                                un roi du Danemark entre 986 et 1014. Comme son nom Nordique laisse deviner, ce roi se fit 
                                reconnaître par sa barbe fourchue. En 980 il prit le trône de son père, Harald à la dent bleue.`
                                }</p>

                            <p className='text'>{`Une fois sur le trône, son but premier était d’agrandir son territoire dans 
                                la région scandinave. Ayant un talent de diplomate pour son époque, il réussit à s’allier avec 
                                d’autres rois pour envahir la Norvège. Mais ce talent ne fut pas qu’un avantage pour les alliances. 
                                Il l’utilisât aussi pour ses deux mariages avec les filles de monarques alliés.`
                                }</p>

                            <p className='text'>{`Sven était quelqu’un d’ouvert au changement. Cela se reflétait dans ses 
                                convictions religieuses ainsi que dans ses tactiques de guerre. Un esprit vif et créatif 
                                lui vaudra le respect dans la région scandinave. `
                                }</p>

                            <p className='text'>{`Comme beaucoup de Nordiques à cette époque la destination de l’Angleterre signifiait 
                                reconnaissance et richesse. Même pas 8 ans après sa première apparition sur le trône, il décida de 
                                partir vers l’Angleterre.  Les invasions anglaises se sont succédées pendant une vingtaine d’années. 
                                Sven à la barbe fourchue montra ses stratégies les plus farouches tout au long de ces guerres. Convaincu 
                                par la religion chrétienne, cela lui permettra de côtoyer les Anglo-Saxons de l’époque avec un peu plus 
                                de tact, lui apportant un gain de respect sur l’île. En 1013 il fut le premier Danois à être couronné 
                                roi en Angleterre. Malheureusement, ce trophée ne lui appartiendra que quelque mois avant qu’il ne 
                                succombe à une maladie subite.`
                                }</p>

                            <p className='text'>{`Stratèges et ouverts d’esprit, `}<mark>Les Zébus</mark>{`, plus connus dans la région 
                                scandinave sous le nom `}<mark>« Les Descendants à la barbe fourchue»</mark>{`, sont toujours prêts 
                                à une alliance pour sortir gagnants d’une invasion.`
                                }</p>

                        </div>

                        
                        <div className={'textBox '+ section}>
                            <p className='textTitle'>{`Harald Sigurdsson l’Impitoyable (Sangliers)`}</p>

                            <p className='text'>{`Ce roi de Norvège est né en 1016 et mourut le 25 septembre 1066. Il est mieux connu sous 
                                le nom de Harald Hardrada ou Harðráði en vieux norrois, ce qui signifie « commandement difficile ». 
                                Il a également été appelé "l'impitoyable" ou "le Severer". Il a aussi reçu des surnoms plus doux, tels que 
                                "The North Lightning" ou "Le dernier des Vikings"`
                                }</p>
                            
                            <p className='text'>{`Ce demi-frère d'Olaf le saint et fils d'un roi norvégien est contraint à l'exil à la suite 
                                de la défaite de Stiklestad. Il assumera le rôle de chef de la garde varangienne et retournera dans son pays en 
                                1046 pour faire alliance avec le roi du Danemark Sven Estriden. Il prévoit de mettre fin au règne du roi Magnus, 
                                le bien qui est à la tête du pays. Mais ce dernier lui propose de partager le pouvoir et finit par mourir un an 
                                plus tard.`
                                }</p>
                            
                            <p className='text'>{`Son règne est selon ses détracteurs, un règne sanglant et brutal. Il est également marqué par la 
                                multiplication des batailles navales contre son voisin danois. Adam de Brême, un contemporain du roi, considère 
                                qu'il était cruel et qu'il a commencé des campagnes pour tuer des chrétiens.`
                                }</p>

                            <p className='text'>{`Ce demi-frère d'Olaf le saint et fils d'un roi norvégien est contraint à l'exil à la suite de la défaite 
                                de Stiklestad. Il assumera le rôle de chef de la garde varangienne et retournera dans son pays en 1046 pour faire alliance avec 
                                le roi du Danemark Sven Estriden. Il prévoit de mettre fin au règne du roi Magnus, le bien qui est à la tête du pays. Mais ce 
                                dernier lui propose de partager le pouvoir et finit par mourir un an plus tard.`
                                }</p>

                            <p className='text'>{`Son règne est selon ces détracteurs, un règne sanglant et brutal. Il est également marqué par la 
                                multiplication des batailles navales contre son voisin danois. Adam de Brême, un contemporain du roi, considère qu'il 
                                était cruel et qu'il a commencé des campagnes pour tuer des chrétiens.`
                                }</p>

                            <p className='text'>{`Un grand raider, il était encore en guerre et a combattu partout dans le Nord pour 
                                construire un empire sanglant. Sa puissance et sa rapidité dans la bataille lui ont valu d'apparaître 
                                dans "La saga des rois de Norvège", une œuvre écrite au 13`}<sup>eme</sup> {` siècle par Snorri Sturluson.`
                                }</p>

                            <p className='text'>{`Il est représenté comme un homme sage et sagace. Sa taille, sa présence sont également 
                                décrites. Il a aussi été décrit comme était vaillant, bon conseiller et ambitieux. `
                                }</p>

                            <p className='text'>{`Harald est reconnu dans l'histoire comme le dernier des Vikings. Il ferme ainsi la ligne 
                                des tribus scandinaves répandues sur le continent européen. Il est né dans un environnement où la structure 
                                et les rites des Vikings ont cédé la place au christianisme après avoir survécu plus de deux cents ans.`
                                }</p>

                            <p className='text'>{`Comme tout Viking qui se respecte, il a de la difficulté à gérer l'échec, après avoir 
                                combattu pendant plus de dix-sept décennies son ancien allié danois. Une trêve fut signée en 1064. N'étant pas 
                                homme à se reposer, il veut assoir son pouvoir sur l'Angleterre dont il est candidat à la succession du trône en 
                                1066.`
                                }</p>

                            <p className='text'>{`En effet, Edward le Confesseur venait de mourir laissant son trône à Guillaume de 
                                Normandie. Après avoir réussi à envahir le Yorkshire, il a perdu la vie en affrontant Harold Godwinson.`
                                }</p>

                            <p className='text'><mark>Les Sangliers</mark>{`, aussi plus connus sous le nom des
                                `}<mark>« Champions de Harlald l’Impitoyable »</mark>{`, incarnent la force de leur idole pour parvenir 
                                à leurs fins, toujours en quête de gloire et de territoires afin d’imposer leur domination.`
                                }</p>

                        </div>


                        <div className={'textBox '+ section}>
                            <p className='textTitle'>{`Ivar le Desossé (Cobras)`}</p>

                            <p className='text'>{`Ivar est le dernier fils de Ragnar Lotbrock. Son surnom, le désossé, revient sur son handicap 
                                de naissance : on ne sait pas exactement de quoi il s’agissait, mais l’on sait qu’il était incapable de se 
                                déplacer sans assistance.`
                                }</p>
                            
                            <p className='text'>{`Dans la culture viking, un invalide était élu des dieux : si on était privé d’une capacité, 
                                elle était compensée par une autre, et en ce qui concerne Ivar, ce n’était pas une vaine phrase. Déjà enfant, 
                                il avait toute l’attention de sa mère, et son père ne délaissait pas son éducation de la guerre. Il a très 
                                vite su se faire respecter (mais surtout se faire craindre) par son entourage.`
                                }</p>

                            <p className='text'>{`Lorsqu’il part en expédition, il mène la grande armée viking aux cotés de ses frères en 
                                Est-Anglie, menant les batailles sur son char de guerre, où il s’illustre par sa férocité au combat, ce 
                                qui lui vaudra le deuxième surnom de « Berserker » qui signifie « guerrier fauve », mais aussi pour son 
                                sens de la tactique, ce qui aura comme effet de surprendre ses ennemis, ceux-ci ayant pour habitude 
                                d’affronter des armées Vikings désorganisées et sans plan de bataille.`
                                }</p>

                            <p className='text'>{`De par ses aptitudes au combat et de son intelligence militaire, il est très vite considéré 
                                comme le chef suprême de la grande armée, devant ses frères ainés. Il décide par après de marcher sur York, 
                                et de poursuivre sa conquête jusque Londres, territoire qui sera nommé « Le Danlaw », avant de remonter vers 
                                Dublin, où il établira sa domination ainsi que sur d’autres terres irlandaises.`
                                }</p>

                            <p className='text'>{` Il sera reconnu comme étant le « Roi de Dublin » étant ainsi le fondateur de la 
                                dynastie « Ui Imair » ou « maison des Ivar », dynastie qui a régné à partir de York sur la Northumbrie, 
                                de la moitié du 9`}<sup>eme</sup> {` siècle jusqu’au 10`}<sup>eme</sup> {` siècle et qui a dominé 
                                la mer d’Irlande à partir du royaume de Dublin.`
                                }</p>

                            <p className='text'>{`Il s’éteint à Dublin en 872, victime d’une maladie soudaine, mais il reste dans les 
                                mémoires de ses hommes, mais surtout dans celles de ses ennemis, comme étant un fédérateur, un guerrier, 
                                un conquérant et un génie militaire, malgré un handicap qui n’en laissait rien présager à 
                                l’aube de sa vie.`
                                }</p>

                            <p className='text'><mark>Les Cobras</mark>{`, dit `}<mark>« les Elus d’Ivar le Désossé »</mark>{`, sont 
                                à l’image de ce dernier et de ses guerriers : Ambitieux, intrépides, malins et unis ! Dans la difficulté, 
                                ils persévèrent ! Affaiblis, ils savent rester grands !  Toujours en quête de gloire dans les épreuves.`
                                }</p>
                        </div>


                    </div>
                </div>
            );
        return componentsToRender

    };
};

export default ScoutsKids









