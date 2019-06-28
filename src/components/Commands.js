import React, {Component} from 'react';
import Command from './Command';

class Commands extends Component {
  state = {
    commands: [
      {
        desc: 'Play your world.',
        usage: 'play'
      },
      {
        desc: 'Delete your world.',
        usage: 'delete'
      },
      {
        desc: 'Spectate a member\'s world while they are playing.',
        usage: 'spactate [@user]'
      },
      {
        desc: 'Close your open game view.',
        usage: 'close'
      },
      {
        desc: 'Lists all the commands.',
        usage: 'help <command>'
      },
      {
        desc: 'Sends the invitation link for the bot.',
        usage: 'invite'
      },
      {
        desc: 'Shows the credits for this bot.',
        usage: 'credits'
      },
      {
        desc: 'Replies with the bot reaction time.',
        usage: 'ping'
      }
    ]
  };

  render() {
    return (
      <div className="commands">
        <div className="commands-cont">
          <h1>Commands</h1>
          {this.state.commands.map(c => (
            <Command c={c} key={c}/>
          ))}
        </div>
      </div>
    )
  }
}

export default Commands;