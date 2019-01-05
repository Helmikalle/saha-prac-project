import React from 'react';
import '../styles/Navbar.css';

export default class Header extends React.Component {
  toggleHidden = () => {
    const navs = document.querySelectorAll('.Navbar__Items')
  
    navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
  }

  render() {
    return(
      <div className="Topnavbar">
        <div className="Navbar__Link Navbar__Link-brand">
          <h2 onClick={this.toggleHidden} className="Navbar__header" >Saha</h2> 
        </div>
        <nav className="Navbar__Items">
          <div className="Navbar__Link">
            <a onClick={this.toggleHidden} href="#home" className="Navbar__item">Home</a>
          </div>
          <div className="Navbar__Link">
            <a onClick={this.toggleHidden} href="#intro-text" className="Navbar__item">Intro</a>
          </div>
          <div>
            <a onClick={this.toggleHidden} href="#sauna" className="Navbar__item">Sauna</a>
          </div>
          <div className="Navbar__Link">
            <a onClick={this.toggleHidden} href="#contact-form" className="Navbar__item">Contact Form</a>
          </div>
        </nav>
        <div className="Navbar__Link Navbar__Link-toggle" onClick={this.toggleHidden}>
          LINK
        </div>
      </div>
    );
  }
}