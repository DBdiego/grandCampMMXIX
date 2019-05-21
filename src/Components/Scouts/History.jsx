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
                            <p className='textTitle'>{`L’Age des Vikings (793-1066)`}</p>

                            <p className='text'>{`Les Vikings sont des habitants de Scandinavie, isolés du reste 
                                de l’Europe par leurs coutumes. A partir du 8`}<sup>eme</sup> {` siècle, les Vikings quittent la 
                                Scandinavie et sillonnent les mers et les fleuves d’Europe à la recherche de nouvelles 
                                terres et de routes commerciales. Guerriers redoutés, ils lancent des raids en Europe, 
                                principalement sur les royaumes d’Angleterre et sur l’Empire Carolingien. Marins expérimentés, 
                                ils atteignent les iles britanniques, l’Espagne, Byzance (Actuelle Istanbul), l’Islande, 
                                et même le Canada, devenant les premiers européens à atteindre le continent américain.`
                                }</p>
                           
                            <p className='text'>{`Au 8`}<sup>eme</sup> {` siècle, les peuples scandinaves sont divisés en une multitude 
                                d’états indépendants, mais par facilité, nous les diviserons en trois grands peuples: 
                                Les Suédois, les Norvégiens, et les Danois. Les habitants de ces contrées isolées 
                                entretiennent très peu de rapports avec le continent et sont une des rares civilisations 
                                d’Europe à ne pas être encore christianisée.`
                                }</p>


                            <p className='text'>{`A la fin du 8`}<sup>eme</sup> {` siècle, les Vikings connaissent un phénomène d’expansion, 
                                les Suédois s’étendent vers l’Est à la recherche de routes commerciales. Les Danois, quant à 
                                eux, lancent des raids vers l’Angleterre et l’Empire Carolingien. Les Norvégiens colonisent 
                                l’Islande, le Groenland et atteignent l’Amérique 500 ans avant Christophe Colomb. La motivation 
                                d’une telle émancipation résulte de leur envie de conquérir, de piller, mais surtout, et on a 
                                tendance à l’oublier, de commercer. Car, oui, les Vikings étaient de habiles commerçants, spécialisés 
                                dans l’exportation d’ambres, de fourrures et d’esclaves, et dans l’importation de produits de luxe 
                                venant de contrées lointaines comme la soie ou la verrerie.`
                                }</p>


                            <br/>
                            <p className='subtitle'>{`Suédois`} </p>

                            <p className='text'>{`Peuple de commerçants, ils s’émancipent vers l’Est. Ils seront surnommés 
                                « Rus’ » par les autochtones. Ils fondent des routes commerciales à travers fleuves et rivières 
                                passant par des villes commerçantes comme Bolgar ou Itiles, routes par lesquelles et atteindront 
                                la mer Noire, et par la suite Istanbul. Dans la foulée, ils en profiteront pour bâtir des forteresses 
                                sur leur passage, et ainsi établir une domination militaire, principalement autour des villes de 
                                Novgorod et de Kiev. Ce territoire sera appelé « Rus’ de Kiev » qui, vous l’aurez compris, donnera son 
                                nom à l’actuelle Russie.`
                                }</p>


                            <br/>
                            <p className='subtitle'>{`Danois`} </p>

                            <p className='text'>{`Très redoutés en Europe, les Danois lancent à la fin du 8`}<sup>eme</sup> {` siècle des raids le long 
                                de la mer du Nord et de la Manche. Ces expéditions ne feront que s‘intensifier suite à la mort du grand 
                                Charlemagne en 814. Mais la région principalement touchée par ces raids n’est autre que la Grande Bretagne. 
                                Elle est alors divisée en plusieurs royaumes saxons dont les principaux sont le Wessex, la Mercie, 
                                l’Est-Anglie et le Northumbrie. Au 9`}<sup>eme</sup> {` siècle, La Grande Armée Païenne débarque sur les côtes d’Est-Anglie, 
                                armée qui sera dirigée par 3 fils de Ragnar Lothbrock : Halfdan, Ubba et le célèbre Ivar. Ils remontent vers 
                                la Northumbrie où ils prendront la ville de York. Ils fonderont alors le royaume de York. Ce nouvel état 
                                s’étendra par après sur une partie de la Northumbrie, la Mercie et l’Est-Anglie. Seul Alfred le Grand, 
                                souverain du Wessex, saura lutter contre l’invasion scandinave. Le nouvel état conquis par les Vikings sera 
                                appelé « Le Danlaw ». Outre l’Angleterre, les Danois ravage l’Ouest de l’Empire Carolingien. Remontant les 
                                fleuves, plusieurs villes à l’intérieur des terres comme Toulouse, Bordeaux ou encore Paris seront pillées. 
                                Pour mettre fin à ces ravage, Charles le Simple, Roi de Francie, trouve un accord avec le chef normand Rollon 
                                et lui offre des terres sur les côtes, la future Normandie. Les Danois déferleront également sur les côtes 
                                espagnoles et sur des iles de la méditerranée.`
                                }</p>


                            <br/>
                            <p className='subtitle'>{`Norvégiens`} </p>

                            <p className='text'>{`Les Norvégiens méritent plus que n’importe quel peuple scandinave le qualificatif d’explorateur
                                et de découvreur. Vers 750, des groupes de Vikings établissent des colonies dans le Nord de l’Ecosse et sur les iles
                                avoisinantes. Se méfiant de la menace normande, Kenneth McAlpin, chef scot, unit les Pictes et les Scots. Cette
                                union pose les bases du futur Royaume d’Ecosse. Vers 860, depuis les iles Féroé, les Vikings découvrent l’Islande,
                                nom que leur donneront ces colonisateurs qui signifie « terre de glace ». Vers 982, Éric le Rouge part en 
                                expédition vers l’ouest et accostera sur une ile qu’il nommera le Groenland, « la terre verte » et y installera 
                                sa domination. Quelques années plus tard, c’est son fils, Leif Erikson, qui partira pour l’actuel Canada. 
                                Il accostera sur une terre qu’il nommera le Markland (Actuel Labrador). Malgré la courte présence des Vikings 
                                en Amérique, Leif demeure le premier Européen à y avoir posé le pied.`
                                }</p>

                            <p className='text'>{`Pendant près de 250 ans, ceux qu’on appelait les Normands en France, les Danois en Angleterre
                                 ou les Rus en Orient, sillonneront les mers et les fleuves et vont parcourir plusieurs continents : de la mer 
                                 Baltique à la mer Noire, de l’empire Byzantin à l’Angleterre, les scandinaves laisseront une empreinte 
                                 significative en tissant des liens commerciaux, et en fondant des colonies. Mais la christianisation perturbera l
                                 e monde viking : au 11`}<sup>eme</sup> {` siècle, la Norvège, la Suède et le Danemark deviennent des royaumes médiévaux centralisés. 
                                 La pratique des raids est abandonnée mettant fin à l’Age des Vikings.`
                                }</p>

                        </div>

                        <div className={'textBox '+ section}>
                            <p className='textTitle'>{`Habitat`}</p>

                            <p className='text'>{`Les Vikings vivent dans des fermes aux bâtiments multiples dont les murs sont en tourbe, 
                                dotés d'une pièce principale pour les humains. Il n'y a ni fenêtres ni cheminées mais une fosse à feu, 
                                située au centre qui sert à chauffer et éclairer. Les espaces libres sont occupés par des banquettes dont 
                                le couvercle se relève et qui contient la literie ; ces banquettes sont recouvertes de peaux et de fourrures. 
                                Les tables sont constituées d'une planche articulée sur deux pieds que l'on enfonce dans le sol au moment des 
                                repas. Le sol est en terre battue. `
                                }</p>
                           
                            <p className='text'>{`La lampe est un récipient semi sphérique où brûle du suif ou de l'huile de poisson. 
                                Le métier à tisser est le meuble le plus important.`
                                }</p>

                            <p className='text'>{`Le toit est recouvert de lattes de bois couvertes elles-mêmes de tourbe gazonneuse. 
                                L'habitat n'est jamais groupé`
                                }</p>
                        </div>

                        <div className={'textBox '+ section}>
                            <p className='textTitle'>{`Les Vêtements`}</p>

                            <p className='text'>{`Le Viking porte un pantalon long et flottant; sur la tête un bonnet de feutre ou de laine. 
                                Les sous-vêtements n'existent pas encore. Il garde sa barbe et une longue chevelure.`
                                }</p>
                           
                        </div>

                        <div className={'textBox '+ section}>
                            <p className='textTitle'>{`Les armes`}</p>

                            <p className='text'>{`L'arme favorite des Vikings était la hache qu'ils maniaient avec une grande dextérité; 
                                venait ensuite la longue épée plate à double tranchant, puis la lance, l'arc et les flèches et le couteau 
                                en fer à un tranchant. Les objets retrouvés dans les tombes des Vikings indiquent que ceux-ci n'utilisaient 
                                jamais toutes ces armes à la fois. Pour se protéger au cours d'une bataille, les guerriers revêtaient une 
                                cotte de mailles en fer, un casque rond en cuir ou en fer et se protégeaient avec un bouclier en bois. 
                                Les sagas racontent que certains Vikings étaient des combattants particulièrement féroces, que l'on appelait 
                                berserks et qui se battaient sans armure, "comme des bêtes sauvages". Ils furent sans doute largement 
                                responsables du sentiment de terreur qui se répandit en Europe à cette époque. `
                                }</p>
                        </div>


                        <div className={'textBox '+ section}>
                            <p className='textTitle'>{`Vie pratique : une année`}</p>

                            <p className='text'>{`L'année débute avec le mois d'avril, le mois du coucou, des semailles. Il faut aussi couper 
                                du bois. En mai, les Vikings s'occupent de leurs moutons, chassent le faucon, pêchent (notamment les cétacés). 
                                Mi-juin est le mois du soleil vénéré et du ping, la grande assemblée et des grandes expéditions. Le ping est 
                                l'assemblée où la loi est lue. Les juges étaient le plus souvent des voisins ou des dignitaires locaux. La peine 
                                de mort n'existe que pour des cas très graves (viol, vol et le meurtre d'une victime sans défense, magie ou 
                                sorcellerie). On condamne souvent à l'amende ou au bannissement dans les cas plus graves. `
                                }</p>
                           
                            <p className='text'>{`En juillet, viennent les foins. En septembre, on commence à enterrer la viande pour la surgeler 
                                en prévision de l'hiver. Le Viking chasse à l'arc et à l'épieu. La pêche se poursuit pendant les mois d'hiver en 
                                forant un trou dans la glace. Ils fabriquent également des serrures et des clefs ; se livrent à des joutes d'énigmes pour 
                                passer le temps. `
                                }</p>

                            <p className='text'>{`Cette longue période est rythmée par les fêtes (celle du solstice d'hiver durant laquelle un grand 
                                sacrifice est pratiqué). `
                                }</p>

                        </div>

                        <div className={'textBox '+ section}>
                            <p className='textTitle'>{`La femme et l'enfant`}</p>

                            <p className='text'>{`La femme accouche en position accroupie ou à genoux ; l'enfant à sa naissance est aspergé 
                                d'eau ce qui peut toutefois nous rappeler le baptême. Le père peut le rejeter et le laisser aux bêtes sauvages. 
                                Dans le cas contraire, il doit lui donner un nom. `
                                }</p>
                           
                            <p className='text'>{`L'enfant est très vite considéré comme un adulte (dès l'âge de 14 ans) ; il est élevé de manière 
                                correcte (les archéologues ont retrouvé par exemple des jouets). Un cadeau est donné lors de la première dent.`
                                }</p>

                            <p className='text'>{`L'enfant doit aussi se livrer aux sports : équitation et jeu des armes pour les garçons. Les 
                                enfants illégitimes entrent dans la famille par une cérémonie étrange : le père doit abattre un bœuf puis fabriquer 
                                une chaussure avec le cuir de la patte droite de la bête ; cette chaussure est ensuite essayée par chaque membre 
                                de la famille.`
                                }</p>

                        </div>

                        <div className={'textBox '+ section}>
                            <p className='textTitle'>{`Le Mariage`}</p>

                            <p className='text'>{`Le mariage est le plus important dans la vie sociale des Vikings, où les liens du sang 
                                l’emportent sur tous les autres. De plus, la femme, très considérée, apporte à son époux et au clan de 
                                celui-ci la force, les relations et les biens. La décision est prise par les parents des jeunes gens. `
                                }</p>
                           
                            <p className='text'>{`Le candidat doit faire preuve de sa décision par des cadeaux qui constituent une sorte 
                                d’achat de sa future épouse. Le niveau de fortune doit être à peu près le même de part et d’autre, pour 
                                éviter l’affaiblissement de l’un des clans. La cérémonie des noces est très simple : l’union est consacrée 
                                à l’aide d’un marteau, attribut rituel du dieu Thor, en présence des membres des deux clans.`
                                }</p>

                            <p className='text'>{`Le mariage est une étape cruciale de l'existence ; les trois jours, banquet nuptial 
                                ponctué de déclamation de poèmes ou de récits, de chants et danses sont la tradition. L'hydromel 
                                coule à flot. Le divorce existe mais il est très rare. De plus, l'homme ne peut divorcer et seule 
                                la femme en a le droit. `
                                }</p>

                            <p className='text'>{`La jeune épouse part habiter dans la famille de son mari. Mais elle conserve son nom 
                                et son appartenance au clan paternel. Maîtresse de la maison, elle garde à sa ceinture les clefs de la 
                                demeure et du coffre aux trésors. On attend d’elle un intérieur bien tenu, et des enfant nombreux et 
                                vigoureux.`
                                }</p>
                        </div>
                    </div>
                </div>
            );
        return componentsToRender

    };
};

export default History









