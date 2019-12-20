import React, { Component } from 'react';
import RemoteReq from '../../assets/img/remotereqicon.jpg';

class App extends Component {
  render() {
    return (
      <div className='under-construction'>
        <div className="under-construction-header">
        <img src={ RemoteReq } alt='remotereq icon' />
          <h1>RemoteReq</h1>
          <h3>Hey there! Thanks for your patience while we put together our website. Visit us again soon!</h3>
        </div>
      </div>
    );
  }
}

export default App;