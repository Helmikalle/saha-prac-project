import React, {Component} from 'react';
import axios from 'axios';

import SaunaPicture from './SaunaPicture';

  export default class Sauna extends Component {
    state = {
      pictures: []
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

    render() {
      return(
        <div>
          {this.state.pictures.map(pic => 
            <SaunaPicture key={pic.id} name={pic.sahaPhotoURL}/>
            )}
        </div>
      )
    }
  }
  


