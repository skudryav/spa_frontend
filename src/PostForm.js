import React, { Component } from 'react';
import Post from './Post';

export default class PostForm1 extends Component {
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
