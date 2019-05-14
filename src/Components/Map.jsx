import React, { Component } from 'react'                    ;
import RomanEmpireMap       from './Map/RomanEmpireMap.jsx';
import titleImage           from './Map/test.png';
import roseDesVents         from './Map/rose_des_vents.png';
import '../App.css';


class introMap extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    return (
      <div className = 'IntroPage'>
          <RomanEmpireMap 
                    data   = {[{datapoint: '', count: ''}]}
                    size   = {[this.state.width, this.state.height]}//[1500, 700]}]}
                    title  = {'La Méditerranée Antique'}
                    color  = {'#BC9F54'}
                    highlightColor = {'#DDCFA9'}
          />
          <div className='titleImage'>
              <img src={titleImage} className = 'mapTitle' alt='' />
          </div>
          <div className='roseDesVents'>
              <img src={roseDesVents} className = 'roseDesVents' alt='' />
          </div>
      </div>
    );
  }
}

export default introMap;

 