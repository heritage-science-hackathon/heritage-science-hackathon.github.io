import React, { Component } from 'react';


class InfoBlock extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    const {title, p1, p2, p3, p4, className, id, link, linkTitle, secondLink, secondLinkTitle} = this.props
    return (
      <div className={`pa4 info ${className}`} id={id}>
        <div className="pb4 f2">{title}</div>
        {p1 && <div className="pb4">{p1}</div> } 
        {p2 && <div className="pb4">{p2}</div> }
        {p3 && <div className=""> {p3}</div> }
        <a href={link}>{linkTitle}</a> <a href={secondLink}>{secondLinkTitle}</a>
      </div>
    )
  }
}


export default InfoBlock