import React, { Component } from 'react';
import RemoteReqIcon from '../../assets/img/remotereqicon.png';
import RemoteReqName from '../../assets/img/remotereqname.png';

class App extends Component {
  render() {
    return (
      <div className='under-construction'>
        <div className="under-construction-header">
          <img className='logo-img' src={ RemoteReqIcon } alt='remotereq icon' />
          <img className='name-img' src={ RemoteReqName } alt='remotereq' />
          <h3>Hey there! Thanks for your patience while we put together our website. Visit us again soon!</h3>
        </div>
      </div>
    );
  }
}

export default App;