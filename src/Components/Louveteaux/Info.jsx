import React, { Component } from 'react'                                        ;
import BackgroundImage      from './Images/Background.jpg'; //'./Images/Background_Info.jpg'                 ;
import autorisation         from './files/Scout_Autorisation_Parentale_2018.pdf';
import ficheMedicale        from './files/Scout_Fiche_Medicale_2018.pdf'        ;
import logo                 from './logo.svg'                                   ;
import Header               from '../General/Header.jsx'                        ;
import '../Layer2.css';

class Info extends Component {

    render() {
        let splittedAddress = window.location.href.split('/');
        let section = splittedAddress[splittedAddress.length-2];

        let sectionData = {'scouts'    :{'bank'    :'',
                                         'costs'   :[],
                                         'email'   :'',
                                         'schedule':[]
                                        },

                           'guides'    :{'bank'    :'',
                                         'costs'   :[],
                                         'email'   :'',
                                         'schedule':[]
                                        },

                           'louveteaux':{'bank'    :'',
                                         'costs'   :[],
                                         'email'   :'',
                                         'schedule':[]
                                        },

                           'louvettes' :{'bank'    :'',
                                         'costs'   :[],
                                         'email'   :'',
                                         'schedule':[]
                                        },
                                        
                           'baladins'  :{'bank'    :'',
                                         'costs'   :[],
                                         'email'   :'',
                                         'schedule':[]
                                        }
        }

        let componentsToRender = (
                <div className='Info'>
                    <Header section={section} logo={logo}/>
                    <div className={'Background'}>
                        <img src={BackgroundImage} className = 'BackgroundImage' alt='' />
                    </div>

                    <div className = 'container'>
                        <div className={'textBox '+ section}>
                            <p className='textTitle'>{`Où?`}</p>

                            <p className='text'>{`Cette année, nous partons coloniser Le Bruly ! Ce beau petit bout de terre 
                                situé en province de Namur, près de Couvin, sera un terrain de jeux idéal pour établir notre 
                                campement.`
                                }</p>

                            <p className='subtitle'>{`Addresse du Jour:`}</p>
                            <p className='text'>{`Route de la Forge du Prince 13, 5660 Bruly`}</p>
                            <br/>
                            <p className='text sideNote'>{`Pour les courriers envoyés à vos chers et tendres, n'oubliez pas de 
                                les adresser aux scouts de la 39ème Rivière !`
                                }</p>   


                        </div>


                        <div className={'textBox halfPage ' + section}>
                            <p className='textTitle'>{`Quand?`}</p>

                            <p className='subtitle'>{`CP's & SP's`}</p>

                            <p className='text'>{`Le camp débutera le dimanche 15 juillet à 17h00.`
                                }</p>

                            <p className='subtitle'>{`Les autres` }</p>

                            <p className='text'>{`Vous êtes attendus sur place le mardi 17 juillet à 13h00, avec le ventre plein !`
                                }</p>


                            <p className='subtitle'>{`Les Trajets`}</p>

                            <p className='text'>{`Pour l'aller, n'hésitez pas à faire un maximum de covoiturage, la 
                                planète vous en sera reconnaissante ;)`
                                }</p>

                            <p className='text'>{`Nous nous retrouverons enfin tous à Godinne, ou nous arriverons en bus, le 
                                mardi 31 juillet à 16h00 pour le traditionnel gouter de fin de camp, auquel les parents sont comme 
                                d’habitude conviés.`
                            }</p>


                        </div>

                        <div className={'textBox '+ section}>
                            <p className='textTitle'>{`Documents à remettre au staff`}</p>

                            <p className='text'>{`Deux documents sont à remettre au staff, soit par email à l'adresse habituelle (`}
                                <u>scouts39e@gmail.com</u>{`), soit par la poste `}<mark>avant le 8 juillet</mark>{` (adresse : Martin 
                                Beauvois, Rue sur les Pierreux 5, 5340 Gesves) ou bien en dernier recours le jour de votre arrivée sur 
                                le camp.`
                                }</p>

                            <p className='text'>{`Il s'agit, comme chaque année, de la fiche médicale et de l'autorisation parentale. Il 
                                est impératif que tout le monde soit en ordre administrativement ! Veillez à ce que ça soit le cas.`
                                }</p>

                            <p className='download-button'>
                                <a className='autorisation-parental'
                                   href={autorisation} 
                                   preview>Autorisation Parentale
                                </a>
                            </p>
                            
                            <p className='download-button'>
                                <a className='fiche-medicale' 
                                   href={ficheMedicale} 
                                   preview>Fiche Médicale
                                </a>
                            </p>


                        </div>


                        <div className={'textBox '+ section}>
                            <p className='textTitle'>{`Coût des Activitées`}</p>

                            <p className='text'>{`Le prix du camp s'élève pour les CP et SP à €150 tandis qu'il s'élève à €140 euros pour 
                                le reste de la troupe. Ce montant est à verser avant le 30 juin sur le compte de la troupe (`}<mark>BE38 3631 6871 5372</mark>{`).`
                                }</p>

                            <p className='text sideNote'>{`Veuillez mettre le/les nom(s) de votre/vos enfants en sujet pour faciliter la comptabilité de notre côté`
                                }</p>

                        </div>

                        <div className={'textBox '+ section}>
                            <p className='textTitle'>{`Barbecue parents`}</p>

                            <p className='text'>{`Cette année encore, nous vous invitons à venir partager un barbecue avec nous pendant que les
                                scouts sont en hike. Cette soirée est l'occasion de s’immerger un peu dans l'ambiance qui règne sur le camp durant
                                quinze jours et, d’admirer les talents de bâtisseurs de vos enfants.`
                                }</p>

                            <p className='text'>{`Afin de ne pas dévoiler notre programme de camp, nous vous communiquerons les informations précises 
                                (dates, modalités, etc.) par mail pour la fin du mois de juin.`
                                }</p>

                        </div>


                        <div className={'textBox '+ section}>
                            <p className='textTitle'>{`Dans Mon Drakkar je mets...`}</p>

                            <p className='text'>{`Une telle aventure ne s'entame pas sans être certain de ne manquer de rien. C'est pourquoi, 
                                ton drakkar contiendra :`
                                }</p>

                            <ul className='bagList'>
                                <li> {`Uniforme impeccable`} </li>
                                <li> {`La meilleure imitation de mon viking et ses couleurs`} </li>
                                <li> {`Sac de couchage`} </li>
                                <li> {`Matelas (PAS de lit de camp)`}  </li>
                                <li> {`Vêtements chauds : Pulls, pantalons, sweatshirts, peaux d'ours`}  </li>
                                <li> {`Shorts (3 suffisent amplement)`} </li>
                                <li> {`Un vêtement de pluie (cape, k-way)`} </li>
                                <li> {`Des bonnes chaussures de marche`} </li>
                                <li> {`Tes affaires de sport`}  </li>
                                <li> {`Ta trousse de toilette (gant, essuies, brosse à dents) et bassin de toile (nous nous laverons dans de l’eau 
                                       de rivière, merci de préférer des savons écologiques)`}</li>
                                <li> {`Crème Solaire`} </li>
                                <li> {`De grosses chaussettes`} </li>
                                <li> {`Tes caleçons`} </li>
                                <li> {`Ta lampe de poche`}  </li>
                                <li> {` Ton canif `}</li>
                                <li> {`De quoi écrire : papier, enveloppes, timbres`} </li>
                                <li> {`Tes médicaments éventuels`} </li>
                                <li> {`Essuie de vaisselle`} </li>
                                <li> {`Gourde`} </li>
                                <li> {`Petit sac à dos pour le hike`}  </li>
                                <li> {`Ta boussole`} </li>
                                <li> {`Bonnet, casquettes, chapeau`} </li>  
                                <li> {`Crème solaire`}  </li>
                                <li> {`Maillot, essuie`} </li>
                                <li> {`Carte d’identité`}  </li>
                                <li> {`Ta bonne humeur (comme d'habitude)`} </li>
                                <li> {`10 euros pour le hike (facultatif - le moindre centime trouvé en plus sur un scout fera perdre tout l'argent 
                                       de la patrouille, vous êtes prévenus)`} </li>
                            </ul>

                            <p className='text'>{`Odin a embauché les meilleurs cuistots du Valhalla. Tu ne risque donc pas de mourir de faim. 
                                Laisse donc chez toi tous les mets inutiles et peu délicats que tu pourrais avoir envie d'emporter! `
                                }</p>

                            <p className='text'>{`Comme chaque année, nous prohibons toutes choses inutiles chez les scouts. Dès lors, cigarettes, 
                                alcool, drogue, et autres substances illicites sont interdites. Leur `}<mark>détention/consommation</mark>{` sera punie par un `}<mark>renvoi 
                                immédiat!</mark>
                                </p>

                            <p className='text'>{`La possession/l'utilisation de GSM, Mp3, Ipod, appareils multimédias en tous genres, etc. est 
                                également interdite. Seuls les CP's sont autorisés à prendre leur GSM avec eux. Ils le remettront à Mimir
                                dès leur arrivée sur les lieux d'affrontement. Ils le récupéreront sous enveloppe scellée durant le hike, puis à la 
                                fin du camp.`
                                }</p>

                            <p className='subtitle warning'>!! Attention !!</p>
                            <p className='text'>{`Nous ne disposons pas d'endroit sûr (coffre fort, etc.) et ne pouvons donc garantir à 100% la 
                                sécurité de vos appareils médias. Dès lors, mieux vaut laisser d'office ceux-ci chez toi. Si tu en as absolument besoin 
                                pour je ne sais quelle raison, mieux vaut prendre le gsm le plus moche incassable plutôt que ton nouvel iPhone X 256gb gold. 
                                Nous déclinons en effet toute responsabilité en cas de perte, vol, casse. `
                                }</p>

                        </div>


                    </div>
                </div>
            );
        return componentsToRender

    };
};

export default Info









