import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import '../styles/Layout.css';
import '../App.css';
import Introduction from './intro/Introduction';
import Properties from './the-property/Properties';
import ContactForm from './contact-form/ContactForm';

export default class PageLayout extends Component {
  render () {
    return  (
      <div className="Page-container">
        <ScrollableAnchor id={'intro-text'}>
          <div className="Page-component">
            <Introduction />
          </div>
        </ScrollableAnchor>
        <ScrollableAnchor id={'property'}>
          <div className="Page-component">
            <Properties />
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
