import React, { Component } from 'react';
import Nav from './Nav'
import Intro from './Intro'
import InfoBlock from './Info'
import MapContainer from './Map'
import computer from './images/computer.jpeg'


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="side-image fixed vh-100 w-50 dn-m dn-s overflow-hidden">
          <img className="dn-m dn-s" src={computer} />
        </div>
        <div className="min-vh-100 w-50-l relative flex flex-column ml-auto">
          <Nav />
          <Intro />
          <div>
            {information.map(block =>
              <InfoBlock {...block} />  
            )}
          </div>
          <MapContainer />
        </div>
      </div>
    );
  }
}

export default App;



const information = [
  {
    title: 'At a Glance',
    p1: "Date and Time:       11:00 am, 18 May 2019, to 6:00 pm, 19 May 2019",
    p2: "Open to:       All",
    p3: "Cost:      Free",
    p4: "Location:      The Auditorium, UCL at Here East, Queen Elizabeth Olympic Park, London, E20 3BS",
    id: 'glance',
    className: 'info-one'
  },
  {
    title: 'The Weekend',
    p1:
      "Join us on Friday evening for introductions and canapes. Participating museums will present the issues that they are facing and you can network with the other participants, and think about how to solve their issues.",
    p2:
      "Saturday the fun really kicks in. We will start in the morning with a group formation and then, its up to you! After group formation we will run a couple of workshops which may help you with your project proposals such as website building tools tips and tricks and how to use sketchfab. In teams you will work on different ways to address issues posed on the Friday evening.  We can’t stress enough at this point, there are no wrong answers! You can design an exhibition, build and app or website, develop a 3D model or plan and education outreach box and curriculum. Think outside the box!",
    p3: 
      "Sunday will carry on the good work, but at about 3.30 we will ask you to wrap things up. At the end of the day we will ask each team to present their projects to the rest of the group and followed by a prizegiving, networking and (of course) drinks.",
    id: 'details',
    className: 'info-two'
  },
  {
    title: 'Call for Ideas',
    p1:
      'The Heritage Science Hackathon will be a weekend of working on creatively solving issues faced by small-medium sized heritage institutions in East London. Does your organisation face any issues that could benefit from a fresh perspective? We welcome more than one suggestion, and are open to discussing and developing ideas further with you. This is an opportunity to have a highly multidisciplinary team to work on issues faced by your organisation.',
    p2: 'Themes: Digitisation, Curation, Educational Outreach',
    id: 'ideas',
    className: 'info-three'
  },
  {
    title: 'Tickets',
    p1: 'Tickets will be available via out eventbrite page in the coming days.',
    id: 'tickets',
    className: 'info-four'
  },
  {
    title: 'Contact',
    p1: 'ida.ahmad.17@ucl.ac.uk',
    id: 'contact',
    className: 'info-five'
  }
]