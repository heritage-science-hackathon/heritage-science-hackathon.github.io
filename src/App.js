import React, { Component } from 'react';
import Nav from './Nav'
import Intro from './Intro'
import InfoBlock from './Info'
import MapContainer from './Map'
import computer from './images/computer.jpg'


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="side-image fixed dn db-ns vh-100 w-50-ns dn-m overflow-hidden">
          <img className=" "src={computer} />
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
      "Join us on Saturday morning for introductions and canapes. Participating museums will present the issues that they are facing and you can think about how to solve their issues.",
    p2:
      "Then the fun really kicks in. We will start after a break with a group formation excercise and then, its up to you! After lunch we will run a couple of workshops which may help you with your project proposals such as website building tools, tips and tricks and how to use sketchfab. In teams you will work on different ways to address issues posed on the Friday evening.  We can’t stress enough at this point, there are no wrong answers! You can design an exhibition, build and app or website, develop a 3D model or plan and education outreach box and curriculum. Think outside the box!",
    p3: 
      "Sunday will carry on the good work, but at about 3.30 we will ask you to wrap things up. At the end of the day we will ask each team to present their projects to the rest of the group and followed by a prizegiving, networking and (of course) drinks.",
    id: 'details',
    className: 'info-two'
  },
  {
    title: 'Call for Ideas',
    p1:
      'The Heritage Science Hackathon will be a weekend of working on creatively solving issues faced by small-medium sized heritage institutions in East London. Does your organisation face any issues that could benefit from a fresh perspective? We welcome more than one suggestion, and are open to discussing and developing ideas further with you. This is an opportunity to have a highly multidisciplinary team to work on issues faced by your organisation. Please email rosie.brigham.10@ucl.ac.uk for more details',
    p2: 'Themes: Digitisation, Curation, Educational Outreach',
    id: 'ideas',
    className: 'info-three'
  },
  {
    title: 'Tickets',
    id: 'tickets',
    className: 'info-four',
    link: 'https://www.eventbrite.com/e/heritage-science-hackathon-tickets-58844985937',
    linkTitle: 'Book your tickets on our eventbrite page now!'
  },
  {
    title: 'Contact',
    p1: 'Please contact Ida Ahmad or Rosie Brigham for more details',
    id: 'contact',
    className: 'info-five',
    link: 'mailto:ida.ahmad.17@ucl.ac.uk',
    linkTitle: 'ida.ahmad.17@ucl.ac.uk',
    secondLink: 'mailto:rosie.brigham.10@ucl.ac.uk',
    secondLinkTitle: 'rosie.brigham.10@ucl.ac.uk'
  }
]