import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import '../styles/Layout.css';
import '../App.css';

const Home = () => (
  <div>
    <h1>HELLO WORLD</h1>
    <p>WELCOME WELCOME</p>
  </div>
);

const IntroText = () => (
  <div className="Intro-text">
    <p>Repellat est veritatis eveniet animi dolore voluptate. 
    Sunt ut ducimus qui aut asperiores. 
    Et blanditiis est id. 
    Dicta non non aut quas cumque voluptate nulla. 
    Enim hic incidunt fugiat quaerat nostrum nam vero aliquam. 
    Ea nulla asperiores consequatur qui et corrupti quae.dsadsadasdsa
    </p>
  </div>
);

const ContactForm = () => (
  <div className="Contact-form">
    <h3>Contact From</h3>
    <form></form>
  </div>
);

export default class PageLayout extends Component {
  render () {
    return  (
      <div>
        <ScrollableAnchor id={'home'}>
          <div className="Page-component">
            <Home />
          </div>
        </ScrollableAnchor>
        <ScrollableAnchor id={'intro-text'}>
          <div className="Page-component">
            <IntroText />
          </div>
        </ScrollableAnchor>
        <ScrollableAnchor id={'contact-form'}>
          <div className="Page-component">
            <ContactForm />
          </div>
        </ScrollableAnchor>
      </div>
    );
  }
};
