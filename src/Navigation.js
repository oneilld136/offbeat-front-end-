import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Navigation extends Component {

  render() {
    return (

      <div class="navbar">
     <a class="Home" href="/"><i class="home"></i>Home</a>
     <a href="/signup"><i class="search"></i> Signup</a>
     <a href="/login"><i class="login"></i> Login</a>
      <a href="/profile"><i class="login"></i> Profile</a>
      <a href="/browse"><i class="browse"></i> Browse</a>
 </div>

          )
        }
      }

      export default Navigation;
