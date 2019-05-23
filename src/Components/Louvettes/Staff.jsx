import React, { Component } from 'react'                   ;
import BackgroundImage      from './Images/Background.jpg' ;
import Zeus                 from './Images/Zeus.png'       ;
import Athena               from './Images/Athena.jpg'     ;
import Artemis              from './Images/Artemis.jpg'    ;
import Apollon              from './Images/Apollon.jpg'    ;
import Hades                from './Images/Hades.jpg'      ;
import Dionysos             from './Images/Dionysos.jpg'   ;
import Circe                from './Images/Circe.jpg'      ;
import Chloris              from './Images/Chloris.jpg'    ;
import Heracles             from './Images/Heracles.jpg'   ;

import Header               from '../General/Header.jsx'   ;
import '../Layer2.css';



class StaffLouvettes extends Component {

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
                <div className='Staff'>

                    <Header 
                        section = {section}
                    />
                    
                    <div className={'Background'}>
                        <img src={BackgroundImage} className = 'BackgroundImage' alt='' />
                    </div>

                    <div className = 'container'>

                        <div className={'textBox '+ section}>

                            <div className='row'>
                                <p className='textTitle'>{`Zeus (Akéla)`}</p>
                            </div>

                            <div className='row'>
                                <div className='column1'>
                                    <img src={Zeus} className = 'God Zeus' alt='' />
                                </div>
                                <div className='column2'>
                                    <p className='text'>{`Il est le dieu du ciel et souverain des dieux de l'Olympe. Zeus correspond au dieu 
                                        romain Jupiter. Zeus appartient comme tous les Olympiens, à la seconde génération divine. Il est le 
                                        dernier fils du titan Cronos et de Rhéa, frère des divinités Poséidon, Hadès, Hestia, Déméter et Héra.`
                                        }</p>
                                </div>
                            </div>
                        </div>



                        <div className={'textBox '+ section}>

                            <div className='row'>
                                <p className='textTitle'>{`Athéna (Rikki)`}</p>
                            </div>

                            <div className='row'>
                                <div className='column1'>
                                    <img src={Athena} className = 'God Athena' alt='' />
                                </div>
                                <div className='column2'>
                                    <p className='text'>{`Athéna est la déesse de la sagesse, de la stratégie militaire, des artisans, 
                                        des artistes et des maîtres d'école. La déesse était considérée comme la patronne et protectrice de 
                                        plusieurs villes de Grèce, notamment celle d’Athènes. Elle est généralement montrée dans l'art 
                                        portant un casque et tenant une lance. Athéna est la déesse protectrice de l'effort héroïque; elle 
                                        aurait également aidé les héros Persée, Héraclès, Bellérophon et Jason.`
                                        }</p>
                                </div>
                            </div>
                        </div>



                        <div className={'textBox '+ section}>

                            <div className='row'>
                                <p className='textTitle'>{`Artémis (Toomaï)`}</p>
                            </div>

                            <div className='row'>
                                <div className='column1'>
                                    <img src={Artemis} className = 'God Artemis' alt='' />
                                </div>
                                <div className='column2'>
                                    <p className='text'>{`Artémis est la déesse de la chasse et de la nature sauvage. Cette déesse est une des grandes 
                                        divinités du panthéon grec. Fille de Zeus et de Léto, elle est la sœur jumelle d'Apollon et souvent associée 
                                        à ses exploits. Elle fait partie des douze Olympiens. Coureuse des forêts, sauvageonne insoumise et fière, 
                                        Artémis appartient avant tout au monde sauvage, alors que son frère Apollon se présente comme un dieu civilisateur. 
                                        Seule parmi les dieux, à l'exception de Dionysos, elle est constamment entourée d'une troupe d'animaux sauvages.`
                                        }</p>
                                </div>
                            </div>
                        </div>



                        <div className={'textBox '+ section}>

                            <div className='row'>
                                <p className='textTitle'>{`Apollon (Won-Tolla)`}</p>
                            </div>

                            <div className='row'>
                                <div className='column1'>
                                    <img src={Apollon} className = 'God Apollon' alt='' />
                                </div>
                                <div className='column2'>
                                    <p className='text'>{`Apollon, dieu de des arts, du chant, de la musique, de la beauté 
                                        masculine, de la poésie, de la lumière mais également des purifications et de la guérison est un dieu civilisateur. 
                                        Il est représenté d’une lyre et armé d’un arc avec des flèches pouvant apporter la peste aux mortels. Apollon est né de 
                                        son père Zeus et de sa mère Léto. Il est le frère jumeau d’Artémis. 
`
                                        }</p>

                                    <p className='text'>{`Il est l’un des principaux dieux capables de divination et ce principalement à Delphes où il rendait 
                                        ses oracles par la Pythie (personne désignée par le dieu Apollon pour raconter les prophéties) de Delphes.`
                                        }</p>
                                </div>
                            </div>
                        </div>



                        <div className={'textBox '+ section}>

                            <div className='row'>
                                <p className='textTitle'>{`Hades (Ferrao)`}</p>
                            </div>

                            <div className='row'>
                                <div className='column1'>
                                    <img src={Hades} className = 'God Hades' alt='' />
                                </div>
                                <div className='column2'>
                                    <p className='text'>{`Hadès est le dieu des enfers et de la richesse. Il est le frère aîné de Zeus et de Poséidon. 
                                        Comme Zeus gouverne le ciel et Poséidon la mer, Hadès règne sous la terre et pour cette raison il est souvent considéré 
                                        comme le "maître des Enfers". Il reçoit des Cyclopes la kunée, un casque merveilleux qui le rend invisible, alors que 
                                        Zeus reçoit le foudre et Poséidon le trident. Il est donc le seul dieu pouvant être invisible aux yeux des autres. 
                                        C’est d’ailleurs lui qui ouvrira le ventre de son père Cronos pour libérer ses frères et sœurs qui avaient tous grandis 
                                        dans l’estomac de leur père.`
                                        }</p>
                                </div>
                            </div>
                        </div>



                        <div className={'textBox '+ section}>

                            <div className='row'>
                                <p className='textTitle'>{`Circé (Raksha)`}</p>
                            </div>

                            <div className='row'>
                                <div className='column1'>
                                    <img src={Circe} className = 'God Circe' alt='' />
                                </div>
                                <div className='column2'>
                                    <p className='text'>{`Circé est dans la mythologie grecque, la fille du dieu du soleil, Helios. `
                                        }</p>

                                    <p className='text'>{`Son nom signifie « oiseau de proie ». C’est une déesse très puissante dotée 
                                        de nombreaux pouvoirs extraordinaires. Elle est célèbre pour son art de l’empoisonnement et est 
                                        capable de métamorphoser n’importe quel humain en animal grâce à ses poisons. Celle-ci est redoutable 
                                        tant pour sa beauté que pour ses sortilèges. `
                                        }</p>

                                    <p className='text'>{`Circé épouse le roi des Sarmates, puis l’empoisonne. Elle prend alors la fuite sur 
                                        le char de son père et s’installe dans un magnifique palais entouré de lions et de loups (Ces animaux 
                                        sont des voyageurs qu’elle a transformés) sur une île où elle perfectionne ses pouvoirs.`
                                        }</p>
                                </div>
                            </div>
                            <div className='row'>

                            </div>
                        </div>



                        <div className={'textBox '+ section}>

                            <div className='row'>
                                <p className='textTitle'>{`Dionysos (Kaa)`}</p>
                            </div>

                            <div className='row'>
                                <div className='column1'>
                                    <img src={Dionysos} className = 'God Dionysos' alt='' />
                                </div>
                                <div className='column2'>
                                    <p className='text'>{`Dionysos est le dieu de la fête, de l’excès et des veillées, en quelque sorte le dieu 
                                        de l’ambiance. Celui-ci est le fils de Perséphone et Zeus. Héra, jalouse, demande aux Titans de se débarrasser 
                                        du nouveau-né. Ceux-ci coupent donc Dionysos en morceaux et le font cuire dans une marmite. Athéna ramasse pourtant 
                                        son cœur et le donne à Zeus qui en féconde à nouveau Dionysos. Pour le soustraire à la vengeance d’Héra, Dionysos 
                                        est alors remis aux nymphes où ils l’élevèrent. Pour échapper à Héra, il est transformé en chevreau. Après son exil, 
                                        il retrouve sa force et devient le grand dieu Dionysos. Son pouvoir a donné naissance à la tragédie et à la comédie. 
                                        C’est par ses illustrations que le théâtre Grec vit jour. En quelques sortes il est à l’origine de vos veillées.`
                                        }</p>
                                </div>
                            </div>
                            <div className='row'>

                            </div>
                        </div>


                        <div className={'textBox '+ section}>

                            <div className='row'>
                                <p className='textTitle'>{`Chloris (Baloo)`}</p>
                            </div>

                            <div className='row'>
                                <div className='column1'>
                                    <img src={Chloris} className = 'God Chloris' alt='' />
                                </div>
                                <div className='column2'>
                                    <p className='text'>{`Chloris est une nymphe des Îles Fortunées. Son nom est un dérivé du mot chlorophylle. Elle est l’épouse 
                                        de Zéphir. Il la conserva dans l’éclat de la jeunesse et lui donnant l’empire des fleurs. Leur hymen se célébra au 
                                        mois de mai. Ils eurent un fils, Carpos, le dieu des fruits.`
                                        }</p>

                                    <p className='text'>{`Chloris est la  fille d’Océan et de thétys, qui règnent sur le monde des eaux. Ensemble ils engendrent 3000 
                                        fleuves et 3000 océanides (nymphes des océans). Chloris aurait pu devenir une de ses belles océanides, mais son père la 
                                        conçoit avec une mortelle. Elle ne veillera donc pas sur l’élément de la vie, l’eau, comme ces demi-sœurs, mais sur les 
                                        Îles Fortunées. C’est sur ces bouts de terre que séjournent les âmes vertueuses après la mort, notamment celles des héros.`
                                        }</p>

                                    <p className='text'>{`Tout change le jour où Zéphyr, le vent de l’Ouest, souffle sur les îles Fortunées et aperçoit la nymphe. 
                                        Le souffle coupé par sa beauté, le dieu est frappé en plein cœur. Lui qui demeure d’habitude si doux, prend l’exemple de 
                                        son frère Borée, le rustre et froid vent du Nord, et enlève Chloris, l’emmenant dans les airs.`
                                        }</p>
                                </div>
                            </div>
                            <div className='row'>

                            </div>
                        </div>




                        <div className={'textBox '+ section}>

                            <div className='row'>
                                <p className='textTitle'>{`Heracles (Hathi)`}</p>
                            </div>

                            <div className='row'>
                                <div className='column1'>
                                    <img src={Heracles} className = 'God Heracles' alt='' />
                                </div>
                                <div className='column2'>
                                    <p className='text'>{`Héraclès, fils de Zeus et d’Alcmène, est l'un des héros les plus vénérés de la Grèce Antique. La mythologie 
                                        grecque lui prête un très grand nombre d’aventures qui le voient voyager à travers le monde, des Doriens puis dans toute la 
                                        Méditerranée, à partir de l’expansion de la Grande-Grèce, jusqu’aux Enfer. Le roi des dieux (Zeus) a en effet décidé d'avoir 
                                        un fils capable de venir en aide aux hommes comme aux dieux. Héraclès se distingue de la plupart des héros dont la carrière est 
                                        centrée autour d'un exploit unique. Les plus connus sont les Douze Travaux, entrepris sur l'ordre d’Eurysthée. C'est au cours du 
                                        premier d'entre eux, la chasse du lion de Némée, qu'il acquiert ses principaux attributs : la massue, taillée dans le tronc d'un 
                                        olivier sauvage, et la léonté, la peau de lion.`
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

export default StaffLouvettes





