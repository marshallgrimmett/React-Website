import React, { Component } from 'react';
import '../App.css';
// import GoogleMapsLoader from '@google/maps';
// <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCqtwzYkd_XzxOl07CUpLeX_DwU6D11Ba0&callback=initMap" type="text/javascript"></script>

export default class Contact extends Component {

  componentDidMount() {
    // this.loadGoogleMapsApi();
  }

  // loadGoogleMapsApi() {
  //   const script = document.createElement("script");
  //   script.src = "https://maps.googleapis.com/js/api.js";
  //   script.async = true;
  //   script.defer = true;
  //   script.type = "text/javascript";

  //   const API_KEY = "AIzaSyCqtwzYkd_XzxOl07CUpLeX_DwU6D11Ba0";

  //   script.onload = () => {
  //     gapi.load('client', () => {
  //       gapi.client.setApiKey(API_KEY);
  //       gapi.client.load('youtube', 'v3', () => {
  //         this.setState({ gapiReady: true });
  //       });
  //     });
  //   };

  //   document.body.appendChild(script);
  // }

  // myMap() {
  //   var myCenter = new google.maps.LatLng(41.878114, -87.629798);
  //   var mapOptions = {
  //     center:myCenter,
  //     zoom:12, scrollwheel: false, draggable: false,
  //     mapTypeId:google.maps.MapTypeId.ROADMAP
  //   };
  //   var map = new google.maps.Map(document.getElementById("googleMap"),mapOptions);
  //   var marker = new google.maps.Marker({
  //     position: myCenter,
  //   });

  //   marker.setMap(map);
  // }

  render() {
    return (
      <div className="App">
        <h2>Contact Me</h2>
        <div>
          <i className="fa fa-map-marker fa-fw"></i> Saratoga Springs, NY<br/><br/>
          <i className="fa fa-phone fa-fw"></i> Phone: +1 (720) 238-7212<br/><br/>
          <i className="fa fa-envelope fa-fw"></i> Email: marshallmg6@gmail.com<br/><br/>
        </div>
        {/* <p>Swing by for a cup of <i className="fa fa-coffee"></i>, or leave me a note:</p>
        <form>
          <input type="text" placeholder="Name" required name="Name" />
          <br/>
          <input type="text" placeholder="Email" required name="Email" />
          <br/>
          <input type="text" placeholder="Message" required name="Message" />
          <br/>
          <button type="submit">
            <i className="fa fa-paper-plane"></i> SEND MESSAGE
          </button>
        </form>
        <br/><br/><br/><br/> */}
        {/* <div id="googleMap" style={{width:'400px', height:'400px'}}></div> */}
      </div>
    );
  }
}

/* <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCqtwzYkd_XzxOl07CUpLeX_DwU6D11Ba0&callback=myMap"></script> */

// To use this code on your website, get a free API key from Google.
// Read more at: https://www.w3schools.com/graphics/google_maps_basic.asp

// function myMap() {
//   var myCenter = new google.maps.LatLng(41.878114, -87.629798);
//   var mapOptions = {
//     center:myCenter,
//     zoom:12, scrollwheel: false, draggable: false,
//     mapTypeId:google.maps.MapTypeId.ROADMAP
//   };
//   var map = new google.maps.Map(document.getElementById("googleMap"),mapOptions);
//   var marker = new google.maps.Marker({
//     position: myCenter,
//   });

//   marker.setMap(map);
// }

// Modal Image Gallery
// function onClick(element) {
//   document.getElementById("img01").src = element.src;
//   document.getElementById("modal01").style.display = "block";
//   var captionText = document.getElementById("caption");
//   captionText.innerHTML = element.alt;
// }

// Change style of navbar on scroll
// window.onscroll = function() {myFunction()};
// function myFunction() {
//     var navbar = document.getElementById("myNavbar");
//     if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
//         navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
//     } else {
//         navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
//     }
// }

// Used to toggle the menu on small screens when clicking on the menu button
// function toggleFunction() {
//     var x = document.getElementById("navDemo");
//     if (x.className.indexOf("w3-show") == -1) {
//         x.className += " w3-show";
//     } else {
//         x.className = x.className.replace(" w3-show", "");
//     }
// }