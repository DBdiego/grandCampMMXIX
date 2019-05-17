import React, { Component } from 'react'                              ;
import BackgroundImage      from './Images/Background.jpg'; //'./Images/Background_YourViking.jpg' ;
import logo                 from './logo.svg'                         ;
import Header               from '../General/Header.jsx'              ;
import '../Layer2.css';  

class LouvettesKids extends Component {

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
                            <p className='textTitle'>{`Athene (Blancs)`}</p>

                            <p className='text'>{`Oh vous grandes guerrières Blanches de la Grèce antique, cette année, Athéna, déesse 
                                de la guerre, vous charge de défendre et gérer cette magnifique ville qu’est Athènes. Il s’agit d’une 
                                grande responsabilité ! En effet, votre ville n’est pas seulement une parmi tant d’autres…Non, Athènes 
                                est la capitale de la Grèce ! `
                                }</p>

                            <p className='text'>{`Pour connaitre au mieux cette cité, il vous faut connaitre son histoire et ses légendes… `
                                }</p>

                            <p className='text'>{`Athènes fut édifiée en 800 avant J-C et d’après nos historiens, elle est l’une des plus 
                                anciennes villes du monde. Elle se fonda grâce à la fusion de différents villages. De nombreux théâtres, 
                                musées et monuments historiques font la richesse d’Athènes.`
                                }</p>

                            <p className='text'>{`Selon la légende, Egée aurait été un des rois d’Athènes. Il eut un fils, Thésée, qu’il ne 
                                retrouva qu’à l’âge adulte. À cette époque, Athènes vivait dans la peur. En effet, Minos, roi de Crète, ayant 
                                vaincu les Athéniens exigeait que tous les 9 ans, sept jeunes hommes et sept jeunes femmes soient livrés au 
                                Minotaure. Le Minotaure était un monstre au corps d'homme et à tête de taureau enfermé dans un grand Labyrinthe. 
                                Thésée décida donc de mettre fin à ces massacres en se rendant en Crète avec les jeunes victimes. `
                                }</p>

                            <p className='text'>{`La fille de Minos, Ariane, tomba éperdument amoureuse de Thésée. Pour sauver l’homme qu’elle 
                                aimait, la jeune fille lui confia une pelote de laine afin qu’il puisse retrouver son chemin dans le labyrinthe. 
                                Celui-ci entra le labyrinthe, tua le minotaure et en sorti aussitôt. Dès lors, il rentra chez lui à Athènes. 
                                En voyant les voiles noirs du bateau de Thésée, son père sauta dans la mer croyant que son fils avait été vaincu. 
                                C’est ainsi que Thésée devint roi d’Athènes. Durant son règne, il dirigea l’unification de l’Attique, grande 
                                région de Grèce.`
                                }</p>

                            <p className='text'>{`Outre toute son histoire et ses légendes, Athènes est également une capitale de la mode. Les 
                                jeunes Athéniennes sont habillées avec les robes et les sandales dernier cri. Leurs robes se composent d’un 
                                simple drap en lin cintré à la taille. Il peut être ornementé de motifs. Plus les robes sont colorées, à motifs 
                                et longues, plus la classe sociale des Athéniennes était élevée. `
                                }</p>

                            <p className='text'>{`N’hésitez pas chère guerrière à vous inspirer des légendes, de l’histoire, de la mode 
                                Athénienne et de la déesse Athéna pour vous déguisez au mieux ! `
                                }</p>

                            <p className='text'>{`Athéna vous attend avec impatiente afin de pouvoir établir avec vous ses plans d’attaques. 
                                Et surtout, n’oubliez pas les filles, nous vaincrons !`
                                }</p>

                        </div>


                        <div className={'textBox '+ section}>
                            <p className='textTitle'>{`Pella (Noirs)`}</p>

                            <p className='text'>{`Mes chères chasseresses, moi Artémis, fille de Zeus, déesse de la chasse et de la nature, vous 
                                choisit pour devenir les représentantes mortelles de mon agilité, ma finesse et ma pureté. Ne vous laissez pas 
                                tromper par ces traits de caractère qui me définisse, car, à l’image de Pella, la ville Macédonienne, je recèle de 
                                caractères qui s’avère être ravageur pour ceux qui ose me contrarier.`
                                }</p>

                            <p className='text'>{`Laissez-moi vous narrer l’avènement de la grande Pella`
                                }</p>

                            <p className='text'>{`Pella est une ville du Nord de la Grèce, dans une région appelée “Macédoine”. Jadis, elle fut un 
                                carrefour important entre la Thrace, un pays barbare, et la Grèce. Au fil des année, il y eu un brassage de cuture, 
                                ce qui laissa le reste de la Grèce pensé que Pella devint à son tour une ville barbare. Snobée par le reste du pays, 
                                Pella fut délaissé et sombra dans l’indifférence des grandes villes comme Athènes. `
                                }</p>


                            <p className='text'>{`Ce fut ainsi jusqu’au jour où Archélaos, roi de Macédoine, en fit sa capitale. Pella redevint une 
                                grande ville grecque, mais pas aux yeux des grandes puissances. Parmi ces dernières, la première à reconsidérer Pella 
                                fut la redoutable Sparte, qui se vit avoir son soutient pendant la guerre du Péloponnèse, guerre qui entrainera la 
                                chute de l’Empire athénien. Suite à cela naquit un grand mépris entre Pella et la ville d’Athéna.`
                                }</p>

                            <p className='text'>{`Mais c’est quand Philippe II hérita du trône pellien que la ville se vit enfin devenir une grande 
                                puissance grecque. En effet, le nouveau roi multipliait les conquêtes au Nord de la mer Egée dans le territoire thrace. 
                                C’est à ce moment-là que Pella inspira non seulement la considération dans toute la Grèce, mais y inspira aussi la crainte.`
                                }</p>

                            <p className='text'>{`Certaines d’entre elles, bien avisées, en firent une alliée. Mais ce ne fut pas le cas de Athènes qui, 
                                étouffée par les rancœurs d’antan, vit une partie de la Grèce lui tourner le dos. Ce n’était qu’une question de temps 
                                avant que la guerre éclate entre l’ancienne grande puissance du pays, et la nouvelle. La ville de Thèbe prit alors parti 
                                du coté athénien.`
                                }</p>

                            <p className='text'>{`Ce fut une guerre brève mais impulsive, qui se solda par la défaite athénienne lors de la bataille de 
                                Chéronée, où le fils de Philippe II s’illustra, un natif de Pella appelé Alexandre, que l’on nommera plus tard 
                                “Alexandre Le Grand”.`
                                }</p>

                            <p className='text'>{`A la mort de Philipe, Athènes en profita pour relancer les hostilités, mais Alexandre fit rapidement 
                                taire ces bénignes ambitions en prenant la ville de Thèbes. C’est le jour où Pella devint la seule grande puissance du 
                                pays. Alexandre sera le plus grand conquérant de tous les temps.`
                                }</p>

                            <p className='text'>{`Voyez, mes enfants ! Pella fut le marteau qui forgea l’empire macédonien, et vous en êtes les héritières, 
                                vous êtes les descendantes de Philippe et d’Alexandre ! Le monde qui s’offre à vous ne peut que vous craindre. Mais les 
                                rivaux se feront nombreux, que ça soit les autres ville grecques, ou au-delà de frontière du pays.`
                                }</p>

                        </div>

                        
                        <div className={'textBox '+ section}>
                            <p className='textTitle'>{`Sparte (Jaunes)`}</p>

                            <p className='text'>{`Spartiate ! Pour la gloire de Votre Mère Patrie !`
                                }</p>

                            <p className='text'>{`Moi, Ares, fils de Zeus et dieu guerrier, vous ai choisie pour devenir mes légendes parmi 
                                les mortels, les hérauts de Thanatos. Et quel meilleur choix que celui de la puissante Sparte pour incarner 
                                l’honneur et l’art de la guerre, jumelant admiration et effrois aux yeux des cités grecques et même au-delà. 
                                Le monde ne peut que craindre les descendantes d’Héraclès en personne.`
                                }</p>

                            <p className='text'>{`Rappelez-vous, Braves Guerrières, des exploits de vos ancêtres, quand le grand Ménélas et 
                                son frère Agamemnon ont précipité la somptueuse Troie vers sa chute. Ce fut lorsque la belle Hélène trahi les 
                                sien pour rejoindre Paris, fils de Priam, ce qui offusqua son mari Ménélas, roi de Sparte. Celui-ci pris la 
                                mer avec des dizaines de milliers de soldats pour récupérer sa femme, et défia les murs de la ville pendant 
                                plus de 10 ans avant de les faire sombrer. `
                                }</p>

                            <p className='text'>{`Rappelez-vous quand Léonidas et ses 300 guerriers furent les derniers remparts de toutes 
                                la Grèce face aux assauts incessants de dizaines de milliers de soldats perses. Lorsque leur roi, Xerxès, 
                                eut pour ambition de conquérir la Grèce. Ce fut l’une des rare fois ou tous les Grecs furent unis contre un 
                                ennemi commun. Ce qui nous amène à la célèbre bataille des Thermopyles. Alors que les Grecs unis se battaient 
                                cote à cote face à l’envahisseur, ces derniers prirent un avantage certain. C’est alors que les généraux ordonnèrent 
                                un repli stratégique. Mais un seul d’entre eux s’y refusa : Léonidas, roi de Sparte, décida de rester couvrir 
                                la retraite des soldats grecs avec ses 300 hommes, car selon la légende, un spartiate ne recule jamais.`
                                }</p>

                            <p className='text'>{`Souvenez-vous quand vous fûtes les seules à rivaliser et à contester l’autorités de la 
                                puissante Athènes. Alors que cette dernière avait une main prise sur toute les villes grecques grâce au 
                                commerce sur lequel la ville d’Athéna prélevait un impôt important, Sparte fut la seul qui ne courba pas 
                                l’échine et organisa l’offensive qui mis un terme à l’expansionnisme Athénien.`
                                }</p>

                            <p className='text'>{`Oui, mes filles ! Sparte est majesté, mais ne compte pas en rester là : Par-delà les mers 
                                et montagnes, du confins de l’Indus aux colonnes d’Héraclès, ils existent des terres riches et des peuples 
                                barbares et insoumis. Mais c’est le genre de défis que seul vous, mes spartiates, pouvez relever. Gardez à 
                                l’esprit que vos sœurs de toute la Grèce en feront de même. Elles pourront s’avérer être des alliés utiles, 
                                ou des rivales redoutables.`
                                }</p>

                        </div>

                        
                        <div className={'textBox '+ section}>
                            <p className='textTitle'>{`Delphes (Bleus)`}</p>

                            <p className='text'>{`Delphes est situé sur les flancs du mont Parnasse, sommet qui culmine à 2 459 mètres d'altitude 
                                et domine la Grèce centrale. Il se trouve implanté sur une pente très raide. Un peu plus bas, un autre temple est 
                                dédié à Athéna Pronaia, divinité qui « protège » ou « précède » le sanctuaire.`
                                }</p>
                            
                            <p className='text'>{`Le nom de Delphes vient du mot « dauphin » : dans la poésie homérique, Apollon aurait pris la 
                                forme de cet animal pour attirer les marins crétois chargés d'instaurer son culte sur le site.`
                                }</p>
                            
                            <p className='text'>{`Delphes est le site d'un sanctuaire panhellénique (complexes architecturaux extérieurs aux cités. 
                                Ils constituent les seuls lieux où tous les anciens Grecs, et certains barbares prennent part à des célébrations 
                                religieuses communes afin d’honorer le ou les mêmes dieux). Il abrite également l'Omphalos ou « nombril du monde ».  
                                L’omphalos est un symbole du centre du monde. Il était généralement matérialisé sous l'apparence d'une pierre sacrée. 
                                Le plus célèbre est justement celui de Delphes.  Cette ville est du VIe au IVe siècle av. J.-C. le véritable centre et 
                                le symbole de l'unité du monde grec.`
                                }</p>

                            <p className='text'>{`Le temple abrite la statue de la divinité : le dieu est réputé l'habiter, au moins par moments. 
                                À Delphes, le temple d'Apollon revêt une importance particulière, puisqu'il abrite l'oracle. Il est construit, selon 
                                la tradition, sur une faille volcanique qui plonge dans les entrailles de la terre et met les hommes en communication 
                                avec le dieu Apollon.`
                                }</p>
                        </div>


                        <div className={'textBox '+ section}>
                            <p className='textTitle'>{`La cité de Thèbes (Rouges)`}</p>

                            <p className='text'>{`Zeus étant tombé amoureux d’Europe, la fille du roi Agénor et de la reine Téléphassa, ne voulait pas 
                                rendre son actuelle épouse, Héra, jalouse. Pour ce faire, Zeus prit l’apparence d’un taureau pour enlever Europe. Le roi 
                                Agénor, furieux, envoya ces fils chercher leur sœur.`
                                }</p>
                            
                            <p className='text'>{`Un de ceux-ci, Cadmus, décida de suivre la première vache qu’il vit. Cette vache l’emmena jusqu’en Béotie 
                                (région de la Grèce centrale principalement constituée de prairies et de pâturages). Cadmus décida alors d’y construire une 
                                ville qui prit son nom.`
                                }</p>

                            <p className='text'>{`Des années plus tard, les descendants de Cadmus, Amphion et Zéthos, rebaptisèrent la ville de leur aïeul 
                                du nom de Thèbes en l’honneur à Thébé, fille du dieu fleuve Asopos.`
                                }</p>

                            <p className='text'>{`Bien des années plus tard, Thèbes fut attaquée par un monstre nommé Le Sphinx. Ce dernier était envoyé 
                                par Héra (sœur de Zeus) qui voulait se venger du roi Laïos, coupable d’avoir enlevé le jeune Chrysippe par amour. `
                                }</p>

                            <p className='text'>{`Le Sphinx a le corps d’un lion mais le visage d’une femme. Il attaqua alors la cité de Thèbes pour punir 
                                ses habitants suite aux actes de leur roi Laïos, assassiné. La bête ravageait les champs et terrorisait les populations. 
                                Le Sphinx qui ne voulait pas partir, dit qu’il ne partirait que si quelqu’un arrive à répondre à son énigme. Et toutes 
                                personne qui échouerait serait tuée. `
                                }</p>

                            <p className='text'>{`Suite à cela, le régent Créon promis la main de la reine veuve Jocaste et la couronne de Thèbes à 
                                quiconque qui réussirait cette fameuse énigme. `
                                }</p>

                            <p className='text'>{`Le temps passa et beaucoup de valeureux guerriers se prêtèrent au jeu mais perdirent la vie. Jusqu’au 
                                jours où Œdipe arriva. Ce jour là, le Sphinx lui posa la question : « Quel être, pourvu d’une seule voix, a d’abord quatre 
                                jambes le matin, puis deux jambes le midi, et trois jambes le soir ? »`
                                }</p>

                            <p className='text'>{`Après maintes réflexions, Œdipe répondit : « Il s’agit de l’Homme, en effet, lorsqu’il est enfant, il a 
                                quatre jambes car il se déplace à quatre pattes ; adulte, il marche sur deux jambes et vieux, il a trois jambes car il doit 
                                s’appuyer sur son bâton pour marcher.`
                                }</p>

                            <p className='text'>{`Le monstre, furieux, tint sa promesse et se jeta du haut de son sommet et mourut. Tout rentrait alors dans 
                                l’ordre dans la Béotie et Créon, fidèle à sa parole, fit Œdipe roi de Thèbes en épousant la reine Jocaste.`
                                }</p>

                            <p className='text'>{`Mais ce que Œdipe ignorait, c’est qu’il venait d’épouser sa mère biologique. En effet, lors du mariage entre 
                                Laïos et Jocaste, un oracle apparu provenant de Delphes. Celui-ci avertit le roi que si un héritier venait à voir le jour, 
                                il tuera son père et épousera sa mère. Laïos, prudent durant des années, l’oublia presque jusqu’au jour où sa femme lui annonça 
                                la naissance de leur fils Œdipe. A ce moment donné, Laïos bien embêté, décida d’abandonner son fils sur le mont Cithéron. Œdipe 
                                fut recueillit par le roi de Corinthe.`
                                }</p>

                            <p className='text'>{`Des années plus tard, le jeune enfant devint adulte et décida de fuir cette ville qu’il ne considérait pas 
                                comme sa maison. Ce jour là alors qu’il prenait la route, il croisa un convoi qui lui, allait vers la ville de Delphes. 
                                Ce que Œdipe ignorait, c’est que ce convoi qui venait de tuer l’un de ses chevaux, transportait le roi Laïos. Œdipe étant 
                                outré par cet acte barbare, s’en prit au convoi et les tua tous jusqu’au dernier, même le roi. Il venait donc de tuer son 
                                père et son père ignorait qu’il venait de se faire assassiner par son propre fils.`
                                }</p>

                            <p className='text'>{`L’oracle a bien eu lieu !`
                                }</p>

                            <p className='text'>{`Souvent quand on parle de la Grèce antique, Athènes et Spartes sont les cités qui ressortent le plus. On en 
                                oublie presque que Thèbes fut également une citée avec une puissance militaire importante.`
                                }</p>

                            <p className='text'>{`En effet, les Thébains participèrent à beaucoup de batailles comme en 373 av J.C., lorsqu’ils détruisirent 
                                Platées tout en violant le traité de paix commune entre les principales puissances de Grèce. Sparte, outrée par cet acte, 
                                décida d’attaquer Thèbes mais ils furent confrontés à une défense robuste menée par le roi Epaminondas et durent abandonner 
                                cette bataille. Les Thébains envahirent par la suite la Laconie et ce jusqu’à la mer. Ensuite ils libérèrent la ville de Messène 
                                qui était envahie par Sparte.`
                                }</p>

                            <p className='text'>{`Thèbes avait alors retrouvé son contrôle sur la Béotie et était redouté de tous pour ces stratégies militaires. 
                                Sparte n’était plus un grand danger pour Thèbes mais Athènes elle restait pourtant un adversaire dangereux.`
                                }</p>

                            <p className='text'>{`Une anecdote que l’histoire ne conte que très rarement, est que sans 6 valeureuses guerrières menées par leurs 
                                Lieutenants, Thèbes serait certainement restée une petite citée affaiblie et vouée à être assiégée. Ces thébaines qui avaient 
                                chacune des compétences particulières, que ce soit dans la stratégie, dans l’art de l’esquive, du fait d’avoir une vue de faucon 
                                pour tirer une flèche à plus d’1km sur l’ennemi ou que ce soit dans la force, dans l’agilité de s’infiltrer dans des lignes 
                                ennemies pour récolter des informations ou tuer un roi ennemi, ou encore dans la beauté pour tromper plus facilement les 
                                guerriers adverses.`
                                }</p>
                        </div>



                        <div className={'textBox '+ section}>
                            <p className='textTitle'>{`Corinthe (Verts)`}</p>

                            <p className='text'>{``
                                }</p>
                            
                            <p className='text'>{``
                                }</p>
                        </div>


                    </div>
                </div>
            );
        return componentsToRender

    };
};

export default LouvettesKids









