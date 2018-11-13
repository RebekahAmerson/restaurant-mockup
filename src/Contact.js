import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return(
      <div id="contact">
        <div id="contact-img"></div>
        <div id="rest-info">
          <div id="address">
            <p>826 Sunshine Dr</p>
            <p>Pittsburg, Ks 66762</p>
            <p>620-555-5492</p>
          </div>
          <div id="hours">
            <p className="rest-days">Monday</p>
            <p className="rest-days">Tuesday</p>
            <p className="rest-days">Wednesday</p>
            <p className="rest-days">Thursday</p>
            <p className="rest-days">Friday</p>
            <p className="rest-days">Saturday</p>
            <p className="rest-days">Sunday</p>
            <p className="rest-hours">10:00am - 9:00pm</p>
            <p className="rest-hours">10:00am - 9:00pm</p>
            <p className="rest-hours">10:00am - 9:00pm</p>
            <p className="rest-hours">10:00am - 9:00pm</p>
            <p className="rest-hours">10:00am - 9:00pm</p>
            <p className="rest-hours">11:00am - 5:00pm</p>
            <p className="rest-hours">CLOSED</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
