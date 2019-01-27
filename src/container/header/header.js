import React, { Component } from 'react';
import history from '../../history/history.js'
import './header.css'

class Header extends Component {
    constructor(props){
      super(props);
      this.state={

      }
    }

    goToDashboard = () => {
      history.push('/')
    }

    gotoArray = () => {
      history.push('/array')
    }

    gotForloop = () => {
      history.push('/forloop')
    }

    componentDidMount(){
    }
  render() {
    return (
      <div className="Header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <ul>
                <li  onClick={this.goToDashboard}>Home</li>
                <li  onClick={this.gotoArray}>Array Page</li>
                <li  onClick={this.gotForloop}>Loop Page</li>
              </ul>
            </div>
    </div>
    </nav>
      </div>
    );
  }
}

export default Header;
