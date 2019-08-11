import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './App.css';

class Profile extends Component {


    componentDidMount() {
      if (!localStorage.token) {
        this.props.history.push('/login')
      }
    }

    render () {
      return (
        <div>
          {
            this.props.name ?
            (`Welcome, ${this.props.name}!`):
            ('Getting your stuff...')
          }
          <ul>
            <li>
              <Link className="my-cool-link" to="/favorites">Go to my favorites</Link>
            </li>
          </ul>
        </div>
      );
    }
  }

export default Profile;
