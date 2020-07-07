import React, { Component } from 'react';
import axios from 'axios';
import RemoteReqIcon from '../../assets/img/remotereqicon.png';
import RemoteReqName from '../../assets/img/remotereqname.png';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
    };
  }

  submitEmail(e) {
    e.preventDefault();

    axios.post();
  }

  render() {
    return (
      <div className='under-construction'>
        <div className="under-construction-header">

          <div className="under-construction-contents">

            <img className='logo-img' src={ RemoteReqIcon } alt='remotereq icon' />
            <img className='name-img' src={ RemoteReqName } alt='remotereq' />
            <h3>Hey there! Thanks for your patience while we put together our website. Visit us again soon!</h3>

            <p>In the meantime, subscribe to be notified on when we go live!</p>

            <form>
              <input></input>
              <button>submit</button>
            </form>

          </div>
        </div>
      </div>
    );
  }
}

export default App;