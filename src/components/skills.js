import React, { Component } from 'react';

export default class Skills extends Component {
  render() {
    return (
      <div>
        <h2>Skills</h2>
        <hr/>
        <h3>Javascript</h3>
        <div className="indent">
          <p><strong>Experience Level:</strong> 4/5</p>
          <p><strong>Relevant technology:</strong> React, ES6/ES5, Node.js, npm, PWAs, SPAs, Babel, WebPack 4, jQuery, AJAX, JSON</p>
        </div>
        <hr/>
        <h3>HTML/CSS</h3>
        <div className="indent">
          <p><strong>Experience Level:</strong> 4/5</p>
          <p><strong>Relevant technology:</strong> HTML5, CSS3, Bootstrap 3, Bulma, media queries, RWD, CSS grid, animations/transitions</p>
        </div>
        <hr/>
        <h3>Node.js</h3>
        <div className="indent">
          <p><strong>Experience Level:</strong> 2/5</p>
          <p><strong>Relevant technology:</strong> npm, Express.js</p>
        </div>
        <hr/>
        <h3>.Net</h3>
        <div className="indent">
          <p><strong>Experience Level:</strong> 2/5</p>
          <p><strong>Relevant technology:</strong> C#, SSIS, classic ASP, ASP.NET MVC</p>
          <p><strong>Info:</strong> Most of my experience in .Net is from my internship at Price Chopper.
            I worked on older web apps that use classic ASP and developed an app using ASP.NET MVC.
            I also developed scheduled tasks using SSIS and BIDS.
          </p>
        </div>
        <h3>Databases</h3>
        <div className="indent">
          <p>Some databases I have used are SQL Server, MySQL, and Netezza. 
            I plan to learn a NoSQL database like MongoDB when I get the chance.
          </p>
        </div>
        <hr/>
        <h2>School Experience</h2>
        <hr/>
        <h3>Java</h3>
        <div className="indent">
          <p><strong>Experience Level:</strong> 3/5</p>
          <p><strong>College Courses:</strong> Data structures</p>
        </div>
        <hr/>
        <h3>C</h3>
        <div className="indent">
          <p><strong>Experience Level:</strong> 2/5</p>
          <p><strong>College Courses:</strong> Programming at the Hardware Software Interface</p>
        </div>
        <hr/>
        <h3>C#</h3>
        <div className="indent">
          <p><strong>Experience Level:</strong> 3/5</p>
          <p><strong>College Courses:</strong> Intermediate Programming in C#</p>
        </div>
        <hr/>
        <h3>C++</h3>
        <div className="indent">
          <p><strong>Experience Level:</strong> 2/5</p>
          <p><strong>College Courses:</strong> Intro to Programming</p>
        </div>
      </div>
    );
  }
}
