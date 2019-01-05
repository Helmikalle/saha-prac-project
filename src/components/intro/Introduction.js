import React, {Component} from 'react';
import axios from 'axios';
import IntroContent from './IntroContent';

export default class Intoduction extends Component {
  state = {
    introContent: []
  }

  componentDidMount() {
    axios
      .get('http://localhost:8081/text')
      .then(response => {
        const newContent = response.data.map(c => {
          return {
            id: c.id,
            paragraph: c.paragraph,
            type: c.type
          }
        });
        const newState = Object.assign({}, this.state, {
          introContent: newContent
        });
        this.setState(newState);
      }).catch(error => console.log('ERROR: ', error))
  }

  render() {
    return(
      <div>
        <p>
          {this.state.introContent.map(content =>
            <IntroContent key={content.id} paragraph={content.paragraph}/>)}
        </p>
      </div>
    )
  }
}