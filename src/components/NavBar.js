import React, { Component } from "react";
import {
  Link
} from "react-router-dom";
export class NavBar extends Component {
  render() {
    return (
      <div>
<nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">News-24/7</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link " aria-current="page" href="/">Home</a>
        </li>
        {/* <li class="nav-item"><Link class="nav-link" to="/about">About</Link></li> */}
        <li class="nav-item"><Link class="nav-link" to="/business">Business</Link></li>
        <li class="nav-item"><Link class="nav-link" to="/entertainment">Entertainment</Link></li>
        <li class="nav-item"><Link class="nav-link" to="/general">General</Link></li>
        <li class="nav-item"><Link class="nav-link" to="/health">Health</Link></li>
        <li class="nav-item"><Link class="nav-link" to="/science">Science </Link></li>
        <li class="nav-item"><Link class="nav-link" to="/sports">Sports</Link></li>
        <li class="nav-item"><Link class="nav-link" to="/technology">Technology</Link></li>
      </ul>
    </div>
  </div>
</nav>
      </div>
    );
  }
}

export default NavBar;
