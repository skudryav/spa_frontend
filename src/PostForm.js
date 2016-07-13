import React, { Component } from 'react';
import Post from './Post';

export default class PostForm1 extends Component {
  propTypes: {
     name: React.PropTypes.string.isRequired,
     description: React.PropTypes.string
  };
  render() {
    return (
      <div>
        <ul>
          {this.props.list.map(function(listValue){
            return <Post name={listValue.name} description={listValue.description} />;
          })}
        </ul>
      </div>
    );
  }
}
