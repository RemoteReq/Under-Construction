import React, { Component } from 'react';
import axios from 'axios';
import RemoteReqIcon from '../../assets/img/remotereqicon.png';
import RemoteReqName from '../../assets/img/remotereqname.png';

const server = 'http://localhost:3030/api/subscribers';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitEmail = this.submitEmail.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  handleChange(e) {
    e.preventDefault();

    this.setState({
      email: e.target.value,
    }, () => { console.log(this.state.email); });
  }

  submitEmail(e) {
    e.preventDefault();

    const { email } = this.state;

    if (email) {
      const body = {
        email,
      };

      axios.post(server, body)
        .then((result) => {
          console.log('result', result);
        });
    } else {
      console.log('Please enter an email');
    }

    this.resetForm();
  }

  resetForm() {
    document.getElementById('subscribe-form').reset();
    this.setState({
      email: '',
    }, () => { console.log('form reset, here is the state', this.state); });
  }

  render() {
    return (
      <div className='under-construction'>
        <div className="under-construction-banner">

          <div className="under-construction-contents">

            <div className="under-construction-header">
              <div>
                <img className='logo-img' src={ RemoteReqIcon } alt='remotereq icon' />
              </div>
              <div>
                <img className='name-img' src={ RemoteReqName } alt='remotereq' />
              </div>
            </div>

            <div className="subscribe-contents">
              <h4>Hey there! Thanks for your patience while we put together our website. Visit us again soon!</h4>
              <p className="small-paragraph">In the meantime, subscribe to be notified on when we go live!</p>

              <form id="subscribe-form">
                <input
                  type="email"
                  placeholder="Email"
                  onChange={(e) => this.handleChange(e)}
                  ></input>

                <button
                  className="button-1"
                  type="submit"
                  onClick={(e) => this.submitEmail(e)}
                >Subscribe</button>
              </form>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default App;