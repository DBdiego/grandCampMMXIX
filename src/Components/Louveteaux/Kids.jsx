import React, { Component } from 'react'                   ;
import BackgroundImage      from './Images/Background.jpg' ;
import Header               from '../General/Header.jsx'   ;
import '../Layer2.css';  

class LouveteauxKids extends Component {

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
                            <p className='textTitle'>{`Babylone (Verts)`}</p>

                            <p className='text'>{`Babylone est une ville de Mésopotamie, située sur l’Euphrate (fleuve du Moyen-Orient).`
                                }</p>

                            <p className='text'>{`C’est une des villes les plus anciennes du monde. Grâce au fleuve qui la traverse, 
                                l’agriculture et le commerce ne cessent de se développer. La ville ne disposant pourtant pas de défenses 
                                naturelles, elle assure sa sécurité en entrainant une armée hors du commun menée par un chef  dont la logique 
                                et les stratégies permettent de grandes victoires. Si parfois des agresseurs déterminés parviennent à saccager 
                                la cité, celle-ci parvient toujours à se relever et à en sortir encore plus forte. 
`
                                }</p>

                            <p className='text'>{`Babylone est également très connue pour ses Jardins Suspendus de la reine Sémiramis, 
                                qui font partie de la liste des Sept Merveilles de l’Antiquité.`
                                }</p>

                            <p className='text'>{`La ville  est tellement puissante que par deux fois, avant d'être absorbée par la Perse, 
                                Babylone a connu sa propre expansion au point de devenir un empire de première importance. Ces deux phases de 
                                développement furent suffisamment remarquables pour lui valoir d'être placée dans l'histoire aux côtés de deux 
                                grands peuples mésopotamiens, les Sumériens et les Assyriens.`
                                }</p>

                            <p className='text'>{`Les Babyloniens parlent l’akkadien et leur écriture est le cunéiforme. Cette langue s'imposera 
                                dans toute la Mésopotamie. `
                                }</p>

                            <p className='text'>{`La région est mise en valeur par des paysans pratiquant l'irrigation grâce au Tigre et à l'Euphrate. 
                                L'artisanat est tourné vers les produits de luxe. Le commerce international étant très actif, Babylone bénéficie 
                                d'une situation favorable sur les grands axes commerciaux.`
                                }</p>

                            <p className='text'>{`Babylone est donc une cité en plein essor de par son agriculture, son armée indomptable, son sens 
                                du commerce mais également son goût pour les belles choses et son éducation. Ils ne sont cependant pas à l’abris du danger 
                                qui les menace de tous les côtés. En effet, beaucoup de cités voudraient les égaler et bien qu’aucune ne le peut, elles 
                                sont prêtes à tout pour renverser cette cité d’Or. `
                                }</p>

                            <p className='text'>{`Alors`}<mark>Satrape Baudoin</mark>{`, sera tu capable mener ta cité vers la victoire ? `
                                }</p>

                        </div>


                        <div className={'textBox '+ section}>
                            <p className='textTitle'>{`Kandahar (Jaunes)`}</p>

                            <p className='text'>{`L’empire perse est inconstablement l’un des plus grands empires de l’hisoire ! Celui-ci s’étend 
                                à l’est jusqu’en Asie centrale où se trouve la cité de Kandahar dirigée par le riche et puissant`}<mark>Satrape Diego</mark>{`. 
                                Cette ville fortifiée est devenue un important avant-poste de l’empire perse de par sa position stratégique très 
                                intéressante le long de plusieurs routes commerciales. Elle est également réputée pour ses nombreuses mines d’or 
                                et son sol très fertile.`
                                }</p>

                            <p className='text'>{`Les légendes racontent que la cité serait entourée d’une muraille dépassant les 30m de haut et qu’elle 
                                comprendrait une cinquantaine de forteresses. On raconte également que le désert entourant la ville est jonché de 
                                cadavres qui pourrissent dans le but de dissuader les ennemis d’attaquer la ville… Malheureusement, personne n’a 
                                jamais survécu pour pouvoir en témoigner…`
                                }</p>

                            <p className='text'>{`Mais aujourd’hui, l’heure est grave ! Le monde méditerranéen est en plein chaos et la menace plane 
                                sur l’empire perse. En plus des attaques provenant des autres cité, des éclaireurs ont repéré des invasions un peu 
                                partout ! Au sud par les Égyptiens, au nord les Gaulois, les Romains et les Grecs à l’ouest. Afin de contrer les 
                                offensives ennemies et afin de protéger son empire, l’Impératrice Akéla invite toutes ses troupes à se réunir à 
                                Hollange. Elle compte évidemment sur le Satrape Diego accompagné de son plus fidèle conseiller Pierrick ainsi 
                                que de ses meilleurs combattants pour remporter l’ultime bataille qui les attend.`
                                }</p>

                        </div>

                        
                        <div className={'textBox '+ section}>
                            <p className='textTitle'>{`Ispahan (Bleus)`}</p>

                            <p className='text'>{`La plus grande et glorieuse nation du monde est sans conteste celle des Perses. Mais s’est-on déjà 
                                demandé quelle était la plus grande et puissante ville de l’Empire ? La réponse est évidente, la cité d’Ispahan, menée 
                                d’une main de fer par son `}<mark>Satrape Léopold</mark>{`, est une ville dont la beauté et la richesse fait pâlir les plus riches nations 
                                du monde. La fortune de cette ville vient principalement des carrières sans fond de lapis lazuli, une pierre bleue dont 
                                la beauté n’équivaut que son prix.`
                                }</p>

                            <p className='text'>{`La verdure de cette ville entourée d’un grand désert aride fait de cette cité une oasis où tous les 
                                amis sont les bienvenus pour se reposer et où aucun ennemi ne peut s’aventurer sans espérer vivre longtemps.`
                                }</p>

                            <p className='text'>{`La puissance de cette métropole ne s’arrête pas là. Les soldats d’élite de l’Impératrice Akéla, 
                                connus sous le nom d’« Immortels » ,sont choisis, élevés et entrainés dès la naissances dans la ville d’Ispahan. 
                                Ces 10 000 hommes mettent les plus grands armés à genoux sans difficulté, la légende raconte qu’il est impossible 
                                de tuer ces soldats. Peu importe le nombre de coups qu’ils reçoivent. Ils ne laissent aucun survivant sur le champ de bataille.`
                                }</p>

                            <p className='text'>{`Des générations entières se sont battues, ont saigné, se sont sacrifiés pour élever cette magnifique cité 
                                d’Ispahan à sa grandeur d’aujourd’hui. Il est maintenant temps pour son roi et ces généraux de s’opposer à la menace qui arrive. 
                                Les autres cités qui jalousent cette richesse n’hésiteront pas à se battre pour ce l'approprier, au-delà de la Perse 
                                d’autres nations telles que les romains, les grecques, les égyptiens et même les gaulois commencent à vouloir s’opposer 
                                au tsunami des armées Perses. Le `}<mark>Satrape Léopold</mark>{`, soutenu par son fidèle conseiller `}<mark>Arnaud</mark>{`, 
                                devront être prêt à tout pour élever cette ville au-dessus des autres, il devront prouver à leur Impératrice ce que veut dire 
                                fidélité, richesse et puissance !!!!`
                                }</p>

                        </div>

                        
                        <div className={'textBox '+ section}>
                            <p className='textTitle'>{`Erzurum (Rouges)`}</p>

                            <p className='text'>{`« De toutes les villes, la plus puissante et la plus riche est sans conteste Erzurum »  Kaa : 
                                comptable de l'Impératrice et haut magistrat. Nombreuses sont les villes jalouses de la puissance d’Erzurum. Sa position dans 
                                l'Empire Perse en fait depuis la nuit des temps une ville capitale. Aussi bien pour la santé économique que militaire 
                                de l'Empire. En effet situé à 1945 mètres d'altitude sur le haut plateau arménien, ses immenses remparts en font la 
                                place forte de la région. Fortement militarisée depuis sa création, les plus grands guerriers du monde Perse y sont nés. 
                                Ce n’est pas pour rien qu’elle est dirigée par le grand `}<mark>Satrape Maximilien</mark>{` et son second `}<mark>Noa</mark>{`.`
                                }</p>
                            
                            <p className='text'>{`Mais une Grande armée ne fait pas tout ! Encore faut-il là payer, Pour cela on peut compter sur les terres 
                                fertiles en blé de la région ainsi que sur l’Ambre d’Erzurum (aussi appelé Ambre Noir) une pierre précieuse très prisée en 
                                Perse comme dans le reste du monde. Son exploitation assure à la ville une prospérité économique sans égal.  Toute cette 
                                richesse peut se voir dans l’équipement de ses soldats.  À la fois sobre et complet l’équipement du fantassin lui permet 
                                de réagir rapidement à tout type d’ennemis. Puissante et sans failles cette armée ne recule jamais face à l’adversité peu 
                                importe les difficultés. Dirigé par des grands généraux dont la beauté de leurs armures n’a d’égale que leurs ingéniosités. 
                                Ils font la fierté de la Perse tout entière et sont reconnus à travers le monde entier !!!`
                                }</p>
                        </div>


                        <div className={'textBox '+ section}>
                            <p className='textTitle'>{`Arménis (Blancs)`}</p>

                            <p className='text'>{`Il est incontestable que la cité d’Arménis était une des plus grandes puissances au monde. L'histoire 
                                de cette citée se déploie sur plusieurs millénaires, depuis la Préhistoire. Les Arméniens, après s'y être fixés, 
                                développèrent une civilisation originale bien que située au carrefour de grands empires – perse, séleucide, parthe, romain, 
                                sassanide, byzantin, arabe, turc seldjoukide, mongol, turc ottoman, séfévide, russe – qui vont se disputer son territoire. 
                                Face aux invasions, les Arméniens ont toujours fait preuve d'une volonté farouche de conserver leur identité nationale. 
                                En effet, ils sont fiers et valeureux et en aucun cas ils ne laisseront des étrangers les envahir et changer leurs mœurs.`
                                }</p>
                            
                            <p className='text'>{`Même si leur culture est un peu influencée par leurs voisins dans de nombreux domaines (musique, cuisine, 
                                littérature, architecture, etc.), les Arméniens ont puisé dans une version nationale du christianisme enracinée dans leur 
                                langue la force de surmonter les pires épreuves. `
                                }</p>

                            <p className='text'>{`En effet, attaqués de toute part mais principalement par les Turcs, ils perdent un grand nombre de leur 
                                population. Mais la bravoure et la volonté des Arméniens leur permet toujours de surmonter ces épreuves et en ressortent 
                                à chaque fois plus forts.`
                                }</p>

                            <p className='text'>{`C’est sous Tigrane II le Grand que le Royaume d’Arménie atteint son expansion maximale. Il entretient de 
                                bonnes relations diplomatiques avec les régions qui l’entourent. Il avait bien compris que ses chances étaient meilleures 
                                s'il tournait son regard vers l’Occident romain et eut donc l’excellente idée d’épouser la fille d’une des personnes 
                                les plus influentes là bas (Mithridate VI du Pont). Cette alliance lui permit de mener par la suite une série de campagnes 
                                militaires qui aboutirent à l’occupation d’une bonne partie de l’Anatolie orientale.`
                                }</p>

                            <p className='text'>{`C’est donc par l’intelligence et par l’établissement de grandes stratégies qu’Arménis a atteint son apogée. 
                                La même chose est attendue des blancs et de leur `}<mark>Satrape Brieuc</mark>{` lors de ce grand camp d’unité.`
                                }</p>

                        </div>


                    </div>
                </div>
            );
        return componentsToRender

    };
};

export default LouveteauxKids









