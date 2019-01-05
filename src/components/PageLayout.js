import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import '../styles/Layout.css';
import '../App.css';
import SaunaPictures from './the-property/Sauna';
import Introduction from './intro/Introduction';

const Home = () => (
  <div>
    <h1>HELLO WORLD</h1>
    <p>WELCOME WELCOME</p>
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
            <Introduction />
          </div>
        </ScrollableAnchor>
        <ScrollableAnchor id={'sauna'}>
          <div className="Page-component">
            <SaunaPictures pictures={this.props.pictures}/>
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
