import React, { Component } from 'react'            ;
import {Link}               from 'react-router-dom' ;
import MapIcon              from './MapIcon.png'    ;
import Button               from './Button.jsx'     ;
import '../Layer2.css';  

class HeaderScouts extends Component {
    constructor(props) {
        super(props);

        let baseLink = '/grandcamp39'
        let sectionData={'scouts'    :[{'buttonName'  : 'ACCEUIL'                   ,
                                        'section'     : 'scouts'                    ,
                                        'link'        : baseLink+'/scouts/accueil' },
                                        {'buttonName' : 'HISTOIRE'                  ,
                                        'section'     : 'scouts'                    ,
                                        'link'        : baseLink+'/scouts/histoire'},
                                        {'buttonName' : 'TON STAFF'                 ,
                                        'section'     : 'scouts'                    ,
                                        'link'        : baseLink+'/scouts/staff'   },
                                        {'buttonName' : 'TA PATROUILLE'             ,
                                        'section'     : 'scouts'                    ,
                                        'link'        : baseLink+'/scouts/kids'    },
                                        {'buttonName' : 'INFOS PRATIQUES'           ,
                                        'section'     : 'scouts'                    ,
                                        'link'        : baseLink+'/scouts/info'    }],

                         'guides'    :[{'buttonName'  : 'ACCEUIL'                    ,
                                        'section'     : 'guides'                     ,
                                        'link'        : baseLink+'/guides/accueil'  },
                                        {'buttonName' : 'ACTIVITES'                  ,
                                        'section'     : 'guides'                     ,
                                        'link'        : baseLink+'/guides/activites'},
                                        {'buttonName' : 'TON STAFF'                  ,
                                        'section'     : 'guides'                     ,
                                        'link'        : baseLink+'/guides/staff'    },
                                        {'buttonName' : 'TA PATROUILLE'              ,
                                        'section'     : 'guides'                     ,
                                        'link'        : baseLink+'/guides/kids'     },
                                        {'buttonName' : 'INFOS PRATIQUES'            ,
                                        'section'     : 'guides'                     ,
                                        'link'        : baseLink+'/guides/info'     }],

                         'louveteaux':[{'buttonName'  : 'ACCEUIL'                       ,
                                        'section'     : 'louveteaux'                    ,
                                        'link'        : baseLink+'/louveteaux/accueil' },
                                        {'buttonName' : 'HISTOIRE'                      ,
                                        'section'     : 'louveteaux'                    ,
                                        'link'        : baseLink+'/louveteaux/histoire'},
                                        {'buttonName' : 'TON STAFF'                     ,
                                        'section'     : 'louveteaux'                    ,
                                        'link'        : baseLink+'/louveteaux/staff'   },
                                        {'buttonName' : 'TA SIZAINE'                    ,
                                        'section'     : 'louveteaux'                    ,
                                        'link'        : baseLink+'/louveteaux/kids'    },
                                        {'buttonName' : 'INFOS PRATIQUES'               ,
                                        'section'     : 'louveteaux'                    ,
                                        'link'        : baseLink+'/louveteaux/info'    }],

                         'louvettes' :[{'buttonName'  : 'ACCEUIL'                      ,
                                        'section'     : 'louvettes'                    ,
                                        'link'        : baseLink+'/louvettes/accueil' },
                                        {'buttonName' : 'TON STAFF'                    ,
                                        'section'     : 'louvettes'                    ,
                                        'link'        : baseLink+'/louvettes/staff'   },
                                        {'buttonName' : 'TA SIZAINE'                   ,
                                        'section'     : 'louvettes'                    ,
                                        'link'        : baseLink+'/louvettes/kids'    },
                                        {'buttonName' : 'INFOS PRATIQUES'              ,
                                        'section'     : 'louvettes'                    ,
                                        'link'        : baseLink+'/louvettes/info'    }],

                         'baladins'  :[{'buttonName'  : 'ACCEUIL'                     ,
                                        'section'     : 'baladins'                    ,
                                        'link'        : baseLink+'/baladins/accueil' },
                                        {'buttonName' : 'HISTOIRE'                    ,
                                        'section'     : 'baladins'                    ,
                                        'link'        : baseLink+'/baladins/histoire'},
                                        {'buttonName' : 'TON STAFF'                   ,
                                        'section'     : 'baladins'                    ,
                                        'link'        : baseLink+'/baladins/staff'   },
                                        {'buttonName' : 'INFOS PRATIQUES'             ,
                                        'section'     : 'baladins'                    ,
                                        'link'        : baseLink+'/baladins/info'    }],
                         ''          :[]
                         };

        this.state = {section:'',
                      sectionData:sectionData};
    };

    componentDidMount() {
        this.setState({section:this.props.section});
    }

    componentWillUnmount() {
        this.setState({section:this.props.section});
    }

    render() {


        let ButtonList = (this.state.sectionData[this.state.section]).map(function(element, index){
            return (<Button
                buttonName = {element.buttonName}
                section    = {element.section}
                link       = {element.link}
            />)
          });

        let componentsToRender = (
                <header className={'PersonalPageHeader '+ this.state.section}>
                    <ul>
                        <li>
                            <Link to={'/grandcamp39/carte'} >
                                <button type='button' className={'mapButton'}>
                                    <div className='overlay'>
                                        <img src={MapIcon} alt='logo' />
                                    </div>
                                </button>
                            </Link>
                        </li>
                        {ButtonList}
                    </ul>
                </header>
            );
        return componentsToRender

    };
};

export default HeaderScouts









