import React from 'react';

export default class Header extends React.Component {
  render() {
    return(
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#home">Saha</a>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link" href="#home">Home</a>
          <a className="nav-item nav-link" href="#intro-text">Intro</a>
          <a className="nav-item nav-link" href="#contact-form">Contact Form</a>
        </div>
      </div>
    </nav>
    );
  }
}