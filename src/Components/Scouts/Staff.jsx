import React, { Component } from 'react'                   ;
import BackgroundImage      from './Images/Background.jpg' ;
import Jupiter              from './Images/Jupyter.jpg'    ;
import Phebus               from './Images/Phebus.jpg'     ;
import Pluton               from './Images/Apollon.jpg'    ;
import Neptune              from './Images/Neptune.jpg'    ;
import Mars                 from './Images/Mars.jpg'       ;
import Header               from '../General/Header.jsx'   ;
import '../Layer2.css';

class StaffScout extends Component {

    componentDitMount(){
        
    }

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
                                <p className='textTitle'>{`Jupiter (Sika)`}</p>
                            </div>

                            <div className='row'>
                                <div className='column1'>
                                    <img src={Jupiter} className = 'God Jupiter' alt='' />
                                </div>
                                <div className='column2'>
                                    <p className='text'>{`Jupiter gouverne la terre et le ciel. Il est le dieu des dieux dans la mythologie romaine.
                                        Armé de sa foudre, il est connu que son tempérament est à l'origine des orages et des tempêtes. Jupiter est le père
                                        de Mars et de Phébus, et est le frère de Neptune et de Pluton. Jupiter, était bien connu comme un père de la polygamie.`
                                        }</p>
                                </div>
                            </div>
                        </div>



                        <div className={'textBox '+ section}>

                            <div className='row'>
                                <p className='textTitle'>{`Phébus (Whipsy)`}</p>
                            </div>

                            <div className='row'>
                                <div className='column1'>
                                    <img src={Phebus} className = 'God Phebus' alt='' />
                                </div>
                                <div className='column2'>
                                    <p className='text'>{`Phébus est connu sous le nom d’Apollon chez nos amies grecques, les louvettes. C’est un Dieu 
                                        flamboyant, il a hérité du surnom « Le Brillant » ; non pas grâce à sa rapidité d’esprit mais parce qu’il est le 
                                        Dieu du soleil et de la lumière. En tant qu’enfant déjà, il a réussi à dompter notre astre lumineux. Il incarne 
                                        également la beauté masculine et est donc bien représenté lors de ce camp.`
                                        }</p>

                                    <p className='text'>{`Il est le fils de Jupiter et est toujours en très bon terme avec son père (notons cependant 
                                        qu’il l’a battu à la pétanque dernièrement et que leur relation risque de s’envenimer légèrement).`
                                        }</p>
                                        
                                    <p className='text'>{`Sa devise ? « Sun Shine » ! Il a reçu cette maxime de son capitaine Mc Johnson suite à ses 
                                        combats lors de la guerre du Vietnam, car il éblouissait ses compagnons de batailles par son agilité, sa 
                                        précision de tir ainsi que par ses blagues tranchantes.`
                                        }</p>
                                </div>
                            </div>
                        </div>

 

                        <div className={'textBox '+ section}>

                            <div className='row'>
                                <p className='textTitle'>{`Pluton (Kodiak)`}</p>
                            </div>

                            <div className='row'>
                                <div className='column1'>
                                    <img src={Pluton} className = 'God Pluton' alt='' />
                                </div>
                                <div className='column2'>
                                    <p className='text'>{`Pluton est le dieu des Enfers. Il est le frère de Jupiter et de Neptune. Mais il est également le dieu 
                                        invoqué lors des moissons, du fait que sa femme, Proserpine, commande les saisons. C’est pour cela qu’il est souvent 
                                        représenté avec une corne d’abondance.`
                                        }</p>

                                    <p className='text'>{`Pluton, dieu du monde sous-terrain, est donc le dieu de ce qui trouve sous terre, ce qui fait aussi 
                                        de lui le dieu des mines.`
                                        }</p>

                                    <p className='text'>{`Accompagné de son chien à 3 tètes, Cerbère, gère les enfers. Ceux-ci sont divisés en 2 principales 
                                        régions. D’un côté le Tartare, où vont les âmes jugées mauvaises, et les Champs-Élysées, lieu de paix et de délice 
                                        où vont les âmes justes. Et oui, dans la mythologie romaine, le paradis se trouve aux enfers.`
                                        }</p>
                                </div>
                            </div>
                        </div>



                        <div className={'textBox '+ section}>

                            <div className='row'>
                                <p className='textTitle'>{`Neptune (Mouflon)`}</p>
                            </div>

                            <div className='row'>
                                <div className='column1'>
                                    <img src={Neptune} className = 'God Neptune' alt='' />
                                </div>
                                <div className='column2'>
                                    <p className='text'>{`Neptune est le dieu romain des Mers et des Océans mais également, comme on l’oublie souvent, 
                                        des chevaux et des tremblements de terre. Commandeur imprévisible et irascible de la météo marine, il faisait 
                                        ce qu’il voulait des vagues et des navires grâce à son célèbre trident. Bouillant, passionné et querelleur, il 
                                        passait son temps à se battre sur de multiples fronts et pour les motifs les plus divers. Il était en conflit 
                                        permanent avec son frère Jupiter : pouvoir visible du ciel contre pouvoir occulte de la mer.`
                                        }</p>

                                    <p className='text'>{`Il est bon de mentionner que Neptune était honoré à Rome à l'occasion des Neptunalia, 
                                        pendant deux jours à partir du 23 juillet de chaque année.`
                                        }</p>
                                </div>
                            </div>
                        </div>


                        <div className={'textBox '+ section}>

                            <div className='row'>
                                <p className='textTitle'>{`Mars (Goral)`}</p>
                            </div>

                            <div className='row'>
                                <div className='column1'>
                                    <img src={Mars} className = 'God Mars' alt='' />
                                </div>
                                <div className='column2'>
                                    <p className='text'>{`Fils de Jupiter, dieu de la guerre, du combat et de la violence, il se montre fin stratège 
                                        face à ses ennemis. Dans la mythologie il est un dieu de la première importance car il est le père de Romulus 
                                        et de Remus. Ces deux frères furent adoptés par une louve et devinrent les fondateurs et les protecteurs de Rome.`
                                        }</p>

                                    <p className='text'>{`Mars est le plus important des dieux de la guerre c’est pourquoi, lors des batailles, il est 
                                        honoré par les légions de l’empire. Tant admiré, son nom est donné au premier mois de l’année romaine. En effet, 
                                        recommencer l’année en l’honneur du dieu après un hiver froid remontait le moral des habitants de l’empire. 
                                        Car outre supporter moralement les troupes, il est aussi le dieu de la fertilité et de l’abondance. Mars appréciera 
                                        grandement les offrandes du peuple romain en son honneur. Ce Dieu se montre aussi bienveillant 
                                        envers les guerriers après les efforts au nom de l’empire durant les rudes combats remportés contre les 
                                        peuples barbares.`
                                        }</p>

                                    <p className='text'>{`Exilé pendant de longs mois, contraint de fournir un dur labeur, il a PEUT-ÊTRE décidé de 
                                        revenir profiter de ses récoltes pour une période toujours trop courte appelée « grand camp ». Ce n’est que 
                                        lorsqu’il peut être au plus proche de l’action qu’il partage sa joie avec les légions.`
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

export default StaffScout









