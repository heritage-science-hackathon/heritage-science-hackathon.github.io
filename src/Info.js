import React, { Component } from 'react';


class InfoBlock extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    const {title, p1, p2, p3, p4, className} = this.props
    return (
      <div className={`pa4 ${className}`}>
        <div className="pb4 f2">{title}</div>
        <div className="pb4">{p1}</div>
        <div className="pb4">{p2}</div>
        <div className=""> {p3}</div>
      </div>
    )
  }
}


export default InfoBlock