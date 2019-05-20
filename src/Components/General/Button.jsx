import React, { Component } from 'react'            ;
import {Link}               from 'react-router-dom' ;


class HeaderScouts extends Component {

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









