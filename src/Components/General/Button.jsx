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
    };
    render() {
        let componentsToRender = (
                        <li>
                            <Link to={this.props.link} >
                                <button type='button' className={'normalButton ' + this.props.section}>
                                    {this.props.buttonName}
                                </button>
                            </Link>
                        </li>
            );
        return componentsToRender

    };
};

export default HeaderScouts









