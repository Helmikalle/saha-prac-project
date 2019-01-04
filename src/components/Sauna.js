import React from 'react';

export default class Sauna {
  state = {
    pictures: []
  };

  componentDidMount() {
    fetch('http://localhost:8081/image')
    .then(result => {
      return result.json();
    }).then(data => {
      let pictures = data.result.map((pic) => {
        return(
          <div key={pic.result}>
            <img src={pic.sahaPhotoURL}></img>
          </div>
        )
      })
      this.setState({pictures: pictures})
      console.log("state", this.state.pictures)
    })
  }

  render() {
    return (
      <div>
        <div>
          {this.state.pictures}
        </div>
      </div>
    );
  }
}