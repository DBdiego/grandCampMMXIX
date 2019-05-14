import React, { Component } from 'react'                    ;
import BackgroundImage      from './Background.jpg' ;
import '../App.css';

class Template extends Component {

    render() {
        let componentsToRender = (

                <div className='Template'>

                    <div className={'Background'}>
                        <img src={BackgroundImage} className = 'BackgroundImage' alt='' />
                    </div>

                    <div className = 'container'>
                        <div className='textBox'>
                            <p className='textTitle'>{`Title 1`}</p>

                            <p className='text'>{`paragraph`}</p>
                            <p className='text'>{`paragraph`}</p>
                            <p className='text'>{`paragraph`}</p>


                            <br/>
                            <p className='subtitle'>{`subtitle 1`} </p>
                            <p className='text'>{`paragraph`}</p>

                            <br/>
                            <p className='subtitle'>{`subtitle 2`} </p>
                            <p className='text'>{`paragraph`}</p>

                        </div>


                        <div className='textBox'>
                            <p className='textTitle'>{`Title 2`}</p>

                            <p className='text'>{`paragraph`}</p>
                            <p className='text'>{`paragraph`}</p>
                            <p className='text'>{`paragraph`}</p>


                            <br/>
                            <p className='subtitle'>{`subtitle 1`} </p>
                            <p className='text'>{`paragraph`}</p>

                            <br/>
                            <p className='subtitle'>{`subtitle 2`} </p>
                            <p className='text'>{`paragraph`}</p>

                        </div>

                    </div>
                </div>
            );
        return componentsToRender

    };
};

export default Template









