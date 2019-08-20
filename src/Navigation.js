import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Navigation extends Component {

  render() {
    return (

      <div class="navbar">

     <Link to="/signup"><i class="search"></i> Signup</Link>
     <Link to="/login"><i class="login"></i> Login</Link>
      <Link to="/profile"><i class="login"></i> Profile</Link>
      <Link to="/browse"><i class="browse"></i> Browse</Link>
 </div>

          )
        }
      }

      export default Navigation;
