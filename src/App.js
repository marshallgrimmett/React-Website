import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from './components/home.js';
import About from './components/about.js';
import Skills from './components/skills.js';
// import Portfolio from './components/portfolio.js';
import Contact from './components/contact.js';


export default class App extends Component {
  componentDidMount() {
    window.addEventListener("resize", () => {
      document.getElementById("sideNav").style.width = "";
    });
  }

  // closeNav() {
  //   document.getElementById("sideNav").style.width = "";
  // }

  // openNav() {
  //   document.getElementById("sideNav").style.width = "200px";
  // }

  toggleNav() {
    var nav = document.getElementById("sideNav");
    // var togBtnIcon = document.getElementById("togBtnIcon");
    var leftIcon = document.getElementById("leftIcon");
    var rightIcon = document.getElementById("rightIcon");

    if (nav.style.width === "") {
      // togBtnIcon.classList.add("transition");
      leftIcon.classList.add("transition-right");
      rightIcon.classList.add("transition-left");
      nav.style.width = "200px";
    }
    else {
      // togBtnIcon.classList.remove("transition");
      leftIcon.classList.remove("transition-right");
      rightIcon.classList.remove("transition-left");
      nav.style.width = "";
    }
  }
  
  render() {
    return (
      <Router>
        <div className="App">
          {/* <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p> */}

          <header id="header">
            <Link to="/"><img className="logo" alt="M" src="./android-chrome-192x192.png" /></Link>
            <a onClick={this.toggleNav} id="toggleBtn">
              {/* <i id="togBtnIcon" className="fa fa-chevron-left"></i> */}
              <i id="leftIcon" className="fa fa-chevron-left"></i>
              <i id="rightIcon" className="fa fa-chevron-right"></i>
            </a>
          </header>
          
          <nav id="sideNav">
            <Link to="/"><img className="logo" alt="M" src="./android-chrome-192x192.png" /></Link>
            <Link to="/" onClick={this.toggleNav}>Home</Link>
            <Link to="/about" onClick={this.toggleNav}>About</Link>
            <Link to="/skills" onClick={this.toggleNav}>Skills</Link>
            {/* <Link to="/portfolio" onClick={this.toggleNav}>Portfolio</Link> */}
            <Link to="/contact" onClick={this.toggleNav}>Contact</Link>
          </nav>

          <main id="main">
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/skills" component={Skills} />
            {/* <Route path="/portfolio" component={Portfolio} /> */}
            <Route path="/contact" component={Contact} />
          </main>

          {/* <footer id="footer"> */}
            {/* <p>version @1.0.2</p> */}
            {/* <p>Find me on social media.</p> */}
            {/* <a href="#"><i className="fa fa-facebook-official"></i></a> */}
            {/* <a href="#"><i class="fa fa-instagram"></i> */}
            {/* <a href="#"><i class="fa fa-snapchat"></i> */}
            {/* <a href="#"><i class="fa fa-pinterest-p"></i> */}
            {/* <a href="#"><i class="fa fa-twitter"></i> */}
            {/* <a href="#"><i className="fa fa-linkedin"></i></a> */}
          {/* </footer> */}
          
        </div>
      </Router>
    );
  }
}
