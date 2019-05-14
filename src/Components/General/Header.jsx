import React, { Component } from 'react'            ;
import {Link}               from 'react-router-dom' ;
import '../Layer2.css';  

/*
                        <li>
                            <img src={this.props.logo} className = 'App-logo' alt='logo' />
                        </li>
*/


class HeaderScouts extends Component {
    constructor(props) {
        super(props);
        this.state = {section:''};
    };

    componentDidMount() {
        this.setState({section:this.props.section});
    }

    componentWillUnmount() {
        this.setState({section:this.props.section});
    }

    render() {
        let componentsToRender = (
                <header className={'PersonalPageHeader'}>
                    <ul>
                        <li><Link to={'/grandcamp39/carte'                             } ><button type='button'>RETOUR A LA CARTE  </button></Link></li>
                        <li><Link to={'/grandcamp39/'+ this.state.section +'/accueil'  } ><button type='button'>ACCUEIL            </button></Link></li>
                        <li><Link to={'/grandcamp39/'+ this.state.section +'/histoire' } ><button type='button'>HISTOIRE           </button></Link></li>
                        <li><Link to={'/grandcamp39/'+ this.state.section +'/staff'    } ><button type='button'>LES DIEUX d’ASGARD </button></Link></li>
                        <li><Link to={'/grandcamp39/'+ this.state.section +'/kids'     } ><button type='button'>TON VIKING         </button></Link></li>
                        <li><Link to={'/grandcamp39/'+ this.state.section +'/info'     } ><button type='button'>INFOS PRATIQUES    </button></Link></li>
                    </ul>
                </header>
            );
        return componentsToRender

    };
};

export default HeaderScouts









