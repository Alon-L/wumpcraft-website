import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Command extends Component {
  state = {
    prefix: 'w!'
  };

  render() {
    const { desc, usage } = this.props.c;
    return (
      <div className="command">
        <h3>{this.state.prefix}{usage}</h3> <p>{desc}</p>
      </div>
    );
  }
}

Command.propTypes = {
  c: PropTypes.object.isRequired
};

export default Command;