import React, { Component } from 'react';

export default class Post extends Component {

  propTypes: {
     name: React.PropTypes.string.isRequired,
     description: React.PropTypes.string
  };

  render() {
    return (
        <li>
          {this.props.name}    *** {this.props.description} ***
        </li>
    );
  }
}
