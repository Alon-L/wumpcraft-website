import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faHeart } from '@fortawesome/free-solid-svg-icons';

class Footer extends Component {
  render() {
    return (
      <div className="footer text-center">
        <p><FontAwesomeIcon icon={faCode}/> with <FontAwesomeIcon icon={faHeart}/> by Day#0001 for Discord Hack Week 2019</p>
      </div>
    );
  }
}

export default Footer;
