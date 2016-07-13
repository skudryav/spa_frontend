import React, { Component } from 'react';
import PostForm from './PostForm';

export default class App extends Component {
  render() {
    return (

      <div>
          <PostForm list={[
                       { id: 1, name: 'News 1', description: 'News 1 desc' },
                       { id: 2, name: 'News 2', description: 'News 2 desc' },
                       { id: 3, name: 'News 3', description: 'News 3 desc' }
                     ]} />
      </div>
    );
  }
}
