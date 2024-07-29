import React, { Component } from 'react';
import './Footer.css'; // Make sure to create and link a CSS file for styling

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <p>Pakistan’s largest online learning platform</p>
            {/* <div className="app-links">
              <a href="https://apps.apple.com"><span className="appstore" /></a>
              <a href="https://play.google.com"><span className="playstore" /></a>
            </div> */}
          </div>
          <div className="footer-section">
            <h4>Menu</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">How to Pay</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Download</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">CA</a></li>
              <li><a href="#">ACCA</a></li>
              <li><a href="#">ISSB</a></li>
              <li><a href="#">MDCAT</a></li>
              <li><a href="#">ENTRY TEST</a></li>
              <li><a href="#">CSS</a></li>
              <li><a href="#">O/A LEVEL</a></li>
              <li><a href="#">FSC</a></li>
              <li><a href="#">IELTS</a></li>
              <li><a href="#">GOVERNMENT JOBS</a></li>
            </ul>
          </div>
          <div className="footer-section contact-info">
            <h4>Contact us</h4>
            <p><i className="fa fa-phone" /> 0300-xxxxxxx</p>
            <p><i className="fa fa-envelope" /> contact@test.org</p>
            <p><i className="fa fa-map-marker" /> Address Street 09 Near Road ABCD</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Copyrights Nearpeer © 2024</p>
          <div className="social-links">
            <a href="https://facebook.com"><i className="fa fa-facebook" /></a>
            <a href="https://instagram.com"><i className="fa fa-instagram" /></a>
            <a href="https://twitter.com"><i className="fa fa-twitter" /></a>
            <a href="https://linkedin.com"><i className="fa fa-linkedin" /></a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
