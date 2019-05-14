import React, { Component } from 'react' ;
import topImage from'./TopImageScouts.jpg';

class TopImage extends Component {

    render() {
        let componentsToRender = (
                <div className={'TopImage'}>
                        <img src={topImage} className = {'TopImage_Image'} alt='' />
                </div>
            );
        return componentsToRender

    };
};

export default TopImage









