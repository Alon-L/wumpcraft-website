import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons';

class Social extends Component {
  render() {
    return (
      <div className="social">
        <a href="https://github.com/DayColor/wumpcraft" target="_blank"><FontAwesomeIcon icon={faGithub}/></a>
        <a href="https://discordapp.com/oauth2/authorize?client_id=592667565898334208&scope=bot&permissions=268774480" target="_blank"><FontAwesomeIcon icon={faDiscord}/></a>
      </div>
    );
  }
}

export default Social;