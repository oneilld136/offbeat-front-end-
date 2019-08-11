import React, { Component } from 'react';

class Navigation extends Component {

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <h2 className="nav-link" href="/">Home <span className="sr-only">(current)</span></h2>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <h2 className="nav-link" href="/"> Login <span className="sr-only">(current)</span></h2>
                  </li>
                  <li className="nav-item">
                    <h2 className="nav-link" href="/">Sign Up <span className="sr-only">(current)</span></h2>
                  </li>
                  <li className="nav-item">
                    <h2 className="nav-link" href="/">Browse <span className="sr-only">(current)</span></h2>
                  </li>

                </ul>
                <form className="form-inline my-2 my-lg-0">
                  <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
              </div>
            </nav>
          )
        }
      }

      export default Navigation;
