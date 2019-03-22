import React, {Component} from 'react';
import axios from 'axios';

import SaunaPicture from './SaunaPicture';
import '../../styles/Slider.css';

  export default class Sauna extends Component {
    state = {
      pictures: [],
      currentIndex: 0,
      translateValue: 0
    };
  
    componentDidMount() {
      axios
        .get("http://localhost:8081/image")
        .then(response => {
          const newPictures = response.data.map(c => {
            return {
              id: c.id,
              name: c.name,
              sahaPhotoURL: c.sahaPhotoURL,
              type: c.type 
            };
          });
          const newState = Object.assign({}, this.state, {
            pictures: newPictures
          });
          this.setState(newState);
        }).catch(error => console.log('ERROR: ', error))
    }

    goToPrevSlide = () => {
      if(this.state.currentIndex === 0)
        return;
      
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex - 1,
        translateValue: prevState.translateValue + this.slideWidth()
      }))
    }
  
    goToNextSlide = () => {
      // Exiting the method early if we are at the end of the images array.
      // We also want to reset currentIndex and translateValue, so we return
      // to the first image in the array.
      if(this.state.currentIndex === this.state.pictures.length - 1) {
        return this.setState({
          currentIndex: 0,
          translateValue: 0
        })
      }
      
      // This will not run if we met the if condition above
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex + 1,
        translateValue: prevState.translateValue + -(this.slideWidth())
      }));
    }
  
    slideWidth = () => {
       return document.querySelector('.slide').clientWidth
    }

    render() {
      return(
        <div className="slider">

        <div className="slider-wrapper"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: 'transform ease-out 0.45s'
          }}>
            {
              this.state.pictures.map(pic => 
              <SaunaPicture key={pic.id} name={pic.sahaPhotoURL}/>
              )
            }
        </div>

        <LeftArrow
         goToPrevSlide={this.goToPrevSlide}
        />

        <RightArrow
         goToNextSlide={this.goToNextSlide}
        />
      </div>
      )
    }
  }

  const LeftArrow = (props) => {
    return (
      <div className="backArrow arrow" onClick={props.goToPrevSlide}>
        <i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
      </div>
    );
  }
  
  
  const RightArrow = (props) => {
    return (
      <div className="nextArrow arrow" onClick={props.goToNextSlide}>
        <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
      </div>
    );
  }
  


