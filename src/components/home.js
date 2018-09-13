import React, { Component } from 'react';

export default class Home extends Component {
  testLinks() {
    var win = window.open(window.location.pathname, '_blank');
    // this.checkForPopups(win);
  }

  // checkForPopups(win) {
  //   if (!win) {
  //     alert('Please allow popups for this website');
  //   }
  // }
  
  render() {
    return (
      <div>
        <h2>Marshall Grimmett</h2>
        <p>Full-Stack Developer.</p>
        <p>PWA Enthusiast.</p>
        {/* <button onClick={this.testLinks}>Test links on mobile</button> */}
      </div>
    );
  }
}
