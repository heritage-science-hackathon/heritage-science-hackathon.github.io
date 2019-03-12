import React, { Component } from 'react';


class Intro extends Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <div className="m-auto-ns f4 f3-m f3-l tc w-80-l normal">
        <h1>&lt; Heritage Science Hackathon /&gt;</h1>
        <div className="f4 f3-m f3-l mb3 mb4-ns">
          Join us at Here East for a Heritage Science Hackathon. Team up with a broad range of heritage professionals, early career researchers, programmers and students to work on issues faced by local heritage institutions. 
        </div>
        <div>
          Use new technology and find new ways to present heritage science to new audiences. 
        </div>
      </div>
    )
  }
}


export default Intro